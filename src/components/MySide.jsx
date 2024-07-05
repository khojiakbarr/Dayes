import React from "react";
import { Link } from "react-router-dom";
import kino from "../assets/images/icon_kino.png";
import serial from "../assets/images/icon_serial.png";
import multik from "../assets/images/icon_multik.png";
import "./styles.css";

export default function MySide() {
  return (
    <div className="pt-[40px] pr-[15px]">
      <div className="flex flex-col gap-[10px]">
        <Link to={"/"}>
          <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] sideBarCard flex items-center justify-center">
            <img src={kino} alt="Kino" />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] sideBarCard flex items-center justify-center">
            <img width={47} src={serial} alt="serial" />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] sideBarCard flex items-center justify-center">
            <img src={multik} alt="multik" />
          </div>
        </Link>
      </div>
    </div>
  );
}
