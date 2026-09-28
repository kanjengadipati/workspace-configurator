"use client";

import { useState } from "react";
import { desks, chairs, accessories } from "@/data/catalog";
import { Workspace } from "@/types/workspace";

export default function WorkspaceSummary({ workspace }: { workspace: Workspace }) {
    const [rented, setRented] = useState(false);

    const desk = desks.find((d) => d.id === workspace.deskId)!;
    const chair = chairs.find((c) => c.id === workspace.chairId)!;

    const items = [
        { id: desk.id, name: desk.name, qty: 1, price: desk.price },
        { id: chair.id, name: chair.name, qty: 1, price: chair.price },
        ...accessories
            .filter((a) => (workspace.accessories[a.id] ?? 0) > 0)
            .map((a) => ({
                id: a.id,
                name: a.name,
                qty: workspace.accessories[a.id],
                price: a.price,
            })),
    ];

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    if (rented) {
        return (
            <section className="rounded-3xl bg-leaf p-6 text-cream">
                <h2 className="font-display text-2xl">Your setup is on its way 🌿</h2>
                <p className="mt-2 text-sm text-cream/80">
                    {items.length} items, ${total}/mo. We'll have everything ready when
                    you land.
                </p>
                <button
                    onClick={() => setRented(false)}
                    className="mt-4 text-sm underline underline-offset-4"
                >
                    Edit setup
                </button>
            </section>
        );
    }

    return (
        <section className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-display text-xl">Your setup</h2>

            <ul className="grid gap-2 text-sm">
                {items.map((i) => (
                    <li key={i.id} className="flex justify-between">
                        <span>
                            {i.name}
                            {i.qty > 1 && <span className="text-bark/50"> × {i.qty}</span>}
                        </span>
                        <span className="tabular-nums">${i.price * i.qty}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
                <span className="font-medium">Total</span>
                <span className="font-display text-3xl tabular-nums">
                    ${total}
                    <span className="font-sans text-sm text-bark/50">/mo</span>
                </span>
            </div>

            <button
                onClick={() => setRented(true)}
                className="mt-5 w-full rounded-xl bg-clay py-3 font-medium text-white transition hover:bg-clay-dark active:scale-[0.98]"
            >
                Rent this workspace →
            </button>
        </section>
    );
}