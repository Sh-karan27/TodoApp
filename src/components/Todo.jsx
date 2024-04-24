import React from "react";
import Header from "./Header";
import Status from "./Status";
import Projects from "./Projects";
import Labels from "./Labels";
import Footer from "./Footer";

const Todo = () => {
  return (
    <section className="container ">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <Status />
        <Projects />
        <Labels />
      </div>
      <Footer />
    </section>
  );
};

export default Todo;
