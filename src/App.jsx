import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import CurrentDetails from "./component/CurrentDetails";
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
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/demo-keka/"
          element={<Navigate to="/demo-keka/dashboard" replace />}
        />
        <Route path="/demo-keka/dashboard" element={<Dashboard />} />
        <Route path="/demo-keka/feeds" element={<Feeds />} />
        <Route path="/demo-keka/my-details" element={<MyDetails />} />
        <Route path="/demo-keka/my-team-details" element={<MyTeamDetails />} />
        <Route
          path="/demo-keka/organisation-details"
          element={<OrganisationDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
