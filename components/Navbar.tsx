"use client";
import "@/app/components.css";

const links = [
  { label: "skills", href: "#skills" },
  { label: "projetos", href: "#projects" },
  { label: "experiência", href: "#experience" },
  { label: "contato", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navInner">
        <div className="navLogo">
          dev<span className="navLogoAccent">.</span>portfolio
        </div>

        <ul className="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navLink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navBadge">
          <span className="navPulse" />
          disponível
        </div>
      </div>
    </nav>
  );
}
