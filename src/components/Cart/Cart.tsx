"use client";
import { CartType } from "@/types/Cart";
import { FC, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
interface Props {
  readClientCartId: (cartId: number) => Promise<CartType>;
}

const Cart: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("cartId")) {
        const cart = await props.readClientCartId(0);
        localStorage.setItem("cartId", cart.id.toString());
        setCart(cart);
      } else {
        const cart = await props.readClientCartId(
          parseInt(localStorage.getItem("cartId")!)
        );
        localStorage.setItem("cartId", cart.id.toString());
        setCart(cart);
      }
    })();
  }, [props]);

  return (
    <>
      <AiOutlineShoppingCart className="w-6 h-6 text-white" />
      {cart && cart!.items.length > 0 && (
        <p className="absolute top-4 right-2 text-xs bg-orange-500 text-white px-1 rounded-full">
          {cart?.items.length}
        </p>
      )}
    </>
  );
};
export default Cart;
