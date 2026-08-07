import SiteNav from "@/components/SiteNav";
import ArchiveShelf from "@/components/ArchiveShelf";
import { getArchivePosts } from "@/lib/substack";

// The shelf only reads as an archive once there is a run of posts. Below this
// it renders the invitation instead of a near-empty row of books.
const MIN_POSTS = 3;

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/nongizzharith/",
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
      </main>
      <ArchiveSection />
      <div className="site site-tail">
        <ContactStrip />
      </div>
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

async function ArchiveSection() {
  const posts = await getArchivePosts();
  const hasArchive = posts.length >= MIN_POSTS;

  return (
    <section className="archive" id="notes" aria-labelledby="archive-title">
      <div className="archive-head">
        <h2 id="archive-title">Newsletter Archive</h2>
        <p>
          Every edition of What Izz. Field notes on building AI systems for
          ASEAN, written between lectures.
        </p>
      </div>

      {hasArchive ? (
        <ArchiveShelf posts={posts} />
      ) : (
        <div className="archive-empty">
          <p>
            The first essays are still being written. Subscribe and they will
            land in your inbox as they publish.
          </p>
          <a className="cta-primary" href={SOCIAL_LINKS.substack}>
            Subscribe on Substack
          </a>
        </div>
      )}
    </section>
  );
}

function StatementBand() {
  return (
    <section className="statement" id="about" aria-labelledby="statement-title">
      <div className="statement-inner">
        <div className="statement-copy">
          <h2 className="statement-text" id="statement-title">
            Nong Izz Harith;{" "}
            <span className="hl">founder, engineer and writer</span>, building AI
            infrastructure for the parts of ASEAN that enterprise software priced
            out. Insurance brokerages, oncology pharmacies, halal supply chains.
            The first system I shipped gave a brokerage back{" "}
            <span className="hl">61 hours per thousand renewals</span>. Most of
            the rest gets built between lectures at MMU.
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

const HANDLES = [
  {
    label: "@nongizzharith",
    href: SOCIAL_LINKS.youtube,
    name: "YouTube",
    icon: (
      <path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.5 12 3.5 12 3.5s-6.5 0-8.4.6a3 3 0 0 0-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 8.4.6 8.4.6s6.5 0 8.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8zM9.8 15.6V8.4l6.2 3.6z" />
    ),
  },
  {
    label: "@nongizzharith",
    href: SOCIAL_LINKS.x,
    name: "X",
    icon: (
      <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.7L5.8 22H2.7l7.6-8.7L1.3 2h6.6l4.6 6.1zm-1.1 18h1.7L7.3 3.7H5.4z" />
    ),
  },
  {
    label: "@nongizzharith",
    href: SOCIAL_LINKS.instagram,
    name: "Instagram",
    icon: (
      <>
        <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.6" cy="6.4" r="1.3" />
      </>
    ),
  },
];

function ContactStrip() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 className="contact-title" id="contact-title">
          Send me the strange brief.
        </h2>

        <div className="handle-pills" aria-label="Social links">
          {HANDLES.map((handle) => (
            <a key={handle.name} href={handle.href}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
                {handle.icon}
              </svg>
              {handle.label}
            </a>
          ))}
        </div>

        <p className="contact-blurb">
          Collaboration, brand work, AI systems, or a sharp note from the
          internet. I read everything, and I write up what I learn on Substack.
        </p>

        <form
          className="signup"
          action="https://nongizzharith.substack.com/subscribe"
          method="get"
          target="_blank"
          rel="noopener"
        >
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            aria-label="Email address"
            required
          />
          <button type="submit">Sign up</button>
        </form>

        <a className="contact-mail" href="mailto:nong.izz.harith@outlook.com">
          nong.izz.harith@outlook.com
        </a>

        <p className="contact-foot">
          &copy; {new Date().getFullYear()} Nong Izz Harith
        </p>
      </div>
    </section>
  );
}

