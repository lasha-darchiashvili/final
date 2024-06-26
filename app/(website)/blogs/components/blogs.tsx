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

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlogsData(data.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  console.log(blogsData);

  return (
    <div className="flex items-center flex-col text-custom-white mt-[4rem] gap-[4rem]">
      <p className="text-custom-white text-[2.4rem]">asd</p>
      <div className="w-[120rem] flex flex-col gap-[5rem] items-center">
        {blogsData.map((game: Blog) => (
          <SingleBlog
            key={game.id}
            id={`${game.id}`}
            title={game.title}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wqYg5tmJjCZ9S7O_JngEKzZ-szwnL5DhzQ&s"
            }
            text={game.body}
            createDate={"09-09-2020"}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
