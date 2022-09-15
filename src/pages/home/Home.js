import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);
  return (
    <div className="container mx-auto px-6 my-32">
      <h2 className="text-2xl font-semibold">All Blogs...</h2>
      {blogs.map((blog) => (
        <div>
          <h1>{blog.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
