import { create } from "zustand";

interface CartItem {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number; 
  id: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  getTotalQuantity: () => number; 
  getTotalPrice: () => number; 
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    const state = get();
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      set({
        items: state.items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      });
    } else {
      set({ items: [...state.items, item] });
    }
  },
  getTotalQuantity: () => {
    const state = get(); 
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    const state = get(); 
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
