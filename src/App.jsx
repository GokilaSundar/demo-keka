import { useState } from "react";
import "./App.css";
import NavItem from "./component/NavItem";
import CurrentDetails from "./component/CurrentDetails";
import SearchField from "./component/SearchField";
import team from "../src/assets/ri_team-fill (1).svg";
import group from "../src/assets/Group.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Feeds from "../src/pages/Feeds";
import MyDetails from "../src/pages/MyDetails";
import MyTeamDetails from "../src/pages/MyTeamDetails";
import OrganisationDetails from "../src/pages/OrganisationDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="m-10">
        <NavItem />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/my-details" element={<MyDetails />} />
        <Route path="/my-team-details" element={<MyTeamDetails />} />
        <Route path="/organisation-details" element={<OrganisationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
