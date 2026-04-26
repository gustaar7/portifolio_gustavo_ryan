import { projects, BadgeType } from "@/lib/data";
import "@/app/components.css";

const badgeClass: Record<BadgeType, string> = {
  live: "badgeLive",
  open: "badgeOpen",
  wip: "badgeWip",
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="section-line" />
      </div>

      <div className="projectGrid">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.urlProjeto || "#"}
            className={`projectCard ${p.featured ? "projectFeatured" : ""}`}
          >
            <div className="projectVisual">
              <div className="projectVisualGrid" />
              <div className="projectIcon">{p.icon}</div>
              <span className={`projectBadge ${badgeClass[p.badge]}`}>
                {p.badgeLabel}
              </span>
            </div>

            <div className="projectBody">
              <div className="projectTags">
                {p.tags.map((t) => (
                  <span key={t} className="projectTag">{t}</span>
                ))}
              </div>
              <div className="projectTitle">{p.title}</div>
              <div className="projectDesc">{p.description}</div>
              <div className="projectFooter">
                {p.urlGit && (
                  <a href={p.urlGit} target="_blank" rel="noopener noreferrer" className="botaoProjeto">
                    <svg width={20} height={20} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    Ver GitHub
                  </a>
                )}
                {p.urlProjeto && (
                  <a href={p.urlProjeto} className="botaoProjeto">
                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
