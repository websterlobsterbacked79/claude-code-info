import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import { ThemeToggle } from "@/components/ThemeToggle";
import { themeInitScript } from "./theme-init";
import "./globals.css";

const CCI_MINT = "8fLCdAm6tBziFB8x2ZuAfcPVhDqpSr31beCHXT7zBAGS";
const CCI_JUPITER = `https://jup.ag/tokens/${CCI_MINT}`;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "Claude files info",
  description:
    "Browse leaked Claude Code source: every file under claude/src with docs, summaries, and syntax-highlighted previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sourceCodePro.variable} h-full antialiased`}>
      <body className="bg-background text-foreground flex min-h-full flex-col transition-colors duration-200 [font-family:var(--font-source-code-pro),ui-monospace,monospace]">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="flex flex-col items-center justify-center gap-3 border-t-2 border-black px-4 py-4 text-center text-sm dark:border-white sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-6 sm:text-left">
          <span className="shrink-0">
            Built by{" "}
            <a
              href="https://x.com/21prnv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:no-underline"
            >
              prnv
            </a>
          </span>
          <a
            href={CCI_JUPITER}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-full break-all text-center font-mono text-xs underline decoration-1 underline-offset-2 hover:no-underline sm:max-w-[min(28rem,55vw)] sm:text-left"
            title="View CCI on Jupiter"
          >
            🪙 CCI · {CCI_MINT}
          </a>
          <div className="shrink-0 sm:ml-auto">
            <ThemeToggle />
          </div>
        </footer>
      </body>
    </html>
  );
}
