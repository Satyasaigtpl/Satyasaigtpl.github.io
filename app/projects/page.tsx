import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return <>
    <header className="projects-header"><a className="wordmark" href="/">Gattupalli Eswar<span>.</span></a><a className="text-link" href="/#roles"><ArrowLeft /> Back to roles</a></header>
    <main id="main" className="projects-index section-shell">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Computer Vision Engineer</span></nav>
      <div className="section-title"><span>01</span><div><p>Engineering · Research · Collaboration</p><h1>Computer Vision Engineer</h1></div></div>
      <p className="vision-intro">I love Computer Vision. My work explores how colour, texture representations, and geometry can help distinguish materials. I bring experience comparing classical and deep learning approaches, automating synthetic data workflows, and communicating technical findings across teams.</p>
      <div className="vision-strengths"><section><h2>My strengths</h2><p>Designing comparative experiments, tuning segmentation methods, automating data creation, building pipelines,finding real-world applications, and connecting engineering knowledge with practical research.</p></section><section><h2>Specialist skills</h2><p>Classical CV algorithms · Color spaces · UV texture mapping · Curvature features · DeepLabV3+ · U-Net / MobileNetV2 · Blender Python · Agisoft Metashape · OpenCV · Manual dataset collection </p></section></div>
      <h2 className="vision-project-heading">Selected computer vision projects</h2>
      <div className="project-grid">{projects.map((project,index)=><article className={`project-card ${project.tone}`} key={project.href}><div className="project-top"><span>0{index+1}</span><ArrowUpRight /></div><div className="project-card-copy"><p>{project.category}</p><h2>{project.title}</h2><p className="project-summary">{project.summary}</p><span>{project.stack}</span></div><a href={project.href} aria-label={`Open ${project.title}`}>View project</a></article>)}</div>
    </main>
  </>;
}
