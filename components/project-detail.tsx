import { projects } from "@/lib/projects";
export function ProjectDetail({ index }: { index: number }) {
 const project=projects[index];
 return <><header className="projects-header"><a className="wordmark" href="/">Satya<span>.</span></a><a className="text-link" href="/projects">Back to computer vision</a></header><main className="projects-index section-shell project-detail-page"><p className="kicker">{project.category}</p><h1>{project.title}</h1><p className="vision-intro">{project.summary}</p><p className="detail-stack">{project.stack}</p><section><h2>My contribution</h2><p>{project.contribution}</p></section><section><h2>Approach</h2><p>{project.method}</p></section><section><h2>Results & learnings</h2><ul>{project.results.map(result=><li key={result}>{result}</li>)}</ul></section>{project.link && <a className="button primary" href={project.link} target="_blank" rel="noopener noreferrer">Explore the dataset on Kaggle ↗</a>}</main></>;
}
