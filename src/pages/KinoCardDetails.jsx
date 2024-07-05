import React from "react";

import "../components/styles.css";

export default function KinoCardDetails() {
  return (
    <div className="flex flex-col">
      <div className=" w-full  relative rounded-[20px] primiyerCard p-[20px] flex justify-between flex-wrap gap-[10px]">
        <div className="bg-[rgb(16,16,16)] flex flex-col md:w-[542px] p-[13px] rounded-tl-[30px] rounded-br-[30px] ">
          <span className="KinoText">
            Nomi: <span>Content</span>{" "}
          </span>
          <span className="KinoText">
            Janr: <span>Content</span>{" "}
          </span>
          <span className="KinoText">
            Davlat: <span>Content</span>
          </span>
          <span className="KinoText">
            Tili: <span>Content</span>{" "}
          </span>
          <span className="KinoText">
            Yili: <span>Content</span>{" "}
          </span>
        </div>
        <div className="bg-[rgb(16,16,16)] flex flex-col md:w-[542px] p-[13px] rounded-tr-[30px] rounded-bl-[30px]">
          <img
            className="w-full"
            src="https://russian.eurasianet.org/sites/default/files/styles/article/public/2023-02/tms21wrovnpjs5r9it7ucjokjqeuq7ys.jpg?itok=xedAYBgE"
            alt=""
          />
        </div>
      </div>
      <div className="flex max-w-[915px] justify-between mt-[45px] border-[1px] border-[#00f0ff] p-[10px]">
        <h4 className="KinoText">ONLINE KO’RISH</h4>
        <h4 className="KinoText">TREYLER </h4>
        <h4 className="KinoText">TELEGRAM ORQALI YUKLASH </h4>
      </div>
      <div>
        <div className="p-[10px]  border-[1px] border-[#00f0ff] ">
          <iframe
            className="w-full"
            height="400"
            src="https://www.youtube.com/embed/HbxNIvbLA8g?si=7kq1DBX5oAoKDeUV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
