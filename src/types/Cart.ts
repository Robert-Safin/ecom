export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartType {
  id: number;
  items: CartItemType[];
}
