import React, { useState } from "react";
import dashboard from "../assets/bxs_dashboard.svg";
import list from "../assets/list 1.svg";
import profile from "../assets/profile.svg";
import team from "../assets/ri_team.svg";
import building from "../assets/building 1.svg";
import { NavLink } from "react-router-dom";
const navItem = [
  { title: "DashBoard", img: dashboard, path: "/dashboard" },
  { title: "Feeds", img: list, path: "/feeds" },
  { title: "My Details", img: profile, path: "/my-details" },
  { title: "My Team Details", img: team, path: "/my-team-details" },
  {
    title: "Organisation Details",
    img: building,
    path: "/organisation-details",
  },
];

const NavItem = () => {
  const [active, setActive] = useState("/dashboard");
  return (
    <div className="flex justify-between ">
      <div className="py-3 px-10 text-xl  bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        Logo
      </div>
      <ul className="flex text-lg gap-20 p-2 px-10 bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        {navItem.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              onClick={() => setActive(item.path)}
              className={`flex gap-1 ${
                active === item.path ? "text-blue-700 " : "text-black"
              }`}
            >
              <img src={item.img} className=" w-5" />

              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
