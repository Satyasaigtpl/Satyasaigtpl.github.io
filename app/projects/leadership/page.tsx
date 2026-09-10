import { ArrowLeft } from "lucide-react";

export default function LeadershipPage() {
  return <>
    <header className="projects-header"><a className="wordmark" href="/">Satya<span>.</span></a><a className="text-link" href="/#roles"><ArrowLeft /> Back to roles</a></header>
    <main id="main" className="projects-index section-shell project-detail-page">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Leadership</span></nav>
      <div className="section-title"><span>03</span><div><p>Initiative · Mentoring · Impact</p><h1>Leadership</h1></div></div>
      <p className="vision-intro">Add an introduction about how you lead teams, build initiatives, support communities, and turn ideas into practical outcomes.</p>
      <div className="vision-strengths"><section><h2>My strengths</h2><p>Add the leadership qualities you want to highlight, such as communication, mentoring, facilitation, or decision-making.</p></section><section><h2>Selected initiatives</h2><p>Add the organizations, volunteer work, communities, and outcomes that show your leadership in action.</p></section></div>
      <h2 className="vision-project-heading">Selected leadership experience</h2>
      <p className="vision-intro">Replace this section with your initiatives, responsibilities, and results. You can add individual leadership stories here as your content is ready.</p>
    </main>
  </>;
}
