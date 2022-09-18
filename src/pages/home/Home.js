import React, { useEffect, useContext } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../App";

const Home = () => {
  // const [blogs, setBlogs] = useState([]);
  const [blogs, setBlogs] = useContext(BlogContext);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);

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
                  className="sm:h-72 shadow-[0px_0px_20px_-5px_rgba(0,0,0,0.2)] rounded-md"
                />
              </figure>
              <div className="card-body p-0 sm:p-8">
                <h2 className="card-title md:text-2xl text-lg text-blueYonder">
                  {blog.title}
                </h2>
                <div className="flex items-center gap-4 text-blueYonder">
                  <BsArrowReturnRight />
                  <h5 className="md:text-base text-sm">{blog.admin}</h5>
                </div>
                <p className="md:text-lg text-base mt-5">
                  {blog.blog.length < 200
                    ? blog.blog.length
                    : blog.blog.slice(0, 200)}
                  <span
                    className="btn btn-xs font-medium bg-blackCoral mx-1"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    ... Read More
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
