"use client";
import { Product } from "@/redis/resdis";

import { FC, useState } from "react";


interface Props {
  getQuantity: (
    quantity: number,
    product: Product,
    cartId: number
  ) => Promise<void>;
  product: Product;
}

const AddItems: FC<Props> = (props) => {
  const [quantity, setQuantity] = useState(1);

  const cartId = localStorage.getItem("cartId");


  return (

      <div className="flex">
        <div className="flex items-center">
          <button
            className="bg-gray-100 py-3 px-5 text-gray-400"
            onClick={() => {
              if (quantity === 1) {
                return;
              } else {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <p className="bg-gray-100 py-3 px-5">{quantity}</p>
          <button
            className="bg-gray-100 py-3 px-5 text-gray-400"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={async () =>
            await props.getQuantity(quantity, props.product, Number(cartId))
          }
          className="mx-auto cursor-pointer bg-orange-400 hover:bg-orange-300 py-3 px-8 text-white text-sm rounded-sm"
        >
          ADD TO CART
        </button>
      </div>

  );
};

export default AddItems;
