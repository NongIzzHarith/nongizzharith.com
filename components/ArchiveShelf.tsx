"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ArchivePost = {
  title: string;
  link: string;
  date: string;
  summary: string;
};

const TONES = ["dark", "light", "mid"] as const;

// Spine geometry is derived from the index so it stays identical between the
// server and client renders.
function spineStyle(i: number) {
  return {
    "--bh": `${330 + ((i * 37) % 90)}px`,
    "--rot": `${-7 + ((i * 5) % 13)}deg`,
    "--lean": `${-1.4 + ((i * 7) % 4) * 0.8}deg`,
  } as React.CSSProperties;
}

export default function ArchiveShelf({
  posts,
  blankCount = 0,
}: {
  posts: ArchivePost[];
  blankCount?: number;
}) {
  const isBlank = blankCount > 0;
  const count = isBlank ? blankCount : posts.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex === null ? null : posts[openIndex];

  // Drag to scroll.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let moved = 0;

    const onDown = (event: PointerEvent) => {
      dragging = true;
      moved = 0;
      startX = event.clientX;
      startLeft = el.scrollLeft;
      el.classList.add("is-dragging");
    };

    const onMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      moved = Math.abs(delta);
      el.scrollLeft = startLeft - delta;
    };

    const onUp = () => {
      dragging = false;
      el.classList.remove("is-dragging");
    };

    // Swallow the click that follows a real drag so a swipe never opens a book.
    const onClick = (event: MouseEvent) => {
      if (moved > 6) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerleave", onUp);
    el.addEventListener("click", onClick, true);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerleave", onUp);
      el.removeEventListener("click", onClick, true);
    };
  }, []);

  const nudge = useCallback((direction: number) => {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (direction: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = current + direction;
        if (next < 0 || next >= posts.length) return current;
        return next;
      });
    },
    [posts.length]
  );

  // Escape closes the detail view, arrows browse between editions.
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex, step]);

  const onTrackKeyDown = (event: React.KeyboardEvent) => {
    if (openIndex !== null) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nudge(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      nudge(-1);
    }
  };

  return (
    <div className={`shelf${isBlank ? " shelf-blank" : ""}`}>
      {!isBlank && (
        <p className="shelf-hint" aria-hidden>
          drag · scroll · arrow keys
        </p>
      )}

      {!isBlank && (
        <button
          type="button"
          className="shelf-nav shelf-prev"
          aria-label="Scroll archive left"
          onClick={() => nudge(-1)}
        >
          &larr;
        </button>
      )}

      <div
        className="shelf-track"
        ref={trackRef}
        role={isBlank ? "presentation" : "group"}
        aria-label={isBlank ? undefined : "Newsletter archive, scrollable"}
        aria-hidden={isBlank || undefined}
        tabIndex={isBlank ? -1 : 0}
        onKeyDown={onTrackKeyDown}
      >
        {Array.from({ length: count }, (_, i) => {
          const tone = `arch-book-${TONES[i % TONES.length]}`;

          if (isBlank) {
            return (
              <span
                key={i}
                className={`arch-book ${tone} is-blank`}
                style={spineStyle(i)}
              >
                <span className="arch-book-face">
                  <span className="arch-book-rule" />
                  <span className="arch-book-glyph">✦</span>
                </span>
                <span className="arch-book-side" />
              </span>
            );
          }

          const post = posts[i];
          return (
            <button
              type="button"
              key={post.link}
              className={`arch-book ${tone}`}
              style={spineStyle(i)}
              title={post.title}
              aria-label={`Open ${post.title}`}
              onClick={() => setOpenIndex(i)}
            >
              <span className="arch-book-face">
                <span className="arch-book-rule" aria-hidden />
                <span className="arch-book-title">{post.title}</span>
                <span className="arch-book-glyph" aria-hidden>
                  ✦
                </span>
              </span>
              <span className="arch-book-side" aria-hidden />
            </button>
          );
        })}
      </div>

      {!isBlank && (
        <button
          type="button"
          className="shelf-nav shelf-next"
          aria-label="Scroll archive right"
          onClick={() => nudge(1)}
        >
          &rarr;
        </button>
      )}

      <div className="shelf-floor" aria-hidden />

      {open && (
        <div
          className="edition"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
        >
          <div
            className="edition-scrim"
            onClick={() => setOpenIndex(null)}
            aria-hidden
          />

          <div className="edition-stage">
            <div className="edition-cover" aria-hidden>
              <p className="edition-cover-date">{open.date}</p>
              <p className="edition-cover-title">{open.title}</p>
              <span className="edition-cover-rule" />
              <p className="edition-cover-mark">WHAT IZZ IT?</p>
            </div>

            <div className="edition-panel">
              <button
                type="button"
                className="edition-close"
                aria-label="Close"
                onClick={() => setOpenIndex(null)}
              >
                &times;
              </button>

              <p className="edition-date">{open.date}</p>
              <h3 className="edition-title">{open.title}</h3>
              {open.summary && <p className="edition-summary">{open.summary}</p>}

              <a
                className="edition-read"
                href={open.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read this edition &rarr;
              </a>

              <p className="edition-hint" aria-hidden>
                esc to close · ←→ to browse
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
