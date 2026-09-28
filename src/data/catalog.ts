import { Product } from "@/types/workspace";

export const desks: Product[] = [
  { id: "minimal-oak", name: "Minimal Oak", description: "Meja kayu oak, clean dan hangat", price: 40 },
  { id: "standing-pro", name: "Standing Pro", description: "Meja elektrik, tinggi bisa diatur", price: 65 },
];

export const chairs: Product[] = [
  { id: "ergonomic", name: "Ergonomic", description: "Sandaran lumbar, nyaman seharian", price: 30 },
  { id: "executive", name: "Executive", description: "Kursi kulit, empuk dan premium", price: 45 },
];

export const accessories: Product[] = [
  { id: "monitor", name: "Monitor 27\"", description: "4K display", price: 25 },
  { id: "lamp", name: "Desk Lamp", description: "LED dengan dimmer", price: 8 },
  { id: "plant", name: "Plant", description: "Tanaman hidup untuk desk", price: 5 },
  { id: "coffee-machine", name: "Coffee Machine", description: "Espresso untuk pagi produktif", price: 15 },
];

export const MAX_QTY = 2;
