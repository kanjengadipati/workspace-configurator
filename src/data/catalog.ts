import { Product } from "@/types/workspace";

export const desks: Product[] = [
  { id: "minimal-oak", name: "Minimal Oak", description: "Solid oak top, clean and warm", price: 40 },
  { id: "standing-pro", name: "Standing Pro", description: "Electric sit-stand desk, height adjustable", price: 65 },
];

export const chairs: Product[] = [
  { id: "ergonomic", name: "Ergonomic", description: "Lumbar support, comfortable all day", price: 30 },
  { id: "executive", name: "Executive", description: "Leather seat, soft and premium", price: 45 },
];

export const accessories: Product[] = [
  { id: "monitor", name: "Monitor 27\"", description: "4K display", price: 25 },
  { id: "lamp", name: "Desk Lamp", description: "LED with dimmer", price: 8 },
  { id: "plant", name: "Plant", description: "Live plant for desk", price: 5 },
  { id: "coffee-machine", name: "Coffee Machine", description: "Espresso for productive morning", price: 15 },
];

export const MAX_QTY = 2;
