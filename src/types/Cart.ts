export interface CartItemType {
  name: string;
  price: number;
  quantity: number;
}

export interface CartType {
  id: number;
  items: CartItemType[];
}
