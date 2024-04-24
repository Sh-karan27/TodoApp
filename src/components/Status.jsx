import React from "react";
import { StatusList } from "../constants";

const Status = () => {
  return (
    <section className="  w-full px-5 py-5 flex items-center justify-center">
      <div className="  w-full flex items-center justify-evenly">
        {StatusList.map((item, i) => (
          <div
            key={i}
            className=" cursor-pointer  bg-[#26304A]  flex items-center justify-center  gap-2  px-2 py-2 rounded-xl"
          >
            <div
              className="px-2 py-2 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-white">{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
