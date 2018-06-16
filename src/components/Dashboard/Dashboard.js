import React from "react";
import "./Dashboard.css";
import NavHeader from "../NavHeader/NavHeader";
import AssignedToMe from "./AssignedToMe/AssignedToMe";
import AssignedToTeam from "./AssignedToTeam/AssignedToTeam";
import MyRequests from "./MyRequests/MyRequests";

const dashboardGreeting = () => {
  let today = new Date();
  let hours = today.getHours();
  if (hours >= 4 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

// Need to make a mobile friendly option that shows less info and a Quick Look button

const Dashboard = props => {
  return (
    <div className="dashboard-full">
      <NavHeader {...props} />
      <div className="dashboard">
        <div className="dashboard-contents">
          <div className="dashboard-greeting">
            {dashboardGreeting()} Jordan @ Company! :)
          </div>
          <AssignedToMe />
          <AssignedToTeam />
          <MyRequests />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
