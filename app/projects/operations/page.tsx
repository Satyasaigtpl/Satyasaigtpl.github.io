import { ArrowLeft } from "lucide-react";

export default function OperationsPage() {
  return <>
    <header className="projects-header"><a className="wordmark" href="/">Satya<span>.</span></a><a className="text-link" href="/#roles"><ArrowLeft /> Back to roles</a></header>
    <main id="main" className="projects-index section-shell project-detail-page">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Operations</span></nav>
      <div className="section-title"><span>02</span><div><p>Coordination · Delivery · Collaboration</p><h1>Operations Manager</h1></div></div>
      <p className="vision-intro">Add an introduction about your operations experience, the Bauhaus Summer School, and the way you organize people, projects, and delivery.</p>
      <div className="vision-strengths"><section><h2>My strengths</h2><p>Add the operational strengths you want visitors to remember, such as planning, process improvement, stakeholder coordination, or event delivery.</p></section><section><h2>Selected experience</h2><p>Add the teams, programs, events, tools, and measurable outcomes that support your operations story.</p></section></div>
      <h2 className="vision-project-heading">Selected operations experience</h2>
      <p className="vision-intro">Replace this section with your roles, projects, responsibilities, and results. You can add cards here later using the same structure as the computer vision projects.</p>
    </main>
  </>;
}
