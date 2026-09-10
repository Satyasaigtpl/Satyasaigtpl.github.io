"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ArrowDownRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { projects } from "@/lib/projects";

const navItems = ["Experience", "Projects", "Volunteer", "Hobbies", "About", "Contact"];
const roles = [
  { number: "01", title: "Computer Vision Engineer", copy: "Explore my work in material segmentation, 3D texture analysis, and synthetic dataset generation.", href: "/projects" },
  { number: "02", title: "Operations Manager", copy: "Explore my experience in operations, coordination, and the Bauhaus Summer School.", href: "/projects/operations" },
  { number: "03", title: "Leadership", copy: "Explore my leadership experience, initiatives, and volunteer activities.", href: "/projects/leadership" },
];

const skillGroups = [
  { label: "Computer Vision", className: "skill-a" }, { label: "Python", className: "skill-b" },
  { label: "Machine Learning", className: "skill-c" }, { label: "Operations", className: "skill-d" },
  { label: "Leadership", className: "skill-e" }, { label: "[Your Skill]", className: "skill-f" },
  { label: "[Your Tool]", className: "skill-g" },
];

function Orb() {
  const group = useRef<Group>(null);
  const reduced = useRef(false);
  useEffect(() => { reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);
  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced.current) {
      group.current.rotation.y += delta * 0.16;
      group.current.rotation.x = state.pointer.y * 0.14;
      group.current.rotation.z = -state.pointer.x * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.55) * 0.018;
      group.current.scale.setScalar(pulse);
    }
  });
  return (
    <group ref={group}>
      <mesh><icosahedronGeometry args={[1.55, 5]} /><meshPhysicalMaterial color="#6d4aff" roughness={0.18} metalness={0.35} clearcoat={1} clearcoatRoughness={0.12} /></mesh>
      <mesh rotation={[0.8, 0.15, 0.4]}><torusGeometry args={[2.05, 0.025, 16, 160]} /><meshStandardMaterial color="#111018" metalness={0.8} roughness={0.2} /></mesh>
      <mesh rotation={[-0.4, 0.8, 1.1]}><torusGeometry args={[1.86, 0.018, 16, 160]} /><meshStandardMaterial color="#2d7cff" metalness={0.6} roughness={0.25} /></mesh>
    </group>
  );
}

function HeroThreeD() {
  return <div className="hero-3d" aria-label="Interactive three-dimensional abstract form">
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.75]}>
      <ambientLight intensity={1.55} /><directionalLight position={[4, 4, 5]} intensity={3.4} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={25} color="#58c9ff" /><Orb />
    </Canvas><span className="three-label">Move your cursor</span>
  </div>;
}

function Breadcrumb({ current }: { current: string }) {
  return <div className="breadcrumb" aria-label="Breadcrumb"><a href="#top">Home</a><span>/</span><span aria-current="page">{current}</span></div>;
}

function SectionTitle({ eyebrow, title, index }: { eyebrow: string; title: string; index: string }) {
  return <div className="section-title"><span>{index}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [skillMotion, setSkillMotion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    updateProgress(); window.addEventListener("scroll", updateProgress, { passive: true }); window.addEventListener("resize", updateProgress);
    return () => { window.removeEventListener("scroll", updateProgress); window.removeEventListener("resize", updateProgress); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [menuOpen]);
  const handleSkillMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSkillMotion({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 18, y: ((event.clientY - rect.top) / rect.height - 0.5) * 18 });
  };

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header">
      <a className="wordmark" href="#top">Gattupalli Eswar<span></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <div className="header-right"><span className="progress-number">{String(scrollProgress).padStart(3, "0")}%</span><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}><Menu aria-hidden="true" /></button></div>
      <div className="progress-track"><span style={{ width: `${scrollProgress}%` }} /></div>
    </header>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
      <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><p>Navigate</p>
      <nav aria-label="Mobile navigation">{navItems.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}</a>)}</nav>
    </div>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy"><p className="kicker"><span /> Available for Full time opportunities in Germany</p><h1>Hi, my name is<br /><em>Narayana Manikanta Sunnit Satya Sai, Gattupalli Eswar</em></h1><p className="hero-intro">I know it is one of the longest names you have seen, You can simply call me Satya. I’m an engineer who enjoys building meaningful products and bringing people together. My background spans mechanical engineering, computer vision, programme operations, and student leadership.</p><div className="hero-actions"><a className="button primary" href="#roles">Explore my roles <ArrowDownRight /></a><a className="text-link" href="#contact">Let&apos;s talk <ArrowUpRight /></a></div></div>
        <div className="hero-visual"><HeroThreeD /><div className="photo-placeholder"><img src="/profilepic.jpg" alt="Satya" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span>Satya</span></div></div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="roles section-shell" id="roles"><Breadcrumb current="Roles" /><SectionTitle index="01" eyebrow="Choose a perspective" title="Explore my roles" /><div className="role-list">{roles.map((role) => <a href={role.href} className="role-row" key={role.title}><span>{role.number}</span><h3>{role.title}</h3><p>{role.copy}</p><ArrowUpRight /></a>)}</div></section>

      <section className="experience section-shell" id="experience"><Breadcrumb current="Experience" /><SectionTitle index="02" eyebrow="Where I have contributed" title="Work experience" /><div className="timeline">{["[Current Role]", "[Previous Role]", "[Operations Experience]"].map((title, index) => <details key={title} open={index === 0}><summary><span className="timeline-date">[20XX—20XX]</span><span className="timeline-dot" /><span><strong>{title}</strong><small>[Company or organisation]</small></span><span className="plus">+</span></summary><div className="timeline-detail"><p>[Add a short description of your responsibilities, contribution, and measurable results.]</p><div>[Skill] · [Skill] · [Tool]</div></div></details>)}</div></section>

      <section className="education section-shell" id="education"><Breadcrumb current="Education" /><div className="education-grid"><div className="education-heading"><span>03</span><p>Academic path</p><h2>Education</h2></div><div className="education-line" aria-hidden="true"><i /><i /></div><div className="education-items">{["[Master’s Degree]", "[Bachelor’s Degree]"].map((degree, index) => <details key={degree} open={index === 0}><summary><small>[20XX—20XX]</small><h3>{degree}</h3><p>[University · Location]</p><span>View details +</span></summary><div><p><strong>Subjects</strong><br />[Subject], [Subject], [Subject]</p><p><strong>Projects / Thesis</strong><br />[Add your project or thesis title and a short summary.]</p></div></details>)}</div></div></section>

      <section className="skills section-shell" id="skills"><Breadcrumb current="Skills" /><SectionTitle index="04" eyebrow="A connected toolkit" title="Skills in motion" /><p className="section-lead">Move your cursor through the map. Replace every node with your own skills and tools.</p><div className="skill-map" onMouseMove={handleSkillMove} onMouseLeave={() => setSkillMotion({ x: 0, y: 0 })}><div className="skill-lines" aria-hidden="true" /><div className="skill-cloud" style={{ transform: `translate3d(${skillMotion.x}px, ${skillMotion.y}px, 0)` }}>{skillGroups.map((skill) => <button key={skill.label} className={skill.className}>{skill.label}</button>)}<div className="skill-core">MY<br />SKILLS</div></div></div></section>

      <section className="projects section-shell" id="projects"><Breadcrumb current="Projects" /><SectionTitle index="05" eyebrow="Selected work" title="Projects with purpose" /><div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-top"><span>0{index + 1}</span><ArrowUpRight /></div><div className="project-art" aria-hidden="true"><i /><i /><i /></div><div><p>{project.category}</p><h3>{project.title}</h3><span>{project.stack}</span></div><a href={project.href} aria-label={`Open ${project.title}`}>View project</a></article>)}</div></section>

      <section className="volunteer section-shell" id="volunteer"><Breadcrumb current="Volunteer" /><SectionTitle index="06" eyebrow="Leading beyond titles" title="Volunteer & leadership" /><div className="leadership-card"><div><span>[YEAR]</span><p>[Organisation]</p></div><h3>[Leadership role or volunteer activity]</h3><p>[Explain the team, your responsibility, what you changed, and the outcome.]</p><div className="metric"><strong>[00+]</strong><span>[People, events, or measurable impact]</span></div></div></section>

      <section className="hobbies section-shell" id="hobbies"><Breadcrumb current="Hobbies" /><SectionTitle index="07" eyebrow="Away from the screen" title="Things I enjoy" /><div className="hobby-grid">{["[Hobby one]", "[Hobby two]", "[Hobby three]"].map((hobby, index) => <article key={hobby}><span>0{index + 1}</span><h3>{hobby}</h3><p>[Write one personal sentence about this hobby.]</p></article>)}</div></section>

      <section className="about section-shell" id="about"><Breadcrumb current="About" /><div className="about-grid"><SectionTitle index="08" eyebrow="The person behind the work" title="A little about me" /><div className="about-copy"><p>[Write a short, honest biography. Explain what motivates you, how you work, and what you are looking for next.]</p><p>[Add a second paragraph about your values, interests, or the perspective you bring to a team.]</p><a className="text-link" href="#contact">Download my CV <ArrowUpRight /></a></div></div></section>
    </main>

    <footer id="contact"><Breadcrumb current="Contact" /><p className="footer-kicker">Have a role, project, or idea?</p><h2>Let&apos;s make something<br /><em>meaningful.</em></h2><a className="footer-email" href="mailto:gattupallieswarnarayana@yahoo.com">gattupallieswarnarayana@yahoo.com <ArrowUpRight /></a><div className="footer-bottom"><span>© 2026 Gattupalli Eswar</span><div><a href="#" aria-label="LinkedIn"><span className="social-mark">in</span> LinkedIn</a><a href="#" aria-label="GitHub"><span className="social-mark">GH</span> GitHub</a><a href="#" aria-label="Kaggle"><span className="kaggle-icon">K</span> Kaggle</a><a href="mailto:your.email@example.com" aria-label="Email"><Mail /> Email</a></div><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
