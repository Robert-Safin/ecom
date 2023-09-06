import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";

const Categories = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col bg-white mt-24 mb-24 space-y-24 w-full items-center md:flex-row md:space-y-0">
            <Link href='/speakers' className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow hover:border-orange-500 border w-full cursor-pointer">
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
            <Link href='/speakers' className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow hover:border-orange-500 border w-full">
              <Image
                className="w-32 h-32 absolute bottom-14 object-cover"
                src="/image-speakers.png"
                alt="speakers"
                width={1000}
                height={1000}
              />
              <h2>SPEAKERS</h2>
              <div className="flex items-center pt-4">
                <p className="text-gray-500 text-sm ">SHOP</p>
                <MdOutlineNavigateNext className="text-orange-500 w-5 h-5" />
              </div>
            </Link>
            <Link href='/earphones' className="bg-gray-100 m-4 pt-16 p-4 rounded-md flex flex-col items-center justify-center align-middle relative shadow hover:border-orange-500 border w-full">
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
        </div>
      </div>
    </>
  );
};

export default Categories;
