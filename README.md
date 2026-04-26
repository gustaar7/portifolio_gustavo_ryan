# Portfolio — Next.js 14

Portfólio profissional com tema dark + detalhes verdes. Construído com Next.js 14, TypeScript e CSS Modules.

## Início rápido

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## Personalizar conteúdo

**Todo o conteúdo está em um único arquivo:**

```
lib/data.ts
```

Edite lá para atualizar:
- Seu nome, cargo, localização, iniciais
- Stats (anos de experiência, projetos, clientes)
- Links de contato (email, LinkedIn, GitHub, currículo)
- Stack técnico e % de domínio
- Projetos (título, descrição, tecnologias, badge, métricas)
- Experiências profissionais

---

## Adicionar foto real

Em `components/Hero.tsx`, substitua o bloco `<div className={styles.initials}>` por:

```tsx
import Image from "next/image";

<Image
  src="/foto.jpg"        // coloque a foto em /public/foto.jpg
  alt="Sua foto"
  fill
  style={{ objectFit: "cover" }}
/>
```

---

## Estrutura de arquivos

```
portfolio/
├── app/
│   ├── globals.css       ← design tokens e estilos globais
│   ├── layout.tsx        ← root layout (metadata)
│   ├── page.tsx          ← página principal
│   └── page.module.css
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Experience.tsx / .module.css
│   └── Contact.tsx / .module.css
├── lib/
│   └── data.ts           ← ✏️ EDITE AQUI
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Deploy no Vercel

1. Suba o projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → Import Project
3. Selecione o repositório → Deploy

Pronto. Zero configuração necessária.
