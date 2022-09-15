import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto px-6 my-32">
      <h2 className="text-2xl font-semibold mb-6">All Blogs...</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <div className="card lg:card-side shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.2)] lg:w-3/4 mx-auto my-10">
            <figure>
              <img
                src={blog.imageURL}
                alt="Album"
                className="h-72 shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.2)]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>blog.blog</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
