/** @format */

import React from "react";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-10 container mx-auto my-10">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
