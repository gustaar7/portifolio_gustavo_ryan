export const person = {
  name: "Gustavo",
  nameAccent: "Ryan",  
  nameFinal: "Xavier",     
  role: "Full Stack Developer",
  location: "Ouro Preto, Minas Gerais, Brasil",
  available: true,
  subtitle:
    "Construindo produtos digitais com código limpo, arquitetura sólida e foco em experiências que importam.",
  stats: [
    { value: "1+", label: "ano" },
    { value: "18", label: "projetos" },
  ],
  email: "gustavoryanxavier930@gmail.com",
  linkedin: "https://www.linkedin.com/in/gustavo-ryan-19a893377/",
  github: "https://github.com/gustaar7",
  resumeUrl: "",
};

export const navLinks = [
  { id: "skills", label: "skills" },
  { id: "projects", label: "projetos" },
  { id: "experience", label: "experiência" },
  { id: "contact", label: "contato" },
];

export const skills = [
  { name: "HTML / CSS",  pct: 99, label: "Avançado" },
  { name: "React / Next.js",  pct: 92, label: "Avançado" },
  { name: "TypeScript",       pct: 88, label: "Avançado" },
  { name: "Node.js",          pct: 82, label: "Avançado" },
  { name: "PostgreSQL",       pct: 75, label: "Intermediário" },
  { name: "Docker",   pct: 50, label: "Intermediário" },
  { name: "TailwindCSS",      pct: 95, label: "Expert" },
  { name: "AWS / GCP",        pct: 60, label: "Básico-Avançado" },
];

export type BadgeType = "live" | "open" | "wip";

export interface Project {
  featured: boolean;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  badge: BadgeType;
  badgeLabel: string;
  urlProjeto?: string;
  urlGit?: string;
}

export const projects = [
  {
    featured: true,
    icon: "💈",
    title: "Projeto agendamento e controle de uma barbearia",
    description:
      "Sistema completo para barbearia, clientes conseguem marcar um horário e o barbeiro pode gerenciar tudo.",
    tags: ["Next.js", "TypeScript", "MySQL", "Vercel", "Railway"],
    badge: "live" as BadgeType,
    badgeLabel: "● Live",
    urlProjeto: "https://barbearia-gilt-phi.vercel.app/",
    urlGit: "https://github.com/gustaar7/barbearia.git",
  },
 
];

export const experience = [
  {
    role: "Dev Full Stack",
    company: "Projetos pessoais",
    type: "Full-time",
    period: "2025 — presente",
    description:
      "Aplicando meus conhecimentos de programação em projetos que resolvem problemas ao meu redor.",
  },

];
