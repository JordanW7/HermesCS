import React from "react";
import "./Dashboard.css";
import NavHeader from "../NavHeader/NavHeader";

const Dashboard = props => {
  return (
    <div className="dashboard-full">
      <NavHeader {...props} />
      <h1>Requests Assigned to me (Outstanding/Completed/All)</h1>
      <h1>Requests Assigned to my Team (Unassigned/Assigned/Completed/All)</h1>
      <h1>Requests I've Sent (Outstanding/Assigned/Completed/All)</h1>
    </div>
  );
};

export default Dashboard;
