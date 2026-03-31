import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude src — file docs",
  description: "Per-file documentation and source for claude/src",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-white text-black [font-family:var(--font-source-code-pro),ui-monospace,monospace]">
      <header className="border-b-4 border-black sticky top-0 z-10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link href="/docs/claude-src" className="text-lg font-semibold tracking-tight hover:underline">
            📂 Claude <code className="font-semibold">src</code> explorer
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/" className="hover:underline">
              🏠 Home
            </Link>
            <Link href="/docs/claude-src" className="hover:underline">
              📑 All files
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  );
}
