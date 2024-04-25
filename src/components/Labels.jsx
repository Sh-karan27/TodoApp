import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Labels = () => {
  return (
    <section className="w-full   flex items-center justify-center py-5 px-5">
      <div className="w-full h-full  flex flex-col items-center justify-center gap-5 border px-2 py-2 rounded-xl ">
        <div className="w-full flex  items-center justify-between">
          <h1 className="text-[#219ebc]">Label</h1>
          <div className="flex items-center justify-center gap-1">
            <IoIosArrowDown className="text-[#219ebc]" />
            <FaPlus className="text-[#219ebc]" />
          </div>
        </div>

        <div className=" w-full grid grid-cols-2 gap-5 ">
          <div className=" flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Sport</h1>
            <IoIosArrowDown className="text-white" />
          </div>
          <div className=" flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Sport</h1>
            <IoIosArrowDown className="text-white" />
          </div>
          <div className=" flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Sport</h1>
            <IoIosArrowDown className="text-white" />
          </div>
          <div className=" flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Sport</h1>
            <IoIosArrowDown className="text-white" />
          </div>
          <div className=" flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md ">
            <h1 className="text-white">Sport</h1>
            <IoIosArrowDown className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labels;
