import React from "react";
// import { useTranslation } from "react-i18next";

interface Blog {
  title: string;
  img: string;
  text: string;
  id: string;
  createDate: string;
}

const SingleBlog: React.FC<Blog> = ({ title, img, text, id, createDate }) => {
  //   const { t } = useTranslation();
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row md:w-3/4 mx-auto my-5">
      <div className="md:w-2/5">
        <img
          className="object-cover w-full h-64 md:h-auto"
          src={img}
          alt="Blog Image"
        />
      </div>
      <div className="p-6 flex flex-col md:w-3/5">
        <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{text}</p>
        <div className="mt-auto">
          <p className="text-sm text-gray-600">
            <i>{createDate}</i>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-base font-semibold text-custom-graysh">
            <a
              href={`/blogs/${id}`}
              className="text-blue-600 hover:text-blue-700"
            >
              Read more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
