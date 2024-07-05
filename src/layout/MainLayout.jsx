import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles.css";
import MySide from "../components/MySide";

export default function MainLayout() {
  return (
    <div className="bgMain">
      <div className="container">
        <Navbar />
        <div className="flex ">
          <div className="h-full">
            <MySide />
          </div>
          <div className="pt-[40px] w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
