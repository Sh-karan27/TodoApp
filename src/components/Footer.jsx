import React from "react";
import { footerArray } from "../constants";
const Footer = () => {
  return (
    <section className=" relative  bg-[#26304A] w-full  py-3 px-5  flex items-center justify-center">
      <div className="w-3/4 flex items-center justify-between ">
        {footerArray.map((item, i) => (
          <div key={i} className=" flex items-center justify-between">
            <div
              className={`${
                item.name === "Add task"
                  ? "text-4xl  text-[#26304A] font-light bg-white  rounded-full hover:bg-[#26304A] hover:text-white border "
                  : " text-lg border  rounded-xl  text-white  hover:bg-white hover:text-[#26304A] "
              } px-2 py-2 cursor-pointer transition-colors delay-300 ease-linear `}
              title={item.name}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
