import SiteNav from "@/components/SiteNav";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/nongharith/",
  x: "https://x.com/nongizzharith",
  youtube: "https://www.youtube.com/@nongizzharith",
  linkedin: "https://linkedin.com/in/nongizzharith",
  substack: "https://nongizzharith.substack.com",
};

const WORK = [
  {
    tag: "INSURANCE / LIVE",
    title: "Lindung AI",
    detail:
      "AI automation for Malaysian insurance brokerages. 61 hours saved per 1,000 renewals.",
    href: "https://lindungai.com",
  },
  {
    tag: "HEALTHCARE",
    title: "DoseBase",
    detail:
      "Oncology pharmacy workflow software, built for Malaysia's National Cancer Institute.",
  },
  {
    tag: "HALAL ECONOMY",
    title: "WakatuAI",
    detail:
      "Halal nutrition intelligence. Meal photo recognition with certification verification.",
  },
  {
    tag: "COMPANY",
    title: "Sawang Tech",
    detail:
      "The parent company. AI infrastructure for underserved ASEAN verticals.",
    href: "https://sawangtech.com",
  },
];

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

const STORY = [
  {
    n: "01",
    place: "MANAMA, BAHRAIN",
    title: "Gulf childhood",
    detail:
      "Ten years growing up in Bahrain. Gulf culture, trust dynamics, and Arab business relationships absorbed from the inside.",
  },
  {
    n: "02",
    place: "KLANG, SELANGOR",
    title: "The return",
    detail:
      "Home after a decade away. Malaysia felt familiar and strange at once, worth studying like a market map.",
  },
  {
    n: "03",
    place: "SUBANG JAYA",
    title: "First sales",
    detail:
      "Cold calls and market mornings selling durian juice. Low margins, real lessons in how money actually moves.",
  },
  {
    n: "04",
    place: "MEDI-WEALTH",
    title: "The 61 hours",
    detail:
      "Automated renewal emails for an insurance brokerage. Four hours of work became thirty minutes, 61 hours saved per 1,000 renewals. Sawang Tech starts here.",
  },
  {
    n: "05",
    place: "CYBERJAYA",
    title: "Founder mode",
    detail:
      "Building AI infrastructure for underserved ASEAN verticals: insurance, healthcare, the halal economy. Computer engineering at MMU by day.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroFull />
      <SiteNav />
      <StatementBand />
      <main className="site">
        <IndexBento />
        <ContactStrip />
        <SiteFoot />
      </main>
    </>
  );
}

function HeroFull() {
  return (
    <header className="hero-full">
      <picture>
        <source media="(max-width: 820px)" srcSet="/images/hero-mobile.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-desktop.jpg" alt="Nong Izz Harith" />
      </picture>

      <a href="#index" className="scroll-cue" aria-label="Scroll to content">
        <span>Scroll</span>
        <svg viewBox="0 0 16 44" aria-hidden focusable="false">
          <path
            d="M8 0 V40 M1.5 32.5 L8 40.5 L14.5 32.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </a>
    </header>
  );
}

function StatementBand() {
  return (
    <section className="statement" id="about" aria-labelledby="statement-title">
      <div className="statement-inner">
        <div className="statement-copy">
          <h2 className="statement-text" id="statement-title">
            Nong Izz Harith; <span className="hl">placeholder role</span>,{" "}
            <span className="hl">placeholder role</span>,{" "}
            <span className="hl">placeholder role</span> and the{" "}
            <span className="hl">placeholder headline phrase</span> &mdash;
            placeholder copy for the statement that sits under the hero. Replace
            this with the real positioning line about the work, the ventures and
            why any of it exists.
          </h2>

          <a href="#story" className="statement-link">
            About Izz <span aria-hidden>&rarr;</span>
          </a>
        </div>

        <div className="statement-media">
          <div className="statement-placeholder">
            <span>Portrait</span>
            <span>placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexBento() {
  return (
    <section className="bento index-bento" id="index">
      <div className="bento-grid">
        <article className="bento-card bento-timeline" id="story">
          <div className="bento-card-head">
            <div>
              <h3>From the beginning</h3>
            </div>
          </div>
          <div className="story-list">
            {STORY.map((item) => (
              <div className="story-row" key={item.n}>
                <span className="story-num" aria-hidden>
                  {item.n}
                </span>
                <div className="story-body">
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
                <p className="story-place">{item.place}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="bento-card bento-notes" id="notes">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">Field notes</p>
              <h3>Essays from the edge of the work.</h3>
            </div>
            <a href={SOCIAL_LINKS.substack}>Read on Substack</a>
          </div>
          <div className="bento-notes-grid">
            {NOTES.map((note) => (
              <a key={note.title} className="note-mini" href={SOCIAL_LINKS.substack}>
                <span>
                  {note.date} / {note.tag}
                </span>
                <strong>{note.title}</strong>
                <p>{note.excerpt}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="bento-card bento-work" id="work">
          <div className="bento-card-head">
            <div>
              <p className="bento-kicker">Selected work</p>
              <h3>Proof over promise.</h3>
            </div>
            <a href="https://sawangtech.com">sawangtech.com</a>
          </div>
          <div className="work-row">
            {WORK.map((item) =>
              item.href ? (
                <a key={item.title} href={item.href}>
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </a>
              ) : (
                <div key={item.title}>
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              )
            )}
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
          <a className="cta-primary" href="mailto:nong.izz.harith@outlook.com">
            nong.izz.harith@outlook.com
          </a>
          <div className="contact-handles" aria-label="Social links">
            <a href="https://x.com/nongizzharith">x</a>
            <span>/</span>
            <a href="https://linkedin.com/in/nongizzharith">linkedin</a>
            <span>/</span>
            <a href="https://nongizzharith.substack.com">substack</a>
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
        <span>02.9213 N / 101.6559 E</span>
        <span>v2.2</span>
      </div>
    </footer>
  );
}
