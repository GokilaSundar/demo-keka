import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import CurrentDetails from "./component/CurrentDetails";
import team from "../src/assets/ri_team-fill (1).svg";
import group from "../src/assets/Group.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Feeds from "../src/pages/Feeds";
import MyDetails from "../src/pages/MyDetails";
import MyTeamDetails from "../src/pages/MyTeamDetails";
import OrganisationDetails from "../src/pages/OrganisationDetails";
import NotFound from "./common/NotFound";
function App() {
  const location = useLocation();
  const notFoundPage = [
    "/dashboard",
    "/feeds",
    "/my-details",
    "/my-team-details",
    "/organisation-details",
  ];
  const path = notFoundPage.map((item) => item);
  const showNavbar = notFoundPage.includes(location.pathname);
  return (
    <>
      <div className="m-10">{showNavbar && <Navbar />}</div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/my-details" element={<MyDetails />} />
        <Route path="/my-team-details" element={<MyTeamDetails />} />
        <Route path="/organisation-details" element={<OrganisationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
