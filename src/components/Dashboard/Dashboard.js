import React from "react";
import "./Dashboard.css";
import NavHeader from "../NavHeader/NavHeader";

const Dashboard = props => {
  return (
    <div className="dashboard-full">
      <NavHeader {...props} />
    </div>
  );
};

export default Dashboard;
