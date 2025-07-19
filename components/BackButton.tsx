"use client"

import { useRouter } from "next/compat/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router?.back()} className="bg-none border border-black hover:bg-indigo-500 hover:border-indigo-500 text-black hover:text-white px-4 pt-1 pb-1.5 rounded-full">
      ←
    </button>
  );
};

export default BackButton;
