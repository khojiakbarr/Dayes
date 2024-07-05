import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import tg from "../assets/images/icon_telegram.png";
import doc from "../assets/images/icon_docs.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-[20px]">
        <Link to={"/"} className="w-[100px]">
          <img src={logo} alt="logo Dayes" />
        </Link>
        <div className="flex md:gap-[10px] gap-[7px]">
          <Button content={"KIRISH"} className={"text-[12px] "} />
          <Button content={"RO'YXATDAN O'TISH"} className={"text-[12px]"} />
        </div>
      </nav>
      <div>
        <input
          type="text"
          className=" bg-transparent border-[1px] border-[#00f0ff] w-full md:py-[6px] py-[4px] text-[#00f0ff] px-[5px] outline-none placeholder:text-[#00f0ff] rounded"
          placeholder="QIDIRISH..."
        />
      </div>
      <div className="flex justify-end mt-[10px] gap-[10px]">
        <div className="py-[5px] px-[10px] border-[1px] border-[#00f0ff] rounded-[30px] flex items-center justify-center">
          <img src={tg} alt="telegram" />
        </div>
        <div className="py-[5px] px-[10px] border-[1px] border-[#00f0ff] rounded-[30px] flex items-center justify-center">
          <img src={doc} alt="doc" />
        </div>
      </div>
    </header>
  );
}
