import React from "react";
import Home from "./components/Todo";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <section className="w-full h-[100vh]  flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
