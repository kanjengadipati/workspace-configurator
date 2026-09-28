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
            <section className="rounded-2xl bg-black p-6 text-white">
                <h2 className="text-xl font-semibold">Setup requested 🎉</h2>
                <p className="mt-2 text-sm text-neutral-300">
                    Your workspace ({items.length} items, ${total}/mo) is on its way.
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
        <section className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Your setup
            </h2>

            <ul className="grid gap-2 text-sm">
                {items.map((i) => (
                    <li key={i.id} className="flex justify-between">
                        <span>
                            {i.name}
                            {i.qty > 1 && <span className="text-neutral-500"> × {i.qty}</span>}
                        </span>
                        <span>${i.price * i.qty}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex items-baseline justify-between border-t pt-4">
                <span className="font-medium">Total</span>
                <span className="text-2xl font-semibold">
                    ${total}
                    <span className="text-sm font-normal text-neutral-500">/mo</span>
                </span>
            </div>

            <button
                onClick={() => setRented(true)}
                className="mt-5 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-neutral-800 active:scale-[0.98]"
            >
                Rent this workspace →
            </button>
        </section>
    );
}