"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "../Cart/Cart";
import { CartType } from "@/types/Cart";
import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
interface Props {
  readClientCartId: (cartId: number) => Promise<any>;
}

const Navbar: FC<Props> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <div className="bg-primary w-full mx-auto">
        <div className="flex items-center justify-between bg-primary py-6 border-b border-gray-800 max-w-[1100px] mx-auto px-4 z-10">
          <div className="lg:hidden flex items-center">
            {!menuIsOpen && (
              <GiHamburgerMenu
                className="w-5 h-5 text-white"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            )}
            {menuIsOpen && (
              <AiOutlineClose
                className="w-5 h-5 text-white"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            )}
            <Link
              href="/"
              className="hidden md:block text-3xl font-bold tracking-wider text-white pl-4"
            >
              Name
            </Link>
          </div>

          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-white md:hidden lg:block"
          >
            Name
          </Link>

          <div className="hidden lg:flex  space-x-8 pr-3">
            <Link
              href="/"
              className="text-white text-sm tracking-[1.5px] hover:text-orange-500 cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/headphones"
              className="text-white text-sm tracking-[1.5px] hover:text-orange-500 cursor-pointer"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              className="text-white text-sm tracking-[1.5px] hover:text-orange-500 cursor-pointer"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              className="text-white text-sm tracking-[1.5px] hover:text-orange-500 cursor-pointer"
            >
              EARPHONES
            </Link>
          </div>

          <div>
            <Cart readClientCartId={props.readClientCartId} />
          </div>
        </div>

        {menuIsOpen && (
          <div className="flex flex-col bg-white pt-10 absolute w-full z-20 border h-full md:h-auto md:flex-row md:justify-evenly rounded-b-lg lg:hidden lg:shadow-2xl">
            <Link
              onClick={() => setMenuIsOpen(false)}
              href="/headphones"
              className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow-xl hover:border-orange-500 border md:w-full my-14 md:my-8 "
            >
              <Image
                className="w-32 h-32 absolute bottom-14 object-cover"
                src="/image-headphones.png"
                alt="headphones"
                width={1000}
                height={1000}
              />
              <h2>HEADPHONES</h2>
              <div className="flex items-center pt-4">
                <p className="text-gray-500 text-sm">SHOP</p>
                <MdOutlineNavigateNext className="text-orange-500 w-5 h-5" />
              </div>
            </Link>
            <Link
              onClick={() => setMenuIsOpen(false)}
              href="/speakers"
              className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow-xl hover:border-orange-500 border md:w-full my-14 md:my-8"
            >
              <Image
                className="w-32 h-32 absolute bottom-14 object-cover"
                src="/image-speakers.png"
                alt="speakers"
                width={1000}
                height={1000}
              />
              <h2>SPEAKERS</h2>
              <div className="flex items-center pt-4">
                <p className="text-gray-500 text-sm">SHOP</p>
                <MdOutlineNavigateNext className="text-orange-500 w-5 h-5" />
              </div>
            </Link>
            <Link
              onClick={() => setMenuIsOpen(false)}
              href="/earphones"
              className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow-xl hover:border-orange-500 border md:w-full my-14 md:my-8"
            >
              <Image
                className="w-32 h-32 absolute bottom-14 object-cover"
                src="/image-earphones.png"
                alt="earphones"
                width={1000}
                height={1000}
              />
              <h2>EARPHONES</h2>
              <div className="flex items-center pt-4">
                <p className="text-gray-500 text-sm">SHOP</p>
                <MdOutlineNavigateNext className="text-orange-500 w-5 h-5" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </Provider>
  );
};

export default Navbar;
