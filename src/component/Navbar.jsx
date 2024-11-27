import React, { useState } from "react";
import dashboard from "../assets/bxs_dashboard.svg";
import list from "../assets/list 1.svg";
import profile from "../assets/profile.svg";
import team from "../assets/ri_team.svg";
import building from "../assets/building 1.svg";
import { NavLink, useLocation } from "react-router-dom";
import hamburger from "../assets/icons8-hamburger.svg";
import ResponsiveNav from "../common/ResponsiveNav";
import cross from "../assets/cross.svg";
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

const Navbar = () => {
  const [active, setActive] = useState("/dashboard");
  const location = useLocation();
  const currentPath = location.pathname;
  const [sideNavbar, setSideNavbar] = useState(false);
  console.log(sideNavbar);
  return (
    <div className="flex justify-between ">
      <div className="py-3 px-10 text-xl  bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        Logo
      </div>
      <ul className="hidden sm:hidden md:hidden lg:flex text-lg gap-20 p-2 px-10 bg-[#F5FAFD] border-2 border-[#F5FAFD] rounded-2xl">
        {navItem.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              // onClick={() => setActive(item.path)}
              className={`flex gap-1 ${
                currentPath === item.path ? "text-blue-700 " : "text-black"
              }`}
            >
              <img src={item.img} className=" w-5" />

              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className="relative block sm:block md:block lg:hidden "
        onClick={() => setSideNavbar(!sideNavbar)}
      >
        <img
          src={sideNavbar ? cross : hamburger}
          alt="hamburger"
          className="w-7 h-7"
        />
      </button>
      {sideNavbar && (
        <div className=" absolute sm:block md:block lg:hidden top-[100px] right-[40px]  sm:w-[600px]  h-[500px] z-50">
          {" "}
          <ResponsiveNav navItem={navItem} setSideNavbar={setSideNavbar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
