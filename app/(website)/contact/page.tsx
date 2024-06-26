import React from "react";
import ProductsImage from "../products/components/productsImage";

export default function page() {
  return (
    <div>
      <ProductsImage />
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[6rem] text-[5rem]">Contact</p>
        <p className="mt-[3rem] text-[2.4rem]">WE LOVE TO DISCUSS YOUR IDEA</p>
      </div>
      <div className="flex justify-center items-center mt-[4rem]">
        <div className="flex ">
          <div className="w-[30rem] flex gap-[1rem] justify-start items-center bg-contact-gray p-[4rem] border border-border-color">
            <img className="w-[3rem]" src="assets/address.svg" alt="" />
            <div className="flex flex-col gap-[0.2 rem]">
              <p>Address</p>
              <p className=" text-custom-graysh">California, USA</p>
            </div>
          </div>
          <div className="w-[30rem] flex gap-[1rem] justify-start items-center bg-contact-gray p-[4rem] border border-border-color">
            <img className="w-[3rem]" src="assets/mail.svg" alt="" />
            <div className="flex flex-col gap-[0.2 rem]">
              <p>Email</p>
              <p className=" text-custom-graysh">Email : mail@example.com</p>
            </div>
          </div>
          <div className="w-[30rem] flex gap-[1rem] justify-start items-center bg-contact-gray p-[4rem] border border-border-color">
            <img className="w-[3rem]" src="assets/phone.svg" alt="" />
            <div className="flex flex-col gap-[0.2 rem]">
              <p>Phone</p>
              <p className=" text-custom-graysh">+1 234 567 8901</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[6rem]">
        <form
          className="w-[160rem] flex justify-center items-center gap-[4rem] "
          action="https://formsubmit.co/feebae8e76caca0451f636709b37db9a"
          method="POST"
        >
          <div className="w-[50%] flex flex-col gap-[2rem]">
            <div>
              <p className="text-[2rem]">NAME</p>
              <input
                className="bg-contact-gray text-[1.6rem] w-full outline-none border border-border-color p-[2rem] w-[50%]"
                type="text"
                name="name"
                placeholder="name"
              />
            </div>
            <div>
              <p className="text-[2rem]">EMAIL</p>
              <input
                className="bg-contact-gray text-[1.6rem] w-full outline-none border border-border-color p-[2rem] w-[50%]"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div>
              <p className="text-[2rem]">NAME</p>
              <input
                className="bg-contact-gray text-[1.6rem] w-full outline-none border border-border-color p-[2rem] w-[50%]"
                type="text"
                name="name"
                placeholder="text"
              />
            </div>
          </div>

          <div className="w-[50%] flex flex-col justify-between">
            <div>
              <p className="text-[2rem]">MESSAGE</p>
              <input
                className="bg-contact-gray text-[1.6rem] w-full outline-none border border-border-color p-[2rem] w-[50%]"
                type="textarea"
                name="name"
              />
            </div>
            <button className="bg-black text-[1.6rem] w-full text-center text-white p-[2rem]">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
