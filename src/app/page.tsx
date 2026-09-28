"use client";

import { useState } from "react";
import { desks, chairs, accessories } from "@/data/catalog";
import { Workspace } from "@/types/workspace";
import ProductSelector from "@/components/ProductSelector";
import AccessorySelector from "@/components/AccessorySelector";
import WorkspacePreview from "@/components/WorkspacePreview";
import WorkspaceSummary from "@/components/WorkspaceSummary";

export default function Home() {
  const [workspace, setWorkspace] = useState<Workspace>({
    deskId: desks[0].id,
    chairId: chairs[0].id,
    accessories: {},
  });

  const setAccessory = (id: string, qty: number) =>
    setWorkspace((w) => ({
      ...w,
      accessories: { ...w.accessories, [id]: qty },
    }));

  return (
    <main className="mx-auto grid max-w-6xl gap-6 p-4 sm:p-8 lg:grid-cols-[1fr_400px] lg:gap-x-10">
      <header className="lg:col-span-2">
        <p className="text-sm font-medium uppercase tracking-widest text-clay">
          Rent your setup
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Design your workspace
        </h1>
        <p className="mt-3 max-w-xl text-bark/70">
          Pick a desk, a chair and a few extras. Watch it come together, then
          rent it for as long as you need.
        </p>
      </header>

      <div className="sticky top-0 z-10 self-start overflow-hidden rounded-3xl border border-line bg-cream shadow-sm lg:top-8">
        <WorkspacePreview workspace={workspace} />
      </div>

      <div className="grid content-start gap-8">
        <ProductSelector
          title="Desk"
          products={desks}
          selectedId={workspace.deskId}
          onSelect={(id) => setWorkspace((w) => ({ ...w, deskId: id }))}
        />
        <ProductSelector
          title="Chair"
          products={chairs}
          selectedId={workspace.chairId}
          onSelect={(id) => setWorkspace((w) => ({ ...w, chairId: id }))}
        />
        <AccessorySelector
          products={accessories}
          quantities={workspace.accessories}
          onChange={setAccessory}
        />
        <WorkspaceSummary workspace={workspace} />
      </div>
    </main>
  );
}