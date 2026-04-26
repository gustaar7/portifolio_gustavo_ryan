import { experience } from "@/lib/data";
import "@/app/components.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Experiência</h2>
        <div className="section-line" />
      </div>

      <div className="experienceTimeline">
        {experience.map((e, i) => (
          <div key={e.role} className="experienceItem">
            <div className={`experienceDot ${i === 0 ? "experienceDotActive" : ""}`} />
            <div className="experienceContent">
              <div className="experienceTop">
                <div className="experienceRole">{e.role}</div>
                <div className="experiencePeriod">{e.period}</div>
              </div>
              <div className="experienceCompany">
                {e.company} · {e.type}
              </div>
              <div className="experienceDesc">{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
