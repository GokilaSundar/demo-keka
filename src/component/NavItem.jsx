import React from "react";
import dashboard from "../assets/bxs_dashboard.svg";
import list from "../assets/list 1.svg";
import vector from "../assets/Vector.svg";
import team from "../assets/ri_team.svg";
import building from "../assets/building 1.svg";
const navItem = [
  { title: "DashBoard", img: dashboard },
  { title: "Feeds", img: list },
  { title: "My Details", img: vector },
  { title: "My Team Details", img: team },
  { title: "Organisation Details", img: building },
];
const NavItem = () => {
  return (
    <div className="flex justify-between ">
      <div className="py-3 px-10 text-xl  bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        Logo
      </div>
      <ul className="flex text-lg gap-20 py-3 px-10 bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        {navItem.map((item, index) => (
          <li key={index} className="flex gap-1">
            <img src={item.img} className=" w-5" />
            <a className="cursor-pointer">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
