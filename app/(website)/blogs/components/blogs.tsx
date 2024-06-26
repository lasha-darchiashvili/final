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
              "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
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
