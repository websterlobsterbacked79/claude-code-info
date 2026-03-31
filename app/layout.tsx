import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "Claude files info",
  description: "Documentation explorer for claude/src",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col [font-family:var(--font-source-code-pro),ui-monospace,monospace]">
        {children}
      </body>
    </html>
  );
}
