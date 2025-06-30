"use client"

import { useRouter } from "next/compat/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router?.back()} className="bg-none border border-indigo-500 hover:bg-indigo-500 hover:text-white px-3.5 py-1.5 rounded-full">
      Back
    </button>
  );
};

export default BackButton;
