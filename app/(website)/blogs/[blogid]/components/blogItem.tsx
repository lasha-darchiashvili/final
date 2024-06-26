"use client";
import React from "react";
import { useState, useEffect } from "react";

interface BlogItemProps {
  id: number;
}

interface BlogData {
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

const BlogItem: React.FC<BlogItemProps> = ({ id }) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlogData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  console.log(blogData);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-[3rem] text-red-500">
          <img className="w-[4rem]" src="/assets/loader.svg" alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-[2rem] items-center w-full mt-[3rem] mt-[4rem] mb-[4rem]">
        <div className="flex flex-row gap-[2rem] bg-custom-second-blue w-[120rem] rounded-2xl">
          <div className="w-3/5">
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wqYg5tmJjCZ9S7O_JngEKzZ-szwnL5DhzQ&s"
              alt="photo"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-[2rem] mt-[3rem] text-white">
            <p className="text-[2rem] mt-[2rem]f mb-[2rem]">
              {blogData?.title}
            </p>
            <p>{blogData?.body}</p>
            <div>
              <p className="text-[1.8rem] text-gray-400 mb-[1rem]">tags</p>
              <div className="flex gap-[1rem] text-[1.4rem]">
                {blogData?.tags.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-[1.4rem] text-gray-400 bg-zinc-900 px-4 py-2 rounded-lg"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto">
              <a
                className="bg-gray-500 block w-[10rem] ml-auto text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mb-[1rem] mr-[1rem]"
                href="/blogs"
              >
                Go back
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BlogItem;
