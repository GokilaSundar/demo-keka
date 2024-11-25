import React from "react";
import SearchField from "../component/SearchField";
import CurrentDetails from "../component/CurrentDetails";
import team from "../assets/ri_team-fill (1).svg";
import group from "../assets/Group.svg";
const MyTeamDetails = () => {
  return (
    <div className="m-10">
      <div className="flex justify-between gap-6">
        <CurrentDetails
          title="Total Team Members"
          quantity={10}
          bg="#FAECEB"
          className="bg-[#FAECEB] border-[#FAECEB]"
          icon="T"
          iconColor="bg-[#FEA9AC] border-[#FEA9AC]"
          img={team}
        />
        <CurrentDetails
          title="On Leave Today"
          quantity={3}
          bg="#FAECEB"
          className="bg-[#FCF4E9] border-[#FCF4E9]"
          icon="L"
          iconColor="bg-[#FFD59C] border-[#FFD59C]"
          img={group}
        />
        <CurrentDetails
          title="On Work From Home"
          quantity={5}
          bg="#FAECEB"
          className="bg-[#E2E9F3] border-[#E2E9F3]"
          icon="W"
          iconColor="bg-[#BFCFD7] border-[#BFCFD7]"
          img={team}
        />
      </div>
      <SearchField />
    </div>
  );
};

export default MyTeamDetails;
