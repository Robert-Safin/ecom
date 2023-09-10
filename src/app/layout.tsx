import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import { FC } from "react";
import { CartType } from "@/types/Cart";
import { kv } from "@vercel/kv";
import About from "@/components/HomePageMain/About";
import Footer from "@/components/HomePageMain/Footer";

const rubik = Rubik({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",

// };

interface Props {
  children: React.ReactNode;
}

const readClientCartId = async (cartId: number) => {
  "use server";

  if (cartId === 0) {
    const id = await kv.incr("cartId");
    await kv.hset(`cart:${id}`, {
      id: id,
    });
    const newCart = await kv.hgetall(`cart:${id}`);
    return newCart!;
  } else {

    const cart = await kv.hgetall(`cart:${cartId}`);
    return cart!;
  }
};



const RootLayout: FC<Props> = async (props) => {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar readClientCartId={readClientCartId} />
        {props.children}
        <About />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
