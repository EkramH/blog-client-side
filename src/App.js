import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Video from "./pages/Video";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
