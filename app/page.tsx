import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/nongharith/",
  x: "https://x.com/nongizzharith",
  youtube: "https://www.youtube.com/@nongizzharith",
  linkedin: "https://linkedin.com/in/nongizzharith",
};

const NOTES = [
  {
    date: "MAY 2026",
    tag: "FOUNDER MODE",
    title: "Founder mode is a student operating system",
    excerpt:
      "A way to build before permission, write before certainty, and let small windows of time compound.",
  },
  {
    date: "APR 2026",
    tag: "IDENTITY",
    title: "The Bahrain return",
    excerpt:
      "Ten years outside Malaysia made the local market feel familiar, strange, and worth studying.",
  },
  {
    date: "APR 2026",
    tag: "COMEBACK",
    title: "When the body becomes market research",
    excerpt:
      "Two years away from climbing turned a private constraint into sharper product instinct.",
  },
];

const CURRENT = [
  {
    label: "MODE",
    value: "Founder mode, student constraints",
  },
  {
    label: "BASE",
    value: "Cyberjaya, MMU orbit",
  },
  {
    label: "NOW",
    value: "Building, writing, learning in public",
  },
  {
    label: "SIGNAL",
    value: "Taste, systems, personal leverage",
  },
];

const STORY_POINTS = [
  {
    title: "Gulf-raised, Malaysia-built",
    meta: "Bahrain -> Cyberjaya",
    detail:
      "Ten years outside Malaysia made the return feel like a market map.",
  },
  {
    title: "The student constraint",
    meta: "MMU / Engineering",
    detail: "Computer engineering by day. Building systems in the margins.",
  },
  {
    title: "The comeback thread",
    meta: "Climbing",
    detail: "A long break from climbing turned pain into product instinct.",
  },
  {
    title: "The founder posture",
    meta: "Founder mode",
    detail: "Build before permission. Write before certainty. Compound in public.",
  },
];

const INFLUENCES = [
  "David Senra",
  "Mohamed Alabbar",
  "Key Person of Influence",
  "Nusantara Futurism",
  "GTM Engineering",
  "Vibe Marketing",
];

const TOOLKIT = [
  "AI workflows",
  "Brand systems",
  "Writing",
  "Next.js",
  "Research",
  "Ops",
];

const PRINCIPLES = [
  "Make the interface feel like intent.",
  "Write until the idea has teeth.",
  "Keep the system legible under pressure.",
  "Prefer quiet confidence over noise.",
];

export default function HomePage() {
  return (
    <main className="site">
      <TopNav />
      <IndexBento />
      <ContactStrip />
      <SiteFoot />
    </main>
  );
}

function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      <a href="/" className="wordmark" aria-label="Home">
        <span className="wordmark-avatar" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/profile-emerald.png" alt="" />
        </span>
        <span>Nong Izz Harith</span>
      </a>

      <ul className="topnav-links">
        <li>
          <a href="#index">Index</a>
        </li>
        <li>
          <a href="#feeds">Feeds</a>
        </li>
        <li>
          <a href="#notes">Notes</a>
        </li>
      </ul>

      <div className="topnav-right">
        <span className="status">
          <span className="status-dot" /> Cyberjaya, MY
        </span>
        <ThemeToggle />
        <a href="#contact" className="cta-pill">
          Contact
        </a>
      </div>
    </nav>
  );
}

function IndexBento() {
  return (
    <section className="bento index-bento" id="index" aria-labelledby="index-title">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />

      <div className="bento-grid">
        <article className="bento-card bento-story">
          <p className="eyebrow">N.01 / INDEX / MAY 2026</p>
          <h1 id="index-title">Founder mode from Cyberjaya.</h1>
          <p>
            I am Nong Izz Harith, a fourth-year Computer Engineering student at
            MMU, building digital experiments, brand systems, and AI workflows.
            Gulf-raised, Malaysia-built, now operating from Cyberjaya.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="cta-primary">
              Send a signal
            </a>
            <a href="#notes" className="cta-secondary">
              Read the notes
            </a>
          </div>
        </article>

        <aside className="bento-card bento-portrait" aria-label="Portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bnw-profile.jpg" alt="Nong Izz Harith" />
          <div className="portrait-caption">
            <span>Nong Izz Harith</span>
            <span>Cyberjaya / Founder mode</span>
          </div>
        </aside>

        <article className="bento-card bento-timeline">
          <p className="bento-kicker">Storyline</p>
          <div className="timeline-list">
            {STORY_POINTS.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
                <p>{item.meta}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="bento-card bento-founder-mode">
          <p className="bento-kicker">Founder mode</p>
          <h3>For students who cannot wait for permission.</h3>
          <p>
            The constraint is the point. Classes, deadlines, and small windows
            of time force the work to become compressed, direct, and real.
          </p>
        </article>

        <article className="bento-card bento-now">
          <p className="bento-kicker">Current state</p>
          <div className="current-list bento-current-list">
            {CURRENT.map((item) => (
              <div className="current-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="bento-card bento-references">
          <p className="bento-kicker">Influence map</p>
          <h3>Built from biographies, systems, and market taste.</h3>
          <div className="tool-grid">
            {INFLUENCES.map((reference) => (
              <span key={reference}>{reference}</span>
            ))}
          </div>
        </article>

        <article className="bento-card bento-tools">
          <p className="bento-kicker">Toolkit</p>
          <div className="tool-grid">
            {TOOLKIT.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>

        <article className="bento-card bento-notes" id="notes">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">Field notes</p>
              <h3>Essays from the edge of the work.</h3>
            </div>
            <a href="#contact">Request draft</a>
          </div>
          <div className="bento-notes-grid">
            {NOTES.map((note) => (
              <a key={note.title} className="note-mini" href="#contact">
                <span>
                  {note.date} / {note.tag}
                </span>
                <strong>{note.title}</strong>
                <p>{note.excerpt}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="bento-card bento-profile">
          <div>
            <p className="bento-kicker">Public graph</p>
            <h3>@nongizzharith</h3>
            <p>
              The open surface for notes, experiments, taste, and the slow
              proof of a builder becoming inevitable.
            </p>
          </div>
          <div className="bento-social-row" aria-label="Social links">
            <a href={SOCIAL_LINKS.youtube}>YT</a>
            <a href={SOCIAL_LINKS.linkedin}>IN</a>
            <a href={SOCIAL_LINKS.instagram}>IG</a>
            <a href={SOCIAL_LINKS.x}>X</a>
          </div>
        </article>

        <article className="bento-card bento-youtube" id="feeds">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">YouTube</p>
              <h3>Latest videos</h3>
            </div>
            <a href={SOCIAL_LINKS.youtube}>Open channel</a>
          </div>
          <div className="video-row">
            <a href={SOCIAL_LINKS.youtube}>
              <span>01</span>
              <strong>Channel embed ready</strong>
              <p>Send the channel ID, playlist ID, or video IDs.</p>
            </a>
            <a href={SOCIAL_LINKS.youtube}>
              <span>02</span>
              <strong>Essays in motion</strong>
              <p>A slot for long-form builds, notes, and breakdowns.</p>
            </a>
          </div>
        </article>

        <article className="bento-card bento-x">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">X</p>
              <h3>Public feed</h3>
            </div>
            <a href={SOCIAL_LINKS.x}>Open X</a>
          </div>
          <div className="embed-frame">
            <a
              className="twitter-timeline"
              data-height="360"
              data-chrome="noheader nofooter noborders transparent"
              href={`${SOCIAL_LINKS.x}?ref_src=twsrc%5Etfw`}
            >
              Posts by Nong Izz Harith
            </a>
          </div>
        </article>

        <article className="bento-card bento-instagram">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">Instagram</p>
              <h3>Visual signal</h3>
            </div>
            <a href={SOCIAL_LINKS.instagram}>Open IG</a>
          </div>
          <div className="embed-frame">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={SOCIAL_LINKS.instagram}
              data-instgrm-version="14"
            >
              <a href={SOCIAL_LINKS.instagram}>View Instagram profile</a>
            </blockquote>
          </div>
        </article>

        <article className="bento-card bento-linkedin">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">LinkedIn</p>
              <h3>Professional graph</h3>
            </div>
            <a href={SOCIAL_LINKS.linkedin}>Open profile</a>
          </div>
          <div className="linkedin-fallback">
            <p>
              LinkedIn blocks full feed embeds. This card is wired for the
              public profile badge and falls back to the profile link.
            </p>
            <a href={SOCIAL_LINKS.linkedin}>linkedin.com/in/nongizzharith</a>
          </div>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="nongizzharith"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href={SOCIAL_LINKS.linkedin}
            >
              Nong Izz Harith
            </a>
          </div>
        </article>

        <article className="bento-card bento-principles">
          <p className="bento-kicker">Operating principles</p>
          <div className="principles compact-principles" aria-label="Operating principles">
            {PRINCIPLES.map((principle, index) => (
              <div className="principle" key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <p className="eyebrow">N.04 / SIGNAL</p>
        <h2 className="contact-title" id="contact-title">
          Send me the strange brief.
        </h2>
        <p className="contact-blurb">
          Collaboration, brand work, AI systems, or a sharp note from the
          internet. I read everything. Warm intros are even better.
        </p>

        <div className="contact-actions">
          <a className="cta-primary" href="mailto:hello@nongizzharith.com">
            hello@nongizzharith.com
          </a>
          <div className="contact-handles" aria-label="Social links">
            <a href="https://x.com/nongizzharith">x</a>
            <span>/</span>
            <a href="https://linkedin.com/in/nongizzharith">linkedin</a>
            <span>/</span>
            <a href="https://whatizzit.substack.com">substack</a>
            <span>/</span>
            <a href="https://github.com/nongizzharith">github</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFoot() {
  return (
    <footer className="site-foot">
      <div className="foot-left">
        <span className="foot-mark">N/IZZ</span>
        <span>(c) {new Date().getFullYear()} Nong Izz Harith</span>
      </div>
      <div className="foot-right">
        <span>Cyberjaya, MY</span>
        <span>03.0738 N</span>
        <span>v2.1</span>
      </div>
    </footer>
  );
}
