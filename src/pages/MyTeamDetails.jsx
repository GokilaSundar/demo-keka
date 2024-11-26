import React from "react";
import TeamData from "../component/TeamData";
import CurrentDetails from "../component/CurrentDetails";
import team from "../assets/ri_team-fill (1).svg";
import group from "../assets/Group.svg";
const currentData = [
  {
    title: "Total Team Members",
    quantity: 10,
    img: team,
    iconColor: "bg-[#FEA9AC] border-[#FEA9AC]",
    bg: "#FAECEB",
    className: "bg-[#FAECEB] border-[#FAECEB]",
  },
  {
    title: "On Leave Today",
    quantity: 3,
    img: group,
    iconColor: "bg-[#FFD59C] border-[#FFD59C]",
    bg: "#FAECEB",
    className: "bg-[#fcead2] border-[#fcead2]",
  },
  {
    title: "On Work From Home",
    quantity: 5,
    img: team,
    iconColor: "bg-[#BFCFD7] border-[#BFCFD7]",
    bg: "#FAECEB",
    className: "bg-[#E2E9F3] border-[#E2E9F3]",
  },
];
const MyTeamDetails = () => {
  return (
    <div className="m-10 ">
      <div className=" lg:flex justify-between gap-3 ">
        {currentData.map((item, index) => (
          <div key={index} className="">
            <CurrentDetails
              quantity={item.quantity}
              title={item.title}
              img={item.img}
              iconColor={item.iconColor}
              className={item.className}
            />
          </div>
        ))}
      </div>

      <TeamData />
    </div>
  );
};

export default MyTeamDetails;
