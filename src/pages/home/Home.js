import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto px-6 py-32">
        <h2 className="text-2xl font-semibold mb-6">All Blogs...</h2>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <div className="card rounded-none lg:card-side lg:w-3/4 mx-auto my-10">
              <figure>
                <img
                  src={blog.imageURL}
                  alt="Album"
                  className="h-72 shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.2)]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl text-blueYonder">
                  {blog.title}
                </h2>
                <h5 className="text-base">{blog.admin}</h5>
                <p className="text-lg mt-5">{blog.blog.slice(0, 200)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
