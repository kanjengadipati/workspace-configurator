import { Product } from "@/types/workspace";

type Props = {
    title: string;
    products: Product[];
    selectedId: string;
    onSelect: (id: string) => void;
};

export default function ProductSelector({ title, products, selectedId, onSelect }: Props) {
    return (
        <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-bark/50">
                {title}
            </h2>
            <div className="grid gap-3">
                {products.map((p) => {
                    const active = p.id === selectedId;
                    return (
                        <button
                            key={p.id}
                            onClick={() => onSelect(p.id)}
                            aria-pressed={active}
                            className={`rounded-2xl border p-4 text-left transition ${active
                                    ? "border-clay bg-white shadow-sm ring-1 ring-clay"
                                    : "border-line bg-white/60 hover:border-clay/50 hover:bg-white"
                                }`}
                        >
                            <div className="flex justify-between font-medium">
                                <span>{p.name}</span>
                                <span className={active ? "text-clay" : ""}>${p.price}/mo</span>
                            </div>
                            <p className="mt-1 text-sm text-bark/60">{p.description}</p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}