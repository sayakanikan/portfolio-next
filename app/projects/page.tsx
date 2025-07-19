"use client";
import Loader from "@/components/Loader";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { colSpanMap } from "@/utils/constants";

const Projects = () => {
  const controls = useAnimation();
  const [project, setProject] = useState<Project[]>();
  const [isLoadingProject, setIsLoadingProject] = useState<boolean>(false);

  const fetchProjects = async () => {
    setIsLoadingProject(true);
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (!error) setProject(data);
    setIsLoadingProject(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)]">
      <div className="py-10 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Semua Project</h2>

          {isLoadingProject ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {project && project.length > 0 ? (
                project.map((item, i) => {
                  const spanClass = colSpanMap[item.column_size] ?? "md:col-span-1";

                  return (
                    <motion.div key={item.id} className={spanClass} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                      <Link href={`/project/${item.slug}`}>
                        <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                          <Image src={item.image_url} sizes="auto" alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                            <p className={`text-sm font-light border rounded-full px-3 py-1 ${item.text_color == "light" ? "text-white border-white" : "text-slate-900 border-slate-900"}`}>{item.type}</p>
                            <p className={`text-sm font-semibold ${item.text_color == "light" ? "text-white" : "text-slate-900"}`}>{item.project_year}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
