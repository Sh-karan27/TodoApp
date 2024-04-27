import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../slices/projectSlice";
import { IoIosTrash } from "react-icons/io";

import AlertDialog from "./alertBox";
const Projects = () => {
  const [toggle, setToggle] = useState(false);

  const data = useSelector((state) => state.project);
const dispatch = useDispatch()
  const deleteProjectText = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <section
      className={`w-[90%] relative  ${
        toggle? "h-[50px]" : " "
      }   flex items-center justify-center py-5 px-5 overflow-hidden`}
    >
      <div className="w-full h-full   flex flex-col items-center justify-start gap-5 rounded-xl ">
        <div className="w-full flex  items-center justify-between">
          <h1 className="text-[#219ebc]">Project</h1>
          <div className="flex items-center justify-center gap-2">
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
            <div className="bg-[#26304A] text-[#219ebc] px-2   rounded-full">{data.length}</div>
          </div>
        </div>

        <AlertDialog />

        <div className={`w-full ${data.length===0?"":"h-[150px]"}  flex flex-col items-center justify-start gap-5 overflow-y-scroll `}>
          {data.map((project, id) => {
            return (
              <div
                key={id}
                className="w-full flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md "
              >
                <h1 className="text-white">{project.text}</h1>
                <IoIosTrash className="text-red-500 text-2xl hover:cursor-pointer hover:text-blue-500" onClick={()=>deleteProjectText(project.id)}/>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
