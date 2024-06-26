"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ProductsImage from "../products/components/productsImage";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formValid = true;
    const newErrors: FormErrors = { ...errors };

    // Check for empty fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      formValid = false;
      newErrors.name = !formData.name.trim();
      newErrors.email = !formData.email.trim();
      newErrors.subject = !formData.subject.trim();
      newErrors.message = !formData.message.trim();
    }

    // Check subject length
    if (formData.subject.length > 24) {
      formValid = false;
      newErrors.subject = true;
    }

    setErrors(newErrors);

    if (formValid) {
      // Construct mailto link
      const mailtoLink = `mailto:Company@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(formData.message)}`;

      // Open default email client
      window.location.href = mailtoLink;
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <ProductsImage />
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[6rem] text-[5rem]">Contact</p>
        <p className="mt-[3rem] text-[2.4rem]">WE LOVE TO DISCUSS YOUR IDEA</p>
      </div>
      <div className="flex justify-center items-center mt-[4rem]">
        <div className="flex">
          {/* Your address, email, phone components */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[6rem]">
        <form
          className="w-[160rem] flex justify-center gap-[4rem] mb-[20rem]"
          onSubmit={handleSubmit}
        >
          <div className="w-[50%] flex flex-col gap-[2rem]">
            <div>
              <p className="text-[2rem]">NAME</p>
              <input
                className={`bg-contact-gray text-[1.6rem] w-full outline-none border ${
                  errors.name ? "border-red-500" : "border-border-color"
                } p-[2rem]`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500">Name field cannot be empty</p>
              )}
            </div>
            <div>
              <p className="text-[2rem]">EMAIL</p>
              <input
                className={`bg-contact-gray text-[1.6rem] w-full outline-none border ${
                  errors.email ? "border-red-500" : "border-border-color"
                } p-[2rem]`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">Email field cannot be empty</p>
              )}
            </div>
            <div>
              <p className="text-[2rem]">SUBJECT</p>
              <input
                className={`bg-contact-gray text-[1.6rem] w-full outline-none border ${
                  errors.subject ? "border-red-500" : "border-border-color"
                } p-[2rem]`}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500">
                  Subject field cannot be empty or more than 24 characters
                </p>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col justify-between">
            <div>
              <p className="text-[2rem]">MESSAGE</p>
              <textarea
                className={`bg-contact-gray text-[1.6rem] w-full outline-none border ${
                  errors.message ? "border-red-500" : "border-border-color"
                } p-[2rem]`}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500">Message field cannot be empty</p>
              )}
            </div>

            <button className="bg-black text-[1.6rem] w-full text-center text-white p-[2rem]">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
