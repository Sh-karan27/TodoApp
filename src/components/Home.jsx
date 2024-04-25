import React from "react";
import Status from "./Status";
import Projects from "./Projects";
import Labels from "./Labels";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <Status />
      <Projects />
      <Labels />
    </div>
  );
};

export default Home;
