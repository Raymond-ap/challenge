import React from "react";
import { Detail } from "../components";
import { Navbar, Sidebar } from "../layout";
import Dashboard from "./Dashboard";

export default function MainView() {
  return (
    <div className="bg-white w-full relative ">
      <div className="flex ">
        <Sidebar />
        <div className=" w-full">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
