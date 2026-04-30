import type { Metadata } from "next";
import "./globals.css";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: `${person.name} R. ${person.nameFinal} — Portfolio`,
  description: person.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
