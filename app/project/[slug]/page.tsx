"use client";

import BackButton from "@/app/components/BackButton";
import Loader from "@/app/components/Loader";
import ScrollToTopButton from "@/app/components/ScrollOnTopButton";
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
      const { data: techStacks, error: techError } = await supabase.from("tech_stacks").select("*").in("id", data.tech_stack_ids);

      if (!techError) setProjectStacks(techStacks);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)] pt-10">
      {isLoading ? (
        <Loader />
      ) : project ? (
        <div key={project.id} className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
          <div className="md:col-span-1">
            <Image src={project.image_url} width={500} height={300} alt={project.name} className="object-cover w-full h-52 transition-transform duration-300 group-hover:scale-105 rounded-xl shadow-lg" />

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 mt-5">
              <div className="flex flex-col">
                <p className="text-slate-500 text-lg font-extralight">Nama </p>
                <p className="font-semibold text-lg">{project.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-slate-500 text-lg font-extralight">Tahun Pengerjaan</p>
                <p className="font-semibold text-lg">{project.project_year}</p>
              </div>
              <div className="col-span-2 flex flex-col">
                <p className="text-slate-500 text-lg font-extralight">Klien</p>
                <p className="font-semibold text-lg">{project.client}</p>
              </div>
              <div className="col-span-2 flex flex-col">
                {projectStacks ? (
                  <div className="flex flex-row gap-3">
                    {projectStacks.map((item) => (
                      <Image key={item.id} src={item.img_url} alt={item.name} width={60} height={50} className="h-13 object-contain" />
                    ))}
                  </div>
                ) : (
                  <p>Tidak ada stack.</p>
                )}
              </div>
            </div>
            <div className="mt-48 w-full grid">
              <BackButton />
            </div>
          </div>
          <div className="md:col-span-2 px-5">
            <h3 className="text-4xl font-semibold">Project Overview</h3>
            <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: project.description }} ></div>
            
          </div>
        </div>
      ) : (
        <Loader />
      )}

      <ScrollToTopButton />
    </section>
  );
};

export default ProjectDetail;
