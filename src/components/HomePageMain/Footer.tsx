import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-[1100px] mx-auto p-4 text-white flex flex-col items-center sm:items-start">
        <div className="md:flex md:w-full md:justify-between">
          <h1 className="flex flex-row text-3xl font-bold tracking-wider my-8">
            AUDIO
          </h1>
          <div className="flex flex-col space-y-4 text-sm items-center sm:flex-row sm:space-y-0 sm:space-x-8">
            <Link
              href="/"
              className="tracking-[1px] hover:text-orange-400 cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/headphones"
              className="tracking-[1px] hover:text-orange-400 cursor-pointer"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              className="tracking-[1px] hover:text-orange-400 cursor-pointer"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              className="tracking-[1px] hover:text-orange-400 cursor-pointer"
            >
              EARPHONES
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:hidden">
          <p className="text-xs text-gray-400 my-8 text-center sm:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We`re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we`re open 7 days a week.
          </p>
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex mt-8 space-x-4 justify-center">
            <AiFillFacebook className="text-3xl  hover:text-orange-400 cursor-pointer" />
            <AiOutlineInstagram className="text-3xl  hover:text-orange-400 cursor-pointer" />
            <AiOutlineTwitter className="text-3xl  hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        <p className="hidden sm:block text-xs text-gray-400 my-8 text-center sm:text-left md:w-1/2">
          Audiophile is an all in one stop to fulfill your audio needs. We`re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we`re open 7 days a week.
        </p>

        <div className="hidden sm:flex items-center justify-between w-full">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Copyright 2023. All Rights Reserved
          </p>
          <div className="flex space-x-4 justify-center">
            <Link href="https://www.facebook.com/" target="_blank">
              <AiFillFacebook className="text-3xl  hover:text-orange-400 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <AiOutlineInstagram className="text-3xl  hover:text-orange-400 cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <AiOutlineTwitter className="text-3xl  hover:text-orange-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
