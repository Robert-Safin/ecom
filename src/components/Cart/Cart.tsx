"use client";
import { CartType } from "@/types/Cart";
import { FC, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root")!);

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
    <>
      <AiOutlineShoppingCart
        className="w-6 h-6 text-white"
        onClick={() => setIsOpen(true)}
      />
      {cart && (
        <p className="absolute top-6 right-2 text-xs bg-orange-500 text-white px-1 rounded-full">
          {Object.keys(cart!).filter((key) => key !== "id").length}
        </p>
      )}
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldFocusAfterRender={false}
        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-48 rounded-md"
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
      >
        <div className="w-full mx-auto py-4">
          {cart &&
            Object.keys(cart!).filter((key) => key !== "id").length === 0 && (
              <p className="text-center text-gray-400 text-xl">
                Your cart is empty
                <AiOutlineShoppingCart className="w-24 h-24 text-black text-center mx-auto mt-4 font-light" />
              </p>
            )}
          {cart &&
            Object.keys(cart!).filter((key) => key !== "id").length !== 0 && (
              <p className="text-center text-gray-400 text-xl">items</p>
            )}
        </div>
      </Modal>
    </>
  );
};
export default Cart;
