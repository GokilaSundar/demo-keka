import React from "react";
import profile from "../assets/profile.png";

const EmployeeDetails = ({ gridItem }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {gridItem.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-xl border-[#D9D9D9] bg-[#F5FAFD]"
          >
            <div className="flex gap-5 border-b-2 p-2">
              <img
                src={profile}
                alt="{item.name}"
                className="w-14 h-1w-14 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{item.name}</div>
                <div>{item.designation}</div>
              </div>
            </div>
            <img src={item.location} alt="" />
            <div className="p-2">
              <div className="p-1 flex">
                <img src={item.buildingIcon} alt="" className="w-6 p-1" />
                {item.department}
              </div>
              <div className="p-1 flex">
                <img src={item.locationIcon} alt="" className="w-6 p-1" />
                {item.collage}
              </div>
              <div className="p-1 flex">
                <img src={item.mailIcon} alt="" className="w-6 p-1" />

                {item.email}
              </div>
              <div className="p-1 flex">
                <img src={item.callIcon} alt="" className="w-6 p-1" />

                {item.number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
