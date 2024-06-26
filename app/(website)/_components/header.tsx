"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import HeaderButton from "./headerButton";

export default function header() {
  const { t, i18n: translation } = useTranslation();

  if (!i18n.language) {
    i18n.changeLanguage("en");
  }

  const handleChangeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ge");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="flex justify-between mt-[2rem] items-center">
      <div className=" text-custom-gray w-[15rem] flex flex-col gap-[1rem] ml-[3rem]">
        <p className="text-[2rem]">Need Help</p>
        <p className="flex gap-[2rem]">
          <img className="w-[2rem]" src="assets/phone.svg" alt="" />
          <span className="text-[1.2rem]">Call 123456789</span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-b border-b-slate-400 w-[60rem] flex items-center">
          <p className="text-[10rem] mx-auto ">GOGGLES</p>
        </div>

        <div className="mt-[1rem] text-[2rem] text-custom-gray flex items-center justify-center gap-[3em] ">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/profile">Help</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex justify-center items-center mr-[3rem]">
        <div className="text-custom-gray flex items-center gap-[2rem]">
          <img
            className="w-[3rem] h-[3rem]"
            src="/assets/profilelogo.svg"
            alt=""
          />
          <div className="border border-gray-700 p-[1rem] flex gap-[2rem]">
            <p className="text-[1.6rem] my-auto">My Cart</p>
            <img className="w-[3rem] h-[3rem]" src="/assets/cart.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleChangeLanguage}
          >
            {t("languageAfterChange")}
          </button>
        </div>
      </div>
    </div>
  );
}
