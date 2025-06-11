import React from "react";
import { IconsProp } from "./IconsProp";

const TwitterIcon = ({ className }: IconsProp) => {
  return (
    <svg className={`w-4 h-4 ${className ? className : ""}`} viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M715.6 558.6L1145.2 0H1040.4L672.7 488.7L381.4 0H0L456.4 725.7L0 1227H104.8L494.4 701.4L799.6 1227H1181L715.6 558.6ZM540.4 635.1L508.1 583.2L163.2 90.5H343L615.5 532.6L647.8 584.5L1003.3 1129.8H825.5L540.4 635.1Z" />
    </svg>
  );
};

export default TwitterIcon;
