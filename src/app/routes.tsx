import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Fiction from "../pages/Fiction";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Webdev from "../pages/Webdev";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiction">
        <Route index element={<Fiction />} />
        <Route path="/fiction/:slug" element={<h1>fiction element</h1>} />
      </Route>
      <Route path="/games">
        <Route index element={<Games />} />
        <Route path="/games/:slug" element={<h1>games element</h1>} />
      </Route>
      <Route path="/webdev">
        <Route index element={<Webdev />} />
        <Route path="/webdev/:slug" element={<h1>webdev element</h1>} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
