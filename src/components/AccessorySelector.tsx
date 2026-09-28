import { MAX_QTY } from "@/data/catalog";
import { Product } from "@/types/workspace";

type Props = {
    products: Product[];
    quantities: Record<string, number>;
    onChange: (id: string, qty: number) => void;
};

export default function AccessorySelector({ products, quantities, onChange }: Props) {
    return (
        <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-bark/50">
                Accessories
            </h2>
            <div className="grid gap-3">
                {products.map((p) => {
                    const qty = quantities[p.id] ?? 0;
                    return (
                        <div
                            key={p.id}
                            className={`flex items-center justify-between rounded-2xl border p-4 transition ${qty > 0 ? "border-clay bg-white ring-1 ring-clay" : "border-line bg-white/60"
                                }`}
                        >
                            <div>
                                <div className="font-medium">{p.name}</div>
                                <div className="text-sm text-bark/60">${p.price}/mo</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => onChange(p.id, Math.max(0, qty - 1))}
                                    disabled={qty === 0}
                                    className="h-8 w-8 rounded-full border border-line transition hover:border-clay disabled:opacity-30"
                                    aria-label={`Remove ${p.name}`}
                                >
                                    −
                                </button>
                                <span className="w-4 text-center tabular-nums">{qty}</span>
                                <button
                                    onClick={() => onChange(p.id, qty + 1)}
                                    disabled={qty >= MAX_QTY}
                                    className="h-8 w-8 rounded-full border border-line transition hover:border-clay disabled:opacity-30"
                                    aria-label={`Add ${p.name}`}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}