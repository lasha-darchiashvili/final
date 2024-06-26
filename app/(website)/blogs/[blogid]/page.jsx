"use server";
import React from "react";
import BlogItem from "./components/blogItem";

export async function generateStaticParams() {
  const posts = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );

  return posts.posts.map((post) => ({
    id: post.id,
  }));
}

export default async function page({ params }) {
  return <BlogItem id={params.blogid} />;
}
