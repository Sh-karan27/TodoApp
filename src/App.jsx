import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <section className="w-full h-[100vh]  flex flex-col items-center justify-center">
        <Todo />
      </section>
    </>
  );
};

export default App;
