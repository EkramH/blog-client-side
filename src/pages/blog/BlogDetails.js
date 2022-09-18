import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useContext(BlogContext);

  const blog = blogs.find((blog) => blog._id === id);

  console.log(blog);

  return (
    <div>
      <h2>Blog details</h2>
    </div>
  );
};

export default BlogDetails;
