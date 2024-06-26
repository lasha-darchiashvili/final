"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import HeaderButton from "./headerButton";

export default function Header() {
  const { t, i18n: translation } = useTranslation();
  console.log(i18n.language);
  console.log(translation.language);

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
    <div className="flex justify-between mt-[2rem] items-center mb-[3rem]">
      <div className="text-custom-gray w-[15rem] flex flex-col gap-[1rem] ml-[3rem]">
        <p className="text-[2rem]">{t("help")}</p>
        <p className="flex gap-[2rem]">
          <img className="w-[2rem]" src="assets/phone.svg" alt="" />
          <span className="text-[1.2rem]">
            {t("contactLink")}: 123456789
          </span>{" "}
        </p>
      </div>
      <div className="flex flex-col gap-[2rem] items-center">
        <div className="border-b border-b-slate-400 w-[70rem] flex items-center">
          <p className="text-[10rem] mx-auto ">ROCK STORE</p>{" "}
        </div>

        <div className="mt-[1rem] text-[2rem] text-custom-gray flex items-center justify-center gap-[3em] ">
          <Link href="/main">{t("main")}</Link>
          <Link href="/products">{t("products")}</Link>{" "}
          <Link href="/blogs">{t("blog")}</Link>
          <Link href="/contact">{t("contactLink")}</Link>{" "}
          <Link href="/contact">{t("profile")}</Link>{" "}
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
            <p className="text-[1.6rem] my-auto">{t("Cart")}</p>
            <img className="w-[3rem] h-[3rem]" src="/assets/cart.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <button
            className="py-2 px-4 border-gray-700 border rounded-md  focus:outline-none h-full ml-[1rem]"
            onClick={handleChangeLanguage}
          >
            {t("languageAfterChange")}
          </button>
        </div>
      </div>
    </div>
  );
}
