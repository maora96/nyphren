import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Fiction from "../pages/Fiction";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ShortStories from "../pages/ShortStories";
import SingleGame from "../pages/SingleGame";
import Webdev from "../pages/Webdev";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiction">
        <Route index element={<Fiction />} />
        <Route path="/fiction/:slug" element={<ShortStories />} />
      </Route>
      <Route path="/games">
        <Route index element={<Games />} />
        <Route path="/games/:slug" element={<SingleGame />} />
      </Route>
      <Route path="/webdev">
        <Route index element={<Webdev />} />
        <Route path="/webdev/projects" element={<Projects />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
