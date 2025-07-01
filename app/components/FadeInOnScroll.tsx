"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  triggerHeight?: number;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  triggerHeight = 0
}: FadeInOnScrollProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > triggerHeight && inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    if (inView) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, inView, triggerHeight]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
