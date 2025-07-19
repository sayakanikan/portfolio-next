"use client";

import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import ScrollToTopButton from "@/components/ScrollOnTopButton";
import { supabase } from "@/lib/supabaseClient";
import { Project, TechStack } from "@/types/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <motion.div key={project.id} className="grid grid-cols-1 md:grid-cols-3 md:gap-5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="relative md:col-span-1 h-full">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
              <Image src={project.image_url} width={500} height={300} alt={project.name} className="object-cover w-full h-52 transition-transform duration-300 group-hover:scale-105 rounded-xl shadow-lg" />
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
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
                    {projectStacks.map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                        <Image src={item.img_url} alt={item.name} width={60} height={50} className="h-13 object-contain" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p>Tidak ada stack.</p>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div className="md:col-span-2 px-5 h-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex flex-row gap-2 items-center">
              {/* <motion.div className="" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <BackButton />
              </motion.div> */}
              <motion.h3 className="text-4xl font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                Overview
              </motion.h3>
            </div>
            <motion.div className="mt-4 prose text-justify max-w-full" dangerouslySetInnerHTML={{ __html: project.description }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            {project.live_url && (
              <motion.div className="text-lg mt-10 prose max-w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <span className="font-normal">Live project bisa dilihat di link berikut: </span>
                <a href={project.live_url} className="underline text-black hover:text-black/70 font-semibold">
                  {project.live_url}
                </a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <Loader />
      )}

      <ScrollToTopButton />
    </section>
  );
};

export default ProjectDetail;
