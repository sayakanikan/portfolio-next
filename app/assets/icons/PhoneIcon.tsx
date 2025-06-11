import React from "react";
import { IconsProp } from "./IconsProp";

const PhoneIcon = ({ className }: IconsProp) => {
  return (
    <svg className={`w-4 h-4 ${className ? className : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75a.75.75 0 01.75-.75h2.37a.75.75 0 01.743.648l.401 3.007a.75.75 0 01-.41.757l-1.38.69a11.25 11.25 0 005.742 5.742l.69-1.38a.75.75 0 01.757-.41l3.006.401a.75.75 0 01.648.743v2.37a.75.75 0 01-.75.75H17.25c-8.008 0-14.25-6.242-14.25-14.25V6.75z"
      />
    </svg>
  );
};

export default PhoneIcon;
