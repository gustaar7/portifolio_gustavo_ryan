import { person } from "@/lib/data";
import "@/app/components.css";

const contacts = [
  { icon: "✉", label: "E-mail", value: person.email, href: `mailto:${person.email}` },
  { icon: "in", label: "LinkedIn", value: person.linkedin, href: `https://${person.linkedin}` },
  { icon: "⌥", label: "GitHub", value: person.github, href: `https://${person.github}` },
  { icon: "↓", label: "Currículo", value: "Download PDF", href: person.resumeUrl || "#", download: person.resumeUrl ? true : undefined },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Vamos Conversar</h2>
        <div className="section-line" />
      </div>

      <p className="contactIntro">
        Aberto a projetos freelance, oportunidades CLT e colaborações.
      </p>

      <div className="contactGrid">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contactCard"
            target={c.download ? undefined : "_blank"}
            rel={c.download ? undefined : "noopener noreferrer"}
            download={c.download}
          >
            <div className="contactIcon">{c.icon}</div>
            <div>
              <div className="contactLabel">{c.label}</div>
              <div className="contactValue">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
