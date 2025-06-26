"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 w-12 bg-transparent border border-indigo-500 text-indigo-500 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition z-50"
    >
      ↑
    </button>
  ) : null;
}
