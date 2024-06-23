import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="mt-[3rem] relative text-white">
      <img className="w-full" src="assets/commerce.jpg" alt="" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-[2rem]">
          <p className="text-[4rem]">Everything in one Store</p>
          <p className="text-[2rem]">Want to try something new?</p>

          <Link href="">
            <p className="cursor-pointer w-[15rem] py-4 border-2 text-center text-[2rem] border-orange-500 text-orange-500 bg-transparent  transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              SHOP NOW
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
