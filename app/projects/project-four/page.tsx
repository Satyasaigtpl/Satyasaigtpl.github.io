"use client";

import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  overview: string;
  description: string;
  stack: string[];
  images: { src: string; alt: string }[];
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
}

const projectsDb: Record<string, ProjectData> = {
  "project-one": {
    slug: "project-one",
    title: "Project One",
    category: "Computer Vision",
    overview: "[Add a short overview of the project]",
    description: "[Describe what this project does, the problem it solves, and your approach. Add as much detail as you want.]",
    stack: ["Python", "OpenCV", "PyTorch", "NumPy"],
    images: [
      { src: "/projects/project-one-1.jpg", alt: "Project screenshot 1" },
      { src: "/projects/project-one-2.jpg", alt: "Project screenshot 2" },
    ],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "#",
    achievements: [
      "[Achievement or result 1]",
      "[Achievement or result 2]",
      "[Achievement or result 3]",
    ],
  },
  "project-two": {
    slug: "project-two",
    title: "Project Two",
    category: "Thesis",
    overview: "[Add a short overview of the project]",
    description: "[Describe your thesis work, research methodology, and findings.]",
    stack: ["Python", "Machine Learning", "Research", "Data Analysis"],
    images: [
      { src: "/projects/project-two-1.jpg", alt: "Project screenshot 1" },
    ],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "#",
    achievements: [
      "[Key finding 1]",
      "[Key finding 2]",
      "[Publication or presentation]",
    ],
  },
  "project-three": {
    slug: "project-three",
    title: "Project Three",
    category: "Operations",
    overview: "[Add a short overview of the project]",
    description: "[Describe the operational challenge you managed and how you delivered results.]",
    stack: ["Planning", "Analysis", "Delivery", "Leadership"],
    images: [
      { src: "/projects/project-three-1.jpg", alt: "Project screenshot 1" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    achievements: [
      "[Metric or result 1]",
      "[Metric or result 2]",
      "[Impact achieved]",
    ],
  },
  "project-four": {
    slug: "project-four",
    title: "Project Four",
    category: "Leadership",
    overview: "[Add a short overview of the project]",
    description: "[Describe your leadership role, the team you led, and the impact you made.]",
    stack: ["Strategy", "Teams", "Impact", "Communication"],
    images: [
      { src: "/projects/project-four-1.jpg", alt: "Project screenshot 1" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    achievements: [
      "[Team size or scope]",
      "[Initiative outcome]",
      "[Personal growth]",
    ],
  },
};

function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="breadcrumb" aria-label="Breadcrumb">
      <a href="/#top">Home</a>
      <span>/</span>
      <a href="/#projects">Projects</a>
      <span>/</span>
      <span aria-current="page">{current}</span>
    </div>
  );
}

export default function ProjectPage() {
  const project = projectsDb["project-four"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  if (!project) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Project not found</div>;
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <a className="wordmark" href="/#top">[Gattupalli Eswar]<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#experience">Experience</a>
          <a href="/#projects">Projects</a>
          <a href="/#volunteer">Volunteer</a>
          <a href="/#hobbies">Hobbies</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="header-right">
          <span className="progress-number">{String(scrollProgress).padStart(3, "0")}%</span>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
            <Menu aria-hidden="true" />
          </button>
        </div>
        <div className="progress-track"><span style={{ width: `${scrollProgress}%` }} /></div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
        <p>Navigate</p>
        <nav aria-label="Mobile navigation">
          <a href="/#experience" onClick={() => setMenuOpen(false)}><span>01</span>Experience</a>
          <a href="/#projects" onClick={() => setMenuOpen(false)}><span>02</span>Projects</a>
          <a href="/#volunteer" onClick={() => setMenuOpen(false)}><span>03</span>Volunteer</a>
          <a href="/#hobbies" onClick={() => setMenuOpen(false)}><span>04</span>Hobbies</a>
          <a href="/#about" onClick={() => setMenuOpen(false)}><span>05</span>About</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}><span>06</span>Contact</a>
        </nav>
      </div>

      <main id="main">
        <section className="project-detail section-shell" style={{ paddingTop: "6rem" }}>
          <Breadcrumb current={project.title} />

          <div className="project-header" style={{ marginBottom: "3rem" }}>
            <div><span style={{ color: "var(--violet)", fontSize: ".72rem", fontWeight: "800" }}>{project.category}</span></div>
            <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)", lineHeight: ".94", letterSpacing: "-.06em", margin: "1rem 0 2rem" }}>
              {project.title}
            </h1>
            <p style={{ maxWidth: "36rem", fontSize: "clamp(1rem, 1.4vw, 1.3rem)", color: "var(--muted)", lineHeight: "1.75", marginBottom: "2rem" }}>
              {project.overview}
            </p>
          </div>

          {/* Images Gallery */}
          {project.images.length > 0 && (
            <div style={{ marginBottom: "4rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
                {project.images.map((image, idx) => (
                  <div key={idx} style={{ borderRadius: "var(--radius)", overflow: "hidden", backgroundColor: "var(--line)" }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{ width: "100%", height: "auto", display: "block", minHeight: "300px", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23eee' width='400' height='300'/%3E%3Ctext x='50%' y='50%' textAnchor='middle' dy='.3em' fill='%23999' fontSize='16'%3EImage placeholder%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div style={{ maxWidth: "52rem", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Overview</h2>
            <p style={{ color: "var(--muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Tech Stack</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: ".6rem 1.2rem",
                    backgroundColor: "var(--line)",
                    borderRadius: ".5rem",
                    fontSize: ".9rem",
                    fontWeight: "600",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Key Achievements</h2>
            <ul style={{ listStyle: "none", paddingLeft: 0, maxWidth: "36rem" }}>
              {project.achievements.map((achievement, idx) => (
                <li key={idx} style={{ padding: ".8rem 0", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: "var(--violet)", fontWeight: "800" }}>✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "2rem", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: ".8rem 1.5rem",
                  backgroundColor: "var(--ink)",
                  color: "white",
                  borderRadius: ".5rem",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                → View on GitHub
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  padding: ".8rem 1.5rem",
                  border: "2px solid var(--ink)",
                  color: "var(--ink)",
                  borderRadius: ".5rem",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                View Live <ArrowUpRight size={20} />
              </a>
            )}
          </div>

          {/* Back Link */}
          <div style={{ marginTop: "4rem", paddingTop: "2rem" }}>
            <a href="/#projects" style={{ color: "var(--violet)", textDecoration: "none", fontWeight: "600" }}>
              ← Back to Projects
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" style={{ marginTop: "4rem" }}>
        <Breadcrumb current="Contact" />
        <p className="footer-kicker">Have a role, project, or idea?</p>
        <h2 style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)", lineHeight: ".94", letterSpacing: "-.06em", margin: "1rem 0" }}>
          Let&apos;s make something<br />
          <em style={{ color: "var(--violet)", fontStyle: "normal" }}>meaningful.</em>
        </h2>
        <a className="footer-email" href="mailto:gattupallieswarnarayana@yahoo.com" style={{ fontSize: "1.3rem", textDecoration: "none", display: "flex", alignItems: "center", gap: ".5rem", marginTop: "2rem" }}>
          gattupallieswarnarayana@yahoo.com <ArrowUpRight />
        </a>
        <div className="footer-bottom" style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between" }}>
          <span>© 2026 Gattupalli Eswar</span>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#" style={{ textDecoration: "none" }}>LinkedIn</a>
            <a href="#" style={{ textDecoration: "none" }}>GitHub</a>
            <a href="mailto:gattupallieswarnarayana@yahoo.com" style={{ textDecoration: "none" }}>Email</a>
          </div>
          <a href="/#top" style={{ textDecoration: "none" }}>Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
