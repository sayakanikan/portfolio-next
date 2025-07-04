"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import BackButton from "../../components/BackButton";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Experience } from "../../types/types";
import { supabase } from "../../lib/supabaseClient";

const Experiences = () => {
  const [education, setEducation] = useState<Experience[]>();
  const [experience, setExperience] = useState<Experience[]>();
  const [isLoadingEducation, setIsLoadingEducation] = useState<boolean>(false);
  const [isLoadingExperience, setIsLoadingExperience] = useState<boolean>(false);

  const fetchExperience = async () => {
    setIsLoadingExperience(true);
    const { data, error } = await supabase.from("experiences").select("*").eq("type", "experience");
    if (!error) setExperience(data);
    setIsLoadingExperience(false);
  };

  const fetchEducation = async () => {
    setIsLoadingEducation(true);
    const { data, error } = await supabase.from("experiences").select("*").eq("type", "education");
    if (!error) setEducation(data);
    setIsLoadingEducation(false);
  };

  useEffect(() => {
    fetchExperience();
    fetchEducation();
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)]">
      <div className="py-10 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Pendidikan dan Pengalaman</h2>

          {isLoadingEducation || isLoadingExperience ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Pendidikan */}
              {education ? (
                <div>
                  <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Pendidikan</h3>
                  <ol className="relative flex flex-col gap-10 border-s border-indigo-500">
                    {education.map((item) => (
                      <li key={item.id} className="ms-4">
                        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                        <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                          <time className="block mb-1 text-sm font-medium text-gray-400">{item.date_start_end}</time>
                          <h4 className="text-lg font-semibold">
                            {item.position_name} - {item.company_name}
                          </h4>
                          <p className="text-base text-gray-500 group-hover:text-white">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <p className="text-center">Tidak ada data edukasi.</p>
              )}

              {/* PENGALAMAN */}
              {experience ? (
                <div>
                  <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Pengalaman</h3>
                  <ol className="relative flex flex-col gap-10 border-s border-indigo-500">
                    {experience.map((item) => (
                      <li key={item.id} className="ms-4">
                        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                        <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                          <time className="block mb-1 text-sm font-medium text-gray-400">{item.date_start_end}</time>
                          <h4 className="text-lg font-semibold">
                            {item.position_name} - {item.company_name}
                          </h4>
                          <p className="text-base text-gray-500 group-hover:text-white">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <p className="text-center">Tidak ada data pengalaman.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
