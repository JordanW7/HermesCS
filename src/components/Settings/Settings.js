import React from "react";
import "./Settings.css";
import "../CheckAuth/CheckAuth";

const Settings = () => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="settings-full">
      <h1>Under Construction</h1>
    </div>
  );
};

export default Settings;
