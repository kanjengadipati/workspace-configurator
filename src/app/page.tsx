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
    <main className="mx-auto grid max-w-6xl gap-6 p-4 sm:p-8 lg:grid-cols-[1fr_380px] lg:gap-8">
      {/* Preview: placeholder dulu */}
      <div className="sticky top-0 z-10 self-start overflow-hidden rounded-2xl border border-neutral-200 bg-white lg:top-8">
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