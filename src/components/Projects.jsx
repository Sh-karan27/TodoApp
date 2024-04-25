import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Projects = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section
      className={`w-[90%] relative  ${
        toggle ? "h-[50px]" : "h-[300px] "
      }   flex items-center justify-center py-5 px-5 overflow-hidden`}
    >
      <div className="w-full h-full   flex flex-col items-center justify-start gap-5 rounded-xl ">
        <div className="w-full flex  items-center justify-between">
          <h1 className="text-[#219ebc]">Project</h1>
          <div className="flex items-center justify-center gap-1">
            {toggle ? (
              <IoIosArrowDown
                className="text-[#219ebc] cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <IoIosArrowUp
                className="text-[#219ebc] cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            )}
            <FaPlus className="text-[#219ebc]" />
          </div>
        </div>

        <div className="w-full h-full  flex flex-col items-center justify-start gap-5 overflow-y-scroll ">
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
          <div className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Title</h1>
            <div className="bg-white p-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
