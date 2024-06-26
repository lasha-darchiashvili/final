"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-custom-dark flex justify-center items-center">
      <div className="mt-[3rem] ml-[2rem] mr-[2rem] mb-[5rem] flex gap-[2rem] w-[160rem]">
        {/* About Us Section */}
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            {t("aboutUs")}
          </p>
          <p className="text-custom-graysh text-[1.4rem] tracking-widest">
            {t("aboutUsText")}
          </p>
          <div className="flex gap-[1rem]">
            {/* Social Media Links */}
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

        {/* Get in Touch Section */}
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            {t("getInTouch")}
          </p>
          <div className="flex flex-col gap-[1rem] tracking-widest">
            <p className="text-custom-orange text-[1.8rem]">{t("location")}</p>
            <p className="text-custom-graysh text-[1.4rem]">{t("address")}</p>
          </div>
          <div className="flex flex-col gap-[1rem] tracking-widest">
            <p className="text-custom-orange text-[1.8rem]">{t("contact")}</p>
            <p className="text-custom-graysh text-[1.4rem]">
              {t("phoneNumber")}
            </p>
            <p className="text-custom-graysh text-[1.4rem]">
              {t("emailAddress")}
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            {t("quickLinks")}
          </p>
          <div className="tracking-widest text-[1.4rem] flex flex-col gap-[1rem] text-custom-graysh">
            <Link href="/main">{t("main")}</Link>
            <Link href="/products">{t("products")}</Link>
            <Link href="/blogs">{t("blog")}</Link>
            <Link href="/contact">{t("contact")}</Link>
            <Link href="/profile">{t("profile")}</Link>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <p className="border-b border-dotted border-b-custom-graysh pb-[1rem] text-white text-[2rem]">
            {t("signUp")}
          </p>
          <div className="flex gap-[1rem] flex-col">
            <p className="text-custom-graysh text-[1.4rem]">
              {t("signUpText")}
            </p>
            <form>
              <div className="flex items-center tracking-widest">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="mr-2 py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                  {t("submitButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
