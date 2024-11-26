import React, { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import call from "../assets/ic_sharp-call.svg";
import location from "../assets/location 1.svg";
import list from "../assets/list 1.svg";
import mail from "../assets/mail 1.svg";
import building from "../assets/building 1.svg";
import SearchField from "../common/SearchField";
const tableTitle = [
  "Employee ID",
  "Employee Name",
  "Designation",
  "Department",
  "Email ID",
  "Phone Number",
  "Action",
];
const tableItem = [
  {
    id: 1,
    name: "Prabakaran",
    designation: "Designer",
    department: "Quantum Technology",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676898,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
  {
    id: 2,
    name: "Surya Chandran",
    designation: "Designer",
    department: "QA Pulse Tech",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676898,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
  {
    id: 3,
    name: "Lavanya",
    designation: "Designer",
    department: "Pulse Technology",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676898,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
  {
    id: 4,
    name: "Suganya",
    designation: "Designer",
    department: "Frenzo Pvt Ltd",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676898,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
  {
    id: 5,
    name: "Chandra Kumar",
    designation: "Designer",
    department: "Quantum Pulse Technology",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676898,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
  {
    id: 4,
    name: "Suganya",
    designation: "Developer",
    department: "Kovaion Technology",
    collage: "Sri Eshwar collage of Engineering",
    email: "abc@gmail.com",
    number: 9090676880,
    locationIcon: location,
    mailIcon: mail,
    buildingIcon: building,
    callIcon: call,
    listIcon: list,
    action: "",
  },
];
const TeamData = () => {
  const [grid, setGrid] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filter, setFilter] = useState(tableItem);
  const handleSearch = (e) => {
    const searchName = e.target.value;
    setSearchItem(searchName);
    console.log(searchItem);
    const filterItem = tableItem.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );
    console.log(filterItem);
    setFilter(filterItem);
  };
  const handlToggle = () => {
    setGrid(!grid);
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-10">
        <div className="w-full  relative">
          <SearchField
            searchItem={searchItem}
            handleSearch={handleSearch}
            placeholder="Search employee..."
            className="w-full border-2 border-[#D9D9D9] rounded-md py-2 px-9"
            imgStyle="w-6 absolute top-3 left-2"
          />
        </div>

        <div className="flex gap-4">
          <button
            className={`w-24 h-6 
                 rounded-xl relative border-1 border-slate-200  ${
                   grid ? "bg-[#2986CE]" : "bg-[#E2EFF9]"
                 }`}
            onClick={handlToggle}
          >
            <span
              className={`bg-white  w-5 h-5 rounded-xl ${
                grid ? "right-[1px]" : "left-[1px]"
              } top-[1.9px]  absolute`}
            ></span>
          </button>
          <span className="w-full font-medium">Grid View</span>
        </div>
      </div>
      {filter.length === 0 ? (
        <div className="my-10 font-medium text-xl text-center">
          No datas found {":("}
        </div>
      ) : grid ? (
        <div className="my-10">
          <EmployeeDetails gridItem={filter} />
        </div>
      ) : (
        <div className="my-10 rounded-lg border-2 border-[#E2EFF9] overflow-x-scroll">
          <table className="w-full ">
            <thead>
              <tr>
                {tableTitle.map((item, index) => (
                  <th
                    className="border-b-2 text-left py-5 px-5 font-medium bg-[#E2EFF9] border-[#E2EFF9]"
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filter.map((item, index) => (
                <tr key={index} className="">
                  <td className="p-4 px-5">{item.id}</td>
                  <td className="p-4 px-5">{item.name}</td>
                  <td className="p-4 px-5">{item.designation}</td>
                  <td className="p-4 px-5">{item.department}</td>
                  <td className="p-4 px-5">{item.email}</td>
                  <td className="p-4 px-5">{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamData;
