"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
