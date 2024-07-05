import React from "react";
import "./styles.css";

export default function Button({ content, className }) {
  return (
    <button
      className={`borderColor rounded-[37px] px-[10px] py-[3px] md:px-[20px] md:py-[7px] whitespace-nowrap ${className}`}
    >
      {content}
    </button>
  );
}
