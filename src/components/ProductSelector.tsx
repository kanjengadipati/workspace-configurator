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
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
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
                            className={`rounded-xl border p-4 text-left transition ${active
                                ? "border-black bg-black text-white"
                                : "border-neutral-200 hover:border-neutral-400"
                                }`}
                        >
                            <div className="flex justify-between font-medium">
                                <span>{p.name}</span>
                                <span>${p.price}/mo</span>
                            </div>
                            <p className={`mt-1 text-sm ${active ? "text-neutral-300" : "text-neutral-500"}`}>
                                {p.description}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}