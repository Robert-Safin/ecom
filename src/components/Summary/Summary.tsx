"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
interface Props {
  getCartId: (cartId: number) => Promise<any>;
}

const Summary: FC<Props> = (props) => {
  const cartId = localStorage.getItem("cartId");
  const [cart, setCart] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      if (cartId) {
        const cartIdNumber = parseInt(cartId);
        const cart = await props.getCartId(cartIdNumber);
        delete cart.id;

        setCart(cart);
      }
    })();
  }, [props, cartId]);

  const prices = {
    "XX99 Mark II Headphones": 2999,
    "XX99 Mark I Headphones": 1750,
    "XX59 Headphones": 899,
    "ZX9 Speaker": 4500,
    "ZX7 Speaker": 3500,
    "YX1 Wireless Earphones": 599,
  };

  const imageUrlMap = {
    "XX99 Mark II Headphones":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx99-mark-two_gl7wwe.jpg",
    "XX99 Mark I Headphones":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx99-mark-one_gxjswp.jpg",
    "XX59 Headphones":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-xx59_f6xaml.jpg",
    "ZX9 Speaker":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010871/ecommerce/image-zx9_nsgxzq.jpg",
    "ZX7 Speaker":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010871/ecommerce/image-zx7_oncatv.jpg",
    "YX1 Wireless Earphones":
      "https://res.cloudinary.com/dxgkclowd/image/upload/v1694010870/ecommerce/image-yx1-earphones_nccc38.jpg",
  };

  let total = 0;

  if (cart) {
    // @ts-ignore
    for (const item in cart) {
      // @ts-ignore
      const price = prices[item];
      const quantity = cart[item];
      const subtotal = price * quantity;
      total += subtotal;
    }
  }

  return (
    <div className="bg-gray-100 p-4 mt-8 m-4 rounded-lg inner-shadow border lg:mt-4 lg:w-[400px] lg:h-fit">
      <h1 className="text-2xl mb-4 tracking-wider">Summary</h1>
      {!cart && (
        <p className="text-gray-400 text-center">No items in the cart</p>
      )}
      {cart && (
        <>
          {Object.keys(cart).map((item) => (
            <div className="flex justify-between mb-1" key={item}>
              <div className="flex">
                <Image
                  // @ts-ignore
                  src={imageUrlMap[item]}
                  alt={item}
                  width={75}
                  height={75}
                  objectFit="cover"
                  className="rounded-lg border"
                />
                <div className="flex flex-col justify-center ml-4">
                  <p className="text-sm">{item}</p>
                  <p className="text-gray-400 font-extralight text-sm tracking-wider">
                    x {cart[item]}
                  </p>
                </div>
              </div>
              {/* @ts-ignore */}
              <p className="mt-[18px] tracking-wider">
                {/* @ts-ignore */}${" "}
                {(prices[item] * cart[item]).toLocaleString()}
              </p>
            </div>
          ))}
        </>
      )}
      <div className="flex justify-between mb-1 mt-4">
        <p className="text-gray-400 font-extralight text-sm">TOTAL</p>
        <p className="tracking-wider">$ {total.toLocaleString()}</p>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-gray-400 font-extralight text-sm">SHIPPING</p>
        <p className="tracking-wider">$ 50</p>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-gray-400 font-extralight text-sm">VAT (INCLUDED)</p>
        <p className="tracking-wider">
          $ {Math.round(total * 0.15).toLocaleString()}
        </p>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-gray-400 font-extralight text-sm">GRAND TOTAL</p>
        <p className="tracking-wider">
          $ {(total + 50 + Math.round(total * 0.15)).toLocaleString()}
        </p>
      </div>
      {cart && Object.keys(cart).length > 0 && (
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-orange-400 py-3 px-8 text-white text-sm rounded-sm my-4 w-full "
        >
          CONTINUE & PAY
        </button>
      )}
      {cart && Object.keys(cart).length === 0 && (
        <button
          disabled={true}
          className="bg-orange-100 py-3 px-8 text-white text-sm rounded-sm my-4 w-full"
        >
          CONTINUE & PAY
        </button>
      )}
      <PureModal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          return true;
        }}
        width="auto"
        className="mx-4 rounded-lg"
      >
        <div className="md:w-[500px] p-4">
          <TiTick className=" ml-0 text-6xl text-white mx-auto bg-orange-400  rounded-full" />
          <h1 className="text-xl tracking-wide mt-4 mb-4 font-semibold md:text-3xl">
            THANK YOU FOR YOUR ORDER
          </h1>
          <p className="text-gray-400 mb-4 text-sm">
            You will receive an email confirmation shortly.
          </p>
          <div>
            <div>
              {cart &&
                Object.keys(cart).map((item, i) => (
                  <div
                    className="flex justify-between bg-gray-100 rounded-t-lg"
                    key={item}
                  >
                    <div className="flex">
                      <Image
                        // @ts-ignore
                        src={imageUrlMap[item]}
                        alt={item}
                        width={75}
                        height={75}
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="flex flex-col justify-center ml-2">
                        <p className="text-sm w-[140px] line-clamp-1">{item}</p>
                        <p className="text-gray-400 font-extralight text-sm tracking-wider">
                          x {cart[item]}
                        </p>
                      </div>
                    </div>
                    {/* @ts-ignore */}
                    <p className="mt-[18px] tracking-wider mr-4">
                      {/* @ts-ignore */}${" "}
                      {(prices[item] * cart[item]).toLocaleString()}
                    </p>
                  </div>
                ))}
              <div className="bg-black p-4 rounded-b-lg">
                <h2 className="text-gray-400 mb-4">GRAND TOTAL</h2>
                <p className="text-white text-sm">
                  $ {(total + 50 + Math.round(total * 0.15)).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <Link href={"/"} className="border w-full">
            <button className="bg-orange-400 w-full py-3 px-8 text-white mt-4 rounded-sm">
              BACK TO HOME
            </button>
          </Link>
        </div>
      </PureModal>
    </div>
  );
};

export default Summary;
