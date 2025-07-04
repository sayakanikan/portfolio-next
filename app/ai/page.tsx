"use client";

import React from "react";
import Loader from "../../components/Loader";
import BackButton from "../../components/BackButton";

const AI = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center font-mono">
      My AI is still learing about me...
      <Loader />
      <BackButton />
    </div>
  );
};

export default AI;
