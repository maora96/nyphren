import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiction">
        <Route index element={<h1>fiction</h1>} />
        <Route path="/fiction/:slug" element={<h1>fiction element</h1>} />
      </Route>
      <Route path="/games">
        <Route index element={<h1>games</h1>} />
        <Route path="/games/:slug" element={<h1>games element</h1>} />
      </Route>
      <Route path="/webdev">
        <Route index element={<h1>webdev</h1>} />
        <Route path="/webdev/:slug" element={<h1>webdev element</h1>} />
      </Route>
      <Route path="/about" element={<h1>about</h1>} />
    </Routes>
  );
}
