import { SlCalender } from "react-icons/sl";
import { CiCircleList } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";


export const StatusList = [
    { status: "To Do", color: "#d90429" },
    { status: "Doing", color: "#ffd60a" },
    { status: "Done", color: "#38b000" }
];


export   const footerArray = [
  {
    name: "List",
    icon: <CiCircleList />,
  },
  {
    name: "Add task",
    icon: < IoIosAdd />,
  },
  {
    name: "Calendar",
    icon: <SlCalender />,
  },
];




