import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useContext(BlogContext);

  const blog = blogs.find((blog) => blog._id === id);

  return (
    <div className="">
      <div className="container mx-auto py-14 flex flex-col items-center">
        <div className="px-2 sm:px-0">
          <img src={blog.imageURL} alt="" className="border-4 border-[#fff]" />
        </div>
        <h2 className="text-xl sm:text-3xl px-2 sm:px-0 pt-8 sm:pt-14 pb-3 font-semibold">
          {blog.title}
        </h2>
        <h5 className="pb-4">Author: {blog.admin}</h5>
        <p className="sm:w-4/5 lg:w-2/3 px-3 sm:px-0 text-justify sm:text-lg">
          {blog.blog}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
