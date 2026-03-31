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
      <body className="flex min-h-full flex-col [font-family:var(--font-source-code-pro),ui-monospace,monospace]">
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="border-t-2 border-black py-4 text-center text-sm">
          Built by{" "}
          <a
            href="https://x.com/21prnv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            prnv
          </a>
        </footer>
      </body>
    </html>
  );
}
