"use client"

import { useParams } from "next/navigation";
import React from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return <div>Project Detail {slug}</div>;
};

export default ProjectDetail;
