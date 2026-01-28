
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  gender?: 'hombre' | 'mujer' | 'unisex';
  subcategory?: string;
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  material: string;
  collection: string;
  stock: number;
  rating: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type EventTicket = {
  id: string;
  name: string;
  date: string;
  location: string;
  price: number;
  description: string;
  image: string;
};

export type StandType = {
  id: string;
  name: string;
  dimensions: string;
  price: number;
  benefits: string[];
  image: string;
};

export type AppState = {
  cart: CartItem[];
  user: User | null;
  comparisonList: Product[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  addresses: string[];
  orderHistory: any[];
};
