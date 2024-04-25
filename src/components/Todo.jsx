import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";

const Todo = () => {
  return (
    <BrowserRouter>
      <section className="container ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
        {/* <Footer /> */}
      </section>
    </BrowserRouter>
  );
};

export default Todo;
