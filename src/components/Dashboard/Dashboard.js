import React from "react";
import "./Dashboard.css";
import NavHeader from "../NavHeader/NavHeader";
import AssignedToMe from "./AssignedToMe/AssignedToMe";
import AssignedToTeam from "./AssignedToTeam/AssignedToTeam";
import MyRequests from "./MyRequests/MyRequests";
import CheckAuth from "../CheckAuth/CheckAuth";

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

const Dashboard = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="dashboard-full">
      <NavHeader {...props} />
      <div className="dashboard">
        <main className="dashboard-contents">
          <header className="dashboard-greeting">
            {dashboardGreeting()} {props.user.user.firstname}
          </header>
          <header className="dashboard-greeting-company">
            {` (${props.user.user.displayname})`}
          </header>
          <AssignedToMe {...props} />
          <AssignedToTeam {...props} />
          <MyRequests {...props} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
