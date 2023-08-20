/** @format */

import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};

export async function generateStaticParams() {
  const blogs = await loadBlogData();
  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
}

const SingleBlog = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);

  return (
    <div>
      <div className="block border  w-[40vw] border-orange-400 py-2 px-10 my-5">
        <p className="text-teal-500">
          {id}. {title}
        </p>
        <br />
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
