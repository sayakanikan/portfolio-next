import React from "react";

const LinkedinIcon = ({className}: IconsProp) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${className ? className : ''}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5v15H0v-15zM7.4 8.98h4.8v2.03h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66v8.01h-5v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.76v7.21h-5v-15z" />
      </svg>
    </div>
  );
};

export default LinkedinIcon;
