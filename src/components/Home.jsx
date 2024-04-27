import React from "react";
import Status from "./Status";
import Projects from "./Projects";
import Labels from "./Labels";

const Home = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-start gap-7 overflow-y-scroll  ">
      <Status />
      <Projects />
      <Labels />
    </section>
  );
};

export default Home;
