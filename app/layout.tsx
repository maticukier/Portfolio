import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matias Cukier — Full Stack Developer",
  description:
    "Full Stack Developer (Front-End Oriented) from Buenos Aires. React, Next.js, TypeScript, Salesforce AI.",
  openGraph: {
    title: "Matias Cukier — Full Stack Developer",
    description:
      "Full Stack Developer from Buenos Aires. React, Next.js, TypeScript, Salesforce Agentforce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
