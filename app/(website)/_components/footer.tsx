import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <div className=" bg-custom-dark flex justify-center items-center">
      <div className="mt-[3rem] ml-[2rem] mr-[2rem] mb-[5rem] flex gap-[2rem] w-[160rem]">
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            About us
          </p>
          <p className="text-custom-graysh text-[1.4rem] tracking-widest">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            officia provident itaque molestias labore eum doloremque veritatis!
            Excepturi corrupti ullam soluta necessitatibus reprehenderit placeat
            odit iste! Minima omnis beatae repellendus!
          </p>
          <div className="flex gap-[1rem]">
            <Link href="">
              <img
                className="w-[2rem] hover:scale-150 transition"
                src="assets/facebook.svg"
                alt=""
              />
            </Link>
            <Link href="">
              {" "}
              <img
                className="w-[2rem] hover:scale-150 transition"
                src="assets/gplus.svg"
                alt=""
              />
            </Link>
            <Link href="">
              {" "}
              <img
                className="w-[2rem] hover:scale-150 transition"
                src="assets/linkedin.svg"
                alt=""
              />
            </Link>
            <Link href="">
              {" "}
              <img
                className="w-[2rem] hover:scale-150 transition"
                src="assets/wifi.svg"
                alt=""
              />
            </Link>
            <Link href="">
              {" "}
              <img
                className="w-[2rem] hover:scale-150 transition"
                src="assets/twitter.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            Get in touch
          </p>
          <div className="flex flex-col gap-[1rem] tracking-widest">
            <p className="text-custom-orange text-[1.8rem]">Location :</p>
            <p className="text-custom-graysh text-[1.4rem]">
              0926k 4th block building, king Avenue, New York City.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] tracking-widest">
            <p className="text-custom-orange text-[1.8rem]">Contact :</p>
            <p className="text-custom-graysh text-[1.4rem]">
              Phone : <span> +121 098 8907 9987</span>
            </p>
            <p className="text-custom-graysh text-[1.4rem]">
              Email :<span> info@example.com</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            Quick links
          </p>

          <div className="tracking-widest text-[1.4rem] flex flex-col gap-[1rem] text-custom-graysh">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/profile">Help</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            Sign up for your offers
          </p>
          <div className="flex gap-[1rem] flex-col">
            <p className="text-custom-graysh text-[1.4rem]">
              By subscribing to our mailing list you will always get latest news
              and updates from us.
            </p>
            <form>
              <div className="flex items-center tracking-widest">
                <input
                  type="email"
                  placeholder="Email"
                  className="mr-2 py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
