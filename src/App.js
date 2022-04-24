import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import News from "./pages/News";
import Pythonland from "./pages/Pythonland";
import UserList from "./pages/UserList";
import Shop from "./pages/Shop";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/media" element={<Media />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/pythonland" element={<Pythonland />} />
        <Route exact path="/mes-preferences" element={<UserList />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
