"use client";
import React from "react";
import SingleBlog from "./singleBlog";
import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

interface Blog {
  id: number;
  title: string;
  body: string;
}

const Blogs: React.FC = () => {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);

  //   const { t } = useTranslation();

  const getBlogs = async () => {
    try {
      const response = await fetch("/api/get-blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      console.log(data);
      setBlogsData(data.bloggs.rows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log(blogsData);

  return (
    <div className="flex items-center flex-col text-custom-white mt-[4rem] gap-[4rem]">
      <p className="text-custom-white text-[2.4rem]">asd</p>
      <div className="w-[120rem] flex flex-col gap-[5rem] items-center">
        {blogsData.map((blog: Blog) => (
          <SingleBlog
            key={blog?.id}
            id={`${blog?.id}`}
            title={blog?.title}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wqYg5tmJjCZ9S7O_JngEKzZ-szwnL5DhzQ&s"
            }
            text={blog?.body}
            createDate={"09-09-2020"}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
