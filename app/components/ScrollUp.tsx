"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type ScrollCountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function ScrollCountUp({ end, duration = 1.5, suffix = "", className }: ScrollCountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div ref={ref}>{isVisible ? <CountUp end={end} duration={duration} suffix={suffix} className={className} /> : <span className={className}>0{suffix}</span>}</div>;
}
