import React from "react";
import Link from "next/link";

export default function ProductsImage() {
  return (
    <div className="relative mt-[1rem]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
        <Link href="/main" className="text-red-600 font-semibold text-[2rem]">
          HOME&nbsp;
        </Link>{" "}
        <span className=" text-[2rem]"> | </span>{" "}
        <span className="font-semibold text-[2rem]">&nbsp;SHOP</span>
      </div>
      <img src="/assets/market.webp" alt="" />
    </div>
  );
}
