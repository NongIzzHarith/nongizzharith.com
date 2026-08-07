"use client";

import { useEffect, useRef } from "react";

export type ArchivePost = {
  title: string;
  link: string;
  date: string;
};

const TONES = ["dark", "light", "mid"] as const;

export default function ArchiveShelf({ posts }: { posts: ArchivePost[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

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

    // Swallow the click that follows a real drag so a swipe never opens a post.
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

  const nudge = (direction: number) => {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
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
    <div className="shelf">
      <p className="shelf-hint" aria-hidden>
        drag · scroll · arrow keys
      </p>

      <button
        type="button"
        className="shelf-nav shelf-prev"
        aria-label="Scroll archive left"
        onClick={() => nudge(-1)}
      >
        &larr;
      </button>

      <div
        className="shelf-track"
        ref={trackRef}
        role="group"
        aria-label="Newsletter archive, scrollable"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {posts.map((post, i) => (
          <a
            key={post.link}
            className={`arch-book arch-book-${TONES[i % TONES.length]}`}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            title={post.title}
            style={
              {
                "--bh": `${330 + ((i * 37) % 90)}px`,
                "--rot": `${-7 + ((i * 5) % 13)}deg`,
                "--lean": `${-1.4 + ((i * 7) % 4) * 0.8}deg`,
              } as React.CSSProperties
            }
          >
            <span className="arch-book-face">
              <span className="arch-book-rule" aria-hidden />
              <span className="arch-book-title">{post.title}</span>
              <span className="arch-book-glyph" aria-hidden>
                ✦
              </span>
            </span>
            <span className="arch-book-side" aria-hidden />
          </a>
        ))}
      </div>

      <button
        type="button"
        className="shelf-nav shelf-next"
        aria-label="Scroll archive right"
        onClick={() => nudge(1)}
      >
        &rarr;
      </button>

      <div className="shelf-floor" aria-hidden />
    </div>
  );
}
