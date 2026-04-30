import { cursos } from "@/lib/data"
import "@/app/components.css";

export default function Experience() {
  return (
    <section className="section" id="curses">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Cursos</h2>
        <div className="section-line" />
      </div>

      <div className="cursoTimeline">
        {cursos.map((e, i) => (
          <div key={e.name} className="cursoItem">
            <div className={`cursoDot $ {i === 0 ? "cursoDotActive" : ""}`} />
            <div className="cursoContent">
              <div className="cursoTop">
                <div className="cursoRole">{e.name} </div>
                <div className="plataforma"> - {e.plataforma} </div>
                <div className="status">{`(${e.status})`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
