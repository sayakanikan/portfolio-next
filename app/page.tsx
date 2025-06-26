"use client";

import JumbotronImage from "./assets/images/man3.png";
import Image from "next/image";
import GithubIcon from "./assets/icons/GithubIcon";
import LinkedinIcon from "./assets/icons/LinkedinIcon";
import ScrollCountUp from "./components/ScrollUp";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { supabase } from "./lib/supabaseClient";
import { Article, Experience, Project, TechStack } from "./types/types";
import ScrollToTopButton from "./components/ScrollOnTopButton";
import FadeInOnScroll from "./components/FadeInOnScroll";
import Loader from "./components/Loader";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<Project[]>();
  const [education, setEducation] = useState<Experience[]>();
  const [experience, setExperience] = useState<Experience[]>();
  const [article, setArticle] = useState<Article[]>();
  const [techStack, setTechStack] = useState<TechStack[]>();
  const [isVisible, setIsVisible] = useState(true);
  const [isLoadingProject, setIsLoadingProject] = useState<boolean>(false);
  const [isLoadingEducation, setIsLoadingEducation] = useState<boolean>(false);
  const [isLoadingExperience, setIsLoadingExperience] = useState<boolean>(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(false);

  const colSpanMap: { [key: number]: string } = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  };

  const fetchProject = async () => {
    setIsLoadingProject(true);
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (!error) setProject(data);
    setIsLoadingProject(false);
  };

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

  const fetchArticles = async () => {
    setIsLoadingArticle(true);
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (!error) setArticle(data);
    setIsLoadingArticle(false);
  };

  const fetchTechStack = async () => {
    const { data, error } = await supabase.from("tech_stacks").select("*").eq("is_show", true).order("sort", { ascending: true });
    if (!error) setTechStack(data);
  };

  useEffect(() => {
    fetchProject();
    fetchExperience();
    fetchArticles();
    fetchEducation();
    fetchTechStack();

    const container = containerRef.current;
    if (!container) return;

    let observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isVisible) return;

    let animationFrame: number;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll); // panggil terus menerus
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <>
      {/* Blob */}
      <div className="absolute top-[1400px] -left-52 xl:left-52 w-[800px] xl:w-[1000px] h-[800px] xl:h-[1000px] bg-[linear-gradient(to_bottom_right,_#6B21A8,_#EC4899,_#6366F1,_#38BDF8,_#22D3EE)] opacity-30 blur-3xl rounded-full pointer-events-none z-0 animate-[blob-move_10s_infinite]" />

      {/* Beranda */}
      <section className="mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:ms-10 xl:ms-0">
          <h3 className="text-xl md:text-2xl font-normal mb-2">
            Halo semua <span className="inline-block">👋🏻</span>, saya
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Irfansyah</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Saya seorang <span className="text-indigo-500">Software Engineer</span>
          </h2>

          {/* Download CV */}
          <a href="https://dkscluxzlfvwhvgacxql.supabase.co/storage/v1/object/public/portfolio//Irfansyah-resume_compressed.pdf" className="w-full sm:w-40 text-center bg-transparent border border-indigo-500 text-black font-medium px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-105">
            Get My CV
          </a>

          {/* Sosial Media */}
          <div className="mt-10 sm:mt-16 flex gap-4 justify-center lg:justify-start">
            <a href="https://github.com/sayakanikan" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-9 h-9 text-slate-400 hover:text-indigo-500 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/irfannsyah/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-9 h-9 ms-2 text-slate-400 hover:text-indigo-500 transition-all" />
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-end">
          <Image src={JumbotronImage} alt="Jumbotron Image" width={481} height={481} className="max-w-[80%] sm:max-w-xs lg:max-w-lg h-auto" priority />
        </div>
      </section>

      {/* Tentang Saya */}
      <section className="pt-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Tentang Saya</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Saya adalah seorang <span className="font-semibold">Software Engineer</span> yang memiliki minat dalam pengembangan web dan aplikasi. Saat ini saya fokus pada teknologi seperti <span className="text-indigo-500">JavaScript</span>
            , <span className="text-indigo-500">React</span>, dan <span className="text-indigo-500">Next.js</span>. Saya suka membangun antarmuka yang bersih dan responsif serta selalu berusaha belajar hal-hal baru di dunia teknologi.
          </p>
        </div>
      </section>

      {/* Statistic */}
      <section className="pt-20 pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <ScrollCountUp end={3405} duration={1.5} suffix="+" className="text-3xl font-semibold text-indigo-500" />
              <p className="text-xl font-medium">Hours of Work and Research</p>
            </div>
            <div className="flex flex-col">
              <ScrollCountUp end={10} duration={1.5} suffix="+" className="text-3xl font-semibold text-indigo-500" />
              <p className="text-xl font-medium">Projects Done</p>
            </div>
            <div className="flex flex-col">
              <ScrollCountUp end={5} duration={1.5} suffix="+" className="text-3xl font-semibold text-indigo-500" />
              <p className="text-xl font-medium">Programming languages & Frameworks</p>
            </div>
            <div className="flex flex-col">
              <ScrollCountUp end={2} duration={1.5} suffix="+" className="text-3xl font-semibold text-indigo-500" />
              <p className="text-xl font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pendidikan & Pengalaman */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Pendidikan dan Pengalaman</h2>
          </FadeInOnScroll>

          {isLoadingEducation || isLoadingExperience ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Pendidikan */}
              {education ? (
                <FadeInOnScroll delay={0.3}>
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
                </FadeInOnScroll>
              ) : (
                <p className="text-center">Tidak ada data edukasi.</p>
              )}

              {/* PENGALAMAN */}
              {experience ? (
                <FadeInOnScroll delay={0.5}>
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
                </FadeInOnScroll>
              ) : (
                <p className="text-center">Tidak ada data pengalaman.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project */}
      {isLoadingProject ? (
        <Loader />
      ) : project ? (
        <FadeInOnScroll>
          <section className="py-24 px-4 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Featured Project</h2>

              <FadeInOnScroll delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.map((item, i) => {
                    const spanClass = colSpanMap[item.column_size] ?? "md:col-span-1";

                    return (
                      <FadeInOnScroll key={item.id} delay={i * 0.1}>
                        <div className={spanClass}>
                          <Link href={`/project/${item.slug}`}>
                            <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                              <Image src={item.image_url} alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                              <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                                <p className={`text-sm font-light border rounded-full px-3 py-1 ${item.text_color == "light" ? "text-white border-white" : "text-slate-900 border-slate-900"}`}>{item.type}</p>
                                <p className={`text-sm font-semibold ${item.text_color == "light" ? "text-white" : "text-slate-900"}`}>{item.project_year}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </FadeInOnScroll>
                    );
                  })}
                </div>
              </FadeInOnScroll>
            </div>
          </section>
        </FadeInOnScroll>
      ) : (
        <p className="text-center">Tidak ada data projek.</p>
      )}

      {/* Tech Stack */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto text-center">
          {techStack && techStack.length > 0 ? (
            <div className="w-full overflow-hidden">
              <div ref={containerRef} className="flex no-scrollbar whitespace-nowrap" style={{ scrollBehavior: "auto" }}>
                <div className="w-full inline-flex flex-nowrap overflow-hidden">
                  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {[...techStack, ...techStack].map((item, index) => (
                      <li key={index}>
                        <Image src={item.img_url} width={125} height={125} alt={item.name}></Image>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {[...techStack, ...techStack].map((item, index) => (
                      <li key={index}>
                        <Image src={item.img_url} width={125} height={125} alt={item.name}></Image>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-slate-600">Tidak ada data tech stack.</p>
          )}
        </div>
      </section>

      {/* Artikel */}
      <FadeInOnScroll>
        <section className="py-24 px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Artikel Terbaru</h2>

            {isLoadingArticle ? (
              <Loader />
            ) : (
              <FadeInOnScroll delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {article && article.length > 0 ? (
                    article.map((item, i) => (
                      <FadeInOnScroll key={item.id} delay={i * 0.1}>
                        <div key={item.id} className="bg-white shadow-lg border border-slate-100 rounded-lg group transform transition duration-300 md:scale-105 hover:scale-105 md:hover:scale-110">
                          <Image src={item.image_url} alt="Image Content" className="rounded-t-lg mb-4 w-full h-52 object-cover transition duration-300" width={300} height={300} />
                          <div className="px-5 pb-6">
                            <h3 className="font-semibold text-xl">{item.title}</h3>
                            <p className="font-medium text-sm text-indigo-500 mt-1 mb-2">{new Date(item.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                            <p className="font-medium text-sm text-slate-700 mb-3">{item.description}</p>
                            <Link href={`/article/${item.id}`} className="text-md font-medium text-indigo-500">
                              Baca Selengkapnya
                            </Link>
                          </div>
                        </div>
                      </FadeInOnScroll>
                    ))
                  ) : (
                    <p className="md:col-span-4 text-center">Tidak ada Artikel.</p>
                  )}
                </div>
              </FadeInOnScroll>
            )}
          </div>
        </section>
      </FadeInOnScroll>
      <ScrollToTopButton />
    </>
  );
}
