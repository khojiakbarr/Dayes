import React from "react";

export default function KinoCard() {
  return (
    <div className="rounded-[24px] p-[10px] KinoCard">
      <div className="w-[280px] h-[200px] rounded-[16px] overflow-hidden">
        <img
          className="w-full"
          src="https://russian.eurasianet.org/sites/default/files/styles/article/public/2023-02/tms21wrovnpjs5r9it7ucjokjqeuq7ys.jpg?itok=xedAYBgE"
          alt="Kino"
        />
      </div>
      <p className=" w-[270px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur{" "}
      </p>
    </div>
  );
}
