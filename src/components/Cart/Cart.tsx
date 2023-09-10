"use client";
import { CartType } from "@/types/Cart";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


interface Props {
  readClientCartId: (cartId: number) => Promise<any>;
}

const Cart: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartType | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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
    <div className="-mb-[10px]">
      <Link href="/checkout">
        <AiOutlineShoppingCart className="w-6 h-6 text-white" />
      </Link>

      {cart && (
        <p className="relative bottom-8 left-4 text-xs bg-orange-500 text-white w-4 px-1 rounded-full">
          {Object.keys(cart!).filter((key) => key !== "id").length}
        </p>
      )}
    </div>
  );
};
export default Cart;
