/** @format */

import React from "react";
import Navbar from "../components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-250px)] grid place-items-center">
        {children}
      </div>
      <footer className="bg-slate-500 flex h-[200px] items-center justify-center gap-10 text-xl my-2">
        Footer
      </footer>
    </div>
  );
};

export default WithLayout;
