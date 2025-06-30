"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min((scrollTop / docHeight) * 100, 100);

      setVisible(scrollTop > 400);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-7 right-7 p-3 w-12 h-12 rounded-full shadow-lg border border-indigo-500 text-indigo-500 hover:text-white transition z-50 overflow-hidden"
      style={{
        background: `conic-gradient(#6366f1 ${scrollPercent}%, transparent ${scrollPercent}%)`
      }}
    >
      ↑
    </button>
  ) : null;
}
