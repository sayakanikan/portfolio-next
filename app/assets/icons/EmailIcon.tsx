import React from "react";
import { IconsProp } from "./IconsProp";

const EmailIcon = ({ className }: IconsProp) => {
  return (
    <svg className={`w-4 h-4 ${className ? className : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.375L2.25 6.75" />
    </svg>
  );
};

export default EmailIcon;
