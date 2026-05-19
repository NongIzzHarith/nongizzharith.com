"use client";

import { useMemo, useState } from "react";

const categories = ["All", "Design", "Development", "Photography", "Branding"] as const;

const projects = [
  { id: 1, title: "Project Alpha", description: "A brief description of this project and what it involved.", category: "Design", image: "/images/BNW landscape.png" },
  { id: 2, title: "Project Beta", description: "A brief description of this project and what it involved.", category: "Development", image: "/images/BNW landscape.png" },
  { id: 3, title: "Project Gamma", description: "A brief description of this project and what it involved.", category: "Photography", image: "/images/BNW landscape.png" },
  { id: 4, title: "Project Delta", description: "A brief description of this project and what it involved.", category: "Branding", image: "/images/BNW landscape.png" },
  { id: 5, title: "Project Epsilon", description: "A brief description of this project and what it involved.", category: "Design", image: "/images/BNW landscape.png" },
  { id: 6, title: "Project Zeta", description: "A brief description of this project and what it involved.", category: "Development", image: "/images/BNW landscape.png" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn${activeFilter === c ? " active" : ""}`}
                onClick={() => setActiveFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
