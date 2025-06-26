"use client";

import Loader from "@/app/components/Loader";
import { supabase } from "@/app/lib/supabaseClient";
import { Project, TechStack } from "@/app/types/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project>();
  const [projectStacks, setProjectStacks] = useState<TechStack[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProject = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("projects").select("*").eq("slug", slug).single();
    if (!error) setProject(data);

    if (data?.tech_stack_ids?.length > 0) {
      const { data: techStacks, error: techError } = await supabase
        .from("tech_stacks")
        .select("*")
        .in("id", data.tech_stack_ids);
  
      if (!techError) setProjectStacks(techStacks);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)]">
      {isLoading ? (
        <Loader />
      ) : project ? (
        <div key={project.id} className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
          <div className="md:col-span-1">
            <Image src={project.image_url} width={500} height={300} alt={project.name} className="object-cover w-full h-52"/>
            <h4 className="font-semibold mt-4 mb-1 text-2xl">Detail Project</h4>
            <p>Nama: {project.name}</p>
            <p>Tahun Pengerjaan: {project.project_year}</p>
            <p>Stack yang digunakan:</p>
            <br />
            {projectStacks ? (
              <div className="flex flex-row gap-5">
                {projectStacks.map((item) => (
                  <Image key={item.id} src={item.img_url} alt={item.name} width={50} height={50} className="w-13 h-13 object-fit" />
                ))}
              </div>
            ) : (
              <p>Tidak ada stack.</p>
            )}
          </div>
          <div className="md:col-span-2">
            <h3 className="text-5xl font-semibold">Project Breakdown</h3>
          </div>
        </div>
      ) : (
        <p className="text-center">Tidak ada detail.</p>
      )}
    </section>
  );
};

export default ProjectDetail;
