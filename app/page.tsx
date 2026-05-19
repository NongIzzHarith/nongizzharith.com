const NOTES = [
  {
    date: "MAY 2026",
    tag: "TASTE",
    title: "A portfolio should feel like a control room",
    excerpt:
      "The useful version of a personal site is not a museum. It shows judgment, constraints, and current motion.",
  },
  {
    date: "APR 2026",
    tag: "BRAND",
    title: "Quiet markets reward sharp signals",
    excerpt:
      "Most categories are not boring. They are under-art-directed. The opportunity is to give them language and gravity.",
  },
  {
    date: "APR 2026",
    tag: "SYSTEMS",
    title: "Build the machine around the builder",
    excerpt:
      "A system is not productivity theater. It is a way to keep taste, memory, and execution in the same room.",
  },
];

const CURRENT = [
  {
    label: "READING",
    value: "Cities, taste, markets",
  },
  {
    label: "BUILDING",
    value: "Personal software, brand systems, AI workflows",
  },
  {
    label: "EXPLORING",
    value: "How small teams look inevitable",
  },
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
      <Hero />
      <CurrentlySection />
      <SystemSection />
      <FieldNotesSection />
      <ContactStrip />
      <SiteFoot />
    </main>
  );
}

function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      <a href="/" className="wordmark" aria-label="Home">
        <span className="wordmark-mark">N/I</span>
        <span>Nong Izz Harith</span>
      </a>

      <ul className="topnav-links">
        <li>
          <a href="#current">Now</a>
        </li>
        <li>
          <a href="#system">System</a>
        </li>
        <li>
          <a href="#notes">Notes</a>
        </li>
      </ul>

      <div className="topnav-right">
        <span className="status">
          <span className="status-dot" /> Cyberjaya, MY
        </span>
        <a href="#contact" className="cta-pill">
          Contact
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">N.01 / INDEX / MAY 2026</p>

        <h1 className="hero-headline">
          Building sharper systems for strange ideas.
        </h1>

        <p className="hero-route">Strange ideas -&gt; sharp products.</p>

        <p className="hero-doctrine">
          I am Nong Izz Harith, a founder and fourth-year engineering student
          in Cyberjaya. I build digital experiments, brand systems, and AI workflows
          for quiet markets that deserve better taste.
        </p>

        <div className="hero-ctas">
          <a href="#contact" className="cta-primary">
            Send a signal
          </a>
          <a href="#notes" className="cta-secondary">
            Read the notes
          </a>
        </div>

        <dl className="hero-stats" aria-label="Profile summary">
          <div>
            <dt>Status</dt>
            <dd>Building</dd>
          </div>
          <div>
            <dt>Base</dt>
            <dd>Cyberjaya, Malaysia</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>Founder, student</dd>
          </div>
          <div>
            <dt>Signal</dt>
            <dd>Taste, systems, AI</dd>
          </div>
        </dl>
      </div>

      <aside className="hero-panel" aria-label="Portrait and identity card">
        <figure className="hero-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bnw-profile.jpg" alt="Nong Izz Harith" />
        </figure>

        <div className="id-card">
          <div>
            <p className="id-label">Identity</p>
            <p className="id-name">Nong Izz Harith</p>
          </div>
          <div className="id-grid">
            <span>03.0738 N</span>
            <span>101.5183 E</span>
            <span>MMU / Year 4</span>
            <span>Founder mode</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

function CurrentlySection() {
  return (
    <section className="current" id="current" aria-labelledby="current-title">
      <div className="section-kicker">Current operating state</div>
      <div className="current-grid">
        <div className="current-title-block">
          <h2 id="current-title">Now, not someday.</h2>
          <p>
            The site is a live instrument. Less resume, more readout. It should
            tell you what I am paying attention to before a meeting begins.
          </p>
        </div>

        <div className="current-list">
          {CURRENT.map((item) => (
            <div className="current-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="system" id="system" aria-labelledby="system-title">
      <div className="system-copy">
        <p className="eyebrow">N.02 / PERSONAL OS</p>
        <h2 id="system-title">A builder needs a dashboard, not a brochure.</h2>
        <p>
          This is the public edge of a larger private system: notes, decisions,
          experiments, operating cadence, and the small signals that compound
          into taste.
        </p>
      </div>

      <div className="principles" aria-label="Operating principles">
        {PRINCIPLES.map((principle, index) => (
          <div className="principle" key={principle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{principle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FieldNotesSection() {
  return (
    <section className="notes" id="notes" aria-labelledby="notes-title">
      <header className="section-head">
        <div>
          <p className="eyebrow">N.03 / FIELD NOTES</p>
          <h2 className="section-title" id="notes-title">
            Essays from the edge of the work.
          </h2>
        </div>
        <p className="section-blurb">
          Short notes on taste, software, category design, and how people make
          things look inevitable.
        </p>
      </header>

      <div className="notes-grid">
        {NOTES.map((note) => (
          <a key={note.title} className="note" href="#contact">
            <div className="note-meta">
              <span>{note.date}</span>
              <span>{note.tag}</span>
            </div>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-excerpt">{note.excerpt}</p>
            <span className="note-link">Request draft</span>
          </a>
        ))}
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
