import { person } from "@/lib/data";
import "@/app/components.css";
import Image from "next/image";
import perfil from "@/public/perfil.jpeg"

export default function Hero() {
  const nameParts = person.name.split(person.nameAccent);

  return (
    <section className="hero fade-in">
      <div className="grid">
        <div>
          <div className="tag">
            <span className="tagDot" />
            {person.role} · {person.location}
          </div>

          <h1 className="h1">
            {nameParts[0]}
            <br />
            <span className="accent">{person.nameAccent}</span>
            <br />
            <span className="dim">{person.nameFinal}</span>
          </h1>

          <p className="subtitle">
            {person.subtitle
              .split(/(produtos digitais|experiências que importam)/)
              .map((part, i) =>
                part === "produtos digitais" ||
                  part === "experiências que importam" ? (
                  <strong key={i}>{part}</strong>
                ) : (
                  part
                )
              )}
          </p>

          <div className="cta">
            <a href="#projects" className="btnPrimary">
              ver projetos →
            </a>
            <a href="#contact" className="btnSecondary">
              entrar em contato
            </a>
          </div>
        </div>

        <div className="avatarCol">
          <div className="avatarFrame">
            <div>
              <Image
                width={250}
                height={250}
                src={perfil}
                alt="foto de perfil"
                style={{ objectFit: 'contain' }} />
            </div>
          </div>

          <div className="statsRow">
            {person.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="statNum">{s.value}</div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
