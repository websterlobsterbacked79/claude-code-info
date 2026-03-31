import type { Metadata } from "next";
import { FileListClient, type ListRow } from "./FileListClient";
import { groupByTopDir, loadManifest } from "@/lib/claudeSrc";

export const metadata: Metadata = {
  title: "All files — claude/src",
};

export default async function ClaudeSrcIndexPage() {
  const manifest = await loadManifest();
  const rows: ListRow[] = manifest.files.map((f) => ({
    path: f.path,
    ext: f.ext,
    lineCount: f.lineCount,
    useCase: f.useCase,
  }));
  const grouped = groupByTopDir(manifest.files);
  const byFolder: Record<string, ListRow[]> = {};
  for (const [dir, files] of grouped) {
    byFolder[dir] = files.map((f) => ({
      path: f.path,
      ext: f.ext,
      lineCount: f.lineCount,
      useCase: f.useCase,
    }));
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3 border-b-4 border-dashed border-black pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">📦 Inventory</p>
        <h1 className="text-3xl font-bold leading-tight">
          Every file under <code className="font-bold">claude/src</code>
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed">
          Generated manifest at <strong>{manifest.generatedAt}</strong> —{" "}
          <strong>{manifest.fileCount.toLocaleString()}</strong> paths. Pick a file for an auto
          summary (lead comment / first lines), export hints, external import roots, and a source
          preview. Monochrome layout, emoji labels — because technical docs can still have personality.
        </p>
      </div>

      <FileListClient rows={rows} byFolder={byFolder} />
    </div>
  );
}
