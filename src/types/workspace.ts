export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // per bulan, USD
};

export type Workspace = {
  deskId: string;
  chairId: string;
  accessories: Record<string, number>; // { monitor: 2, plant: 1 }
};
