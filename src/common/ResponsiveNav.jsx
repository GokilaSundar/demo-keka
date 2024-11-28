import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ResponsiveNav = ({ navItem, setSideNavbar }) => {
  //   const [active, setActive] = useState("/dashboard");

  const handleClose = () => {
    setSideNavbar(false);
  };
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(location, currentPath);
  return (
    <div className="bg-[#fafafa] border-2 h-full rounded-md border-white">
      <div className="py-3 px-3 text-xl rounded-tl-md rounded-tr-md  bg-[#F5FAFD] border-2 border-[#F5FAFD]">
        Logo
      </div>
      <ul className=" text-lg">
        {navItem.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              onClick={handleClose}
              //   onClick={() => setActive(item.path)}
              className={`flex gap-1 py-5 px-3 hover:bg-blue-50 ${
                currentPath === item.path ? "text-blue-700" : "text-black"
              }`}
            >
              {/* <img src={item.img} className=" w-5" /> */}

              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveNav;
