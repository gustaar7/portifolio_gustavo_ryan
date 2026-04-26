import { skills } from "@/lib/data";
import "@/app/components.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Stack Técnico</h2>
        <div className="section-line" />
      </div>

      <div className="skillGrid">
        {skills.map((s) => (
          <div key={s.name} className="skillCard">
            <div className="skillName">{s.name}</div>
            <div className="skillTrack">
              <div className="skillFill" style={{ width: `${s.pct}%` }} />
            </div>
            <div className="skillMeta">
              {s.label} · {s.pct}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
