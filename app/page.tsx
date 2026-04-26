import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { navLinks, person } from "@/lib/data";

export default function Portfolio() {
  return (
    <>
      <div className="grid-bg"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <nav>
        <div className="nav-in">
          <div className="logo">
            dev<span>.</span>portfolio
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="avail">
            <span className="dot"></span>
            {person.available ? "disponível" : "indisponível"}
          </div>
        </div>
      </nav>

      {/* parte de cima com a foto */}
      <div className="wrap">
        <Hero />

        {/* Stack Técnico */}
        <hr className="div" />
        <Skills />

        <hr className="div" />
        <Projects />

        <hr className="div" />
        <Experience />

        <hr className="div" />
        <Contact />

        <div style={{ height: 36 }} />
      </div>

      <footer>
        <em>2026</em> · feito com foco e café ☕
      </footer>
    </>
  );
}
