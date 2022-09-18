import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Video from "./pages/Video";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import BlogDetails from "./pages/blog/BlogDetails";

import { createContext, useState } from "react";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <div>
      <BlogContext.Provider value={[blogs, setBlogs]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
