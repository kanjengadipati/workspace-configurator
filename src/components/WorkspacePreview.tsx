import { Workspace } from "@/types/workspace";

const FLOOR = 450;

const deskTop = (deskId: string) => (deskId === "standing-pro" ? 250 : 290);

function Desk({ id }: { id: string }) {
    const y = deskTop(id);

    if (id === "standing-pro") {
        return (
            <g>
                <rect x="235" y={y + 14} width="14" height={FLOOR - y - 14} fill="#8a8f98" />
                <rect x="551" y={y + 14} width="14" height={FLOOR - y - 14} fill="#8a8f98" />
                <rect x="215" y={FLOOR - 8} width="54" height="8" rx="3" fill="#4b5563" />
                <rect x="531" y={FLOOR - 8} width="54" height="8" rx="3" fill="#4b5563" />
                <rect x="200" y={y} width="400" height="14" rx="4" fill="#2b2b2b" />
                <rect x="520" y={y + 14} width="40" height="10" rx="2" fill="#4b5563" />
                <circle cx="530" cy={y + 19} r="2" fill="#34d399" />
            </g>
        );
    }

    return (
        <g>
            <rect x="215" y={y + 14} width="10" height={FLOOR - y - 14} fill="#a67c47" />
            <rect x="575" y={y + 14} width="10" height={FLOOR - y - 14} fill="#a67c47" />
            <rect x="200" y={y} width="400" height="14" rx="4" fill="#c8a06a" />
            <rect x="470" y={y + 14} width="105" height="64" rx="3" fill="#b98d55" />
            <rect x="510" y={y + 40} width="26" height="4" rx="2" fill="#8a6634" />
        </g>
    );
}

function Chair({ id }: { id: string }) {
    if (id === "executive") {
        return (
            <g>
                <rect x="360" y="290" width="80" height="112" rx="16" fill="#7c4a2d" />
                <rect x="372" y="278" width="56" height="24" rx="10" fill="#6b3f26" />
                <rect x="343" y="368" width="12" height="34" rx="4" fill="#3f2a1d" />
                <rect x="445" y="368" width="12" height="34" rx="4" fill="#3f2a1d" />
                <rect x="350" y="396" width="100" height="22" rx="9" fill="#5e3520" />
                <rect x="396" y="418" width="8" height="24" fill="#374151" />
                <rect x="350" y="442" width="100" height="6" rx="3" fill="#374151" />
                <circle cx="356" cy="450" r="5" fill="#1f2937" />
                <circle cx="400" cy="450" r="5" fill="#1f2937" />
                <circle cx="444" cy="450" r="5" fill="#1f2937" />
            </g>
        );
    }

    return (
        <g>
            <rect x="365" y="312" width="70" height="80" rx="22" fill="#4b5563" />
            <rect x="355" y="392" width="90" height="16" rx="8" fill="#374151" />
            <rect x="396" y="408" width="8" height="34" fill="#6b7280" />
            <rect x="350" y="442" width="100" height="6" rx="3" fill="#6b7280" />
            <circle cx="356" cy="450" r="5" fill="#1f2937" />
            <circle cx="400" cy="450" r="5" fill="#1f2937" />
            <circle cx="444" cy="450" r="5" fill="#1f2937" />
        </g>
    );
}

function Monitor({ cx, y }: { cx: number; y: number }) {
    return (
        <g className="pop">
            <rect x={cx - 60} y={y - 92} width="120" height="72" rx="6" fill="#111827" />
            <rect x={cx - 56} y={y - 88} width="112" height="64" rx="3" fill="#25303b" />
            <rect x={cx - 46} y={y - 78} width="50" height="4" rx="2" fill="#e8b27a" />
            <rect x={cx - 46} y={y - 68} width="80" height="4" rx="2" fill="#8fb98b" />
            <rect x={cx - 46} y={y - 58} width="64" height="4" rx="2" fill="#e8b27a" />
            <rect x={cx - 46} y={y - 48} width="40" height="4" rx="2" fill="#8fb98b" />
            <rect x={cx - 4} y={y - 20} width="8" height="20" fill="#6b7280" />
            <rect x={cx - 24} y={y - 4} width="48" height="4" rx="2" fill="#6b7280" />
        </g>
    );
}

function Lamp({ x, y }: { x: number; y: number }) {
    const d = x > 400 ? -1 : 1; // kepala lampu menghadap ke tengah meja
    return (
        <g className="pop">
            <ellipse cx={x + 40 * d} cy={y - 70} rx="70" ry="55" fill="url(#glow)" />
            <rect x={x - 14} y={y - 6} width="28" height="6" rx="3" fill="#374151" />
            <path
                d={`M ${x} ${y - 6} L ${x - 8 * d} ${y - 80} L ${x + 30 * d} ${y - 122}`}
                stroke="#374151"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d={`M ${x + 20 * d} ${y - 132} L ${x + 50 * d} ${y - 120} L ${x + 38 * d} ${y - 102} Z`}
                fill="#fbbf24"
            />
        </g>
    );
}

function Plant({ x }: { x: number }) {
    const cy = FLOOR - 50;
    return (
        <g className="pop">
            <path
                d={`M ${x - 20} ${FLOOR - 50} L ${x + 20} ${FLOOR - 50} L ${x + 15} ${FLOOR} L ${x - 15} ${FLOOR} Z`}
                fill="#c2410c"
            />
            <ellipse cx={x} cy={cy - 30} rx="10" ry="32" fill="#16a34a" />
            <ellipse cx={x} cy={cy - 30} rx="10" ry="32" fill="#22c55e" transform={`rotate(-38 ${x} ${cy})`} />
            <ellipse cx={x} cy={cy - 30} rx="10" ry="32" fill="#15803d" transform={`rotate(38 ${x} ${cy})`} />
        </g>
    );
}

function CoffeeMachine({ cx, y }: { cx: number; y: number }) {
    return (
        <g className="pop">
            <rect x={cx - 22} y={y - 52} width="44" height="52" rx="6" fill="#374151" />
            <rect x={cx - 22} y={y - 52} width="44" height="12" rx="6" fill="#1f2937" />
            <rect x={cx - 8} y={y - 16} width="16" height="12" rx="2" fill="#f5f5f4" />
            <circle cx={cx + 12} cy={y - 30} r="3" fill="#ef4444" />
        </g>
    );
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export default function WorkspacePreview({ workspace }: { workspace: Workspace }) {
    const { deskId, chairId, accessories } = workspace;
    const y = deskTop(deskId);

    const monitors = accessories["monitor"] ?? 0;
    const lamps = accessories["lamp"] ?? 0;
    const plants = accessories["plant"] ?? 0;
    const coffees = accessories["coffee-machine"] ?? 0;

    const monitorX = (i: number) => (monitors === 1 ? 400 : 330 + i * 140);
    const lampX = [250, 550];
    const plantX = [125, 55];
    const coffeeX = [655, 715];

    return (
        <svg viewBox="0 0 800 500" className="h-auto w-full" role="img" aria-label="Live workspace preview">
            <defs>
                <radialGradient id="glow">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* ruangan */}
            <rect width="800" height="500" fill="#faf5ec" />
            <rect y={FLOOR} width="800" height="50" fill="#efe6d5" />

            {/* jendela */}
            <rect x="70" y="60" width="150" height="170" rx="8" fill="#fde9c8" stroke="#d9c3a0" strokeWidth="6" />
            <line x1="145" y1="60" x2="145" y2="230" stroke="#d9c3a0" strokeWidth="4" />
            <line x1="70" y1="145" x2="220" y2="145" stroke="#d9c3a0" strokeWidth="4" />

            {/* bayangan lantai */}
            <ellipse cx="400" cy={FLOOR + 3} rx="230" ry="9" fill="#3b2a20" opacity="0.1" />

            {/* meja kecil untuk coffee machine */}
            {coffees > 0 && (
                <g>
                    <rect x="625" y="410" width="150" height="8" rx="3" fill="#b98d55" />
                    <rect x="635" y="418" width="8" height="32" fill="#b98d55" />
                    <rect x="757" y="418" width="8" height="32" fill="#b98d55" />
                </g>
            )}

            <Desk id={deskId} />

            {range(monitors).map((i) => (
                <Monitor key={`m-${i}`} cx={monitorX(i)} y={y} />
            ))}
            {range(lamps).map((i) => (
                <Lamp key={`l-${i}`} x={lampX[i]} y={y} />
            ))}
            {range(plants).map((i) => (
                <Plant key={`p-${i}`} x={plantX[i]} />
            ))}
            {range(coffees).map((i) => (
                <CoffeeMachine key={`c-${i}`} cx={coffeeX[i]} y={410} />
            ))}

            {/* kursi: didorong ke samping saat standing desk */}
            <g
                style={{ transition: "transform 0.4s ease" }}
                transform={deskId === "standing-pro" ? "translate(-100 0)" : "translate(0 0)"}
            >
                <Chair id={chairId} />
            </g>
        </svg>
    );
}