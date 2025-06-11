"use client"

import JumbotronImage from "./assets/images/man3.png";
import EventeerCard from "./assets/images/eventeer.jpg";
import AmoebaBrandCard from "./assets/images/amoeba2.png";
import AherCard from "./assets/images/aher.png";
import MyPertaminaCard from "./assets/images/my_ptm.jpg";
import PtkdnCard from "./assets/images/ptkdn.png";
import Image from "next/image";
import GithubIcon from "./assets/icons/GithubIcon";
import LinkedinIcon from "./assets/icons/LinkedinIcon";
import ScrollCountUp from "./components/ScrollUp";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabaseClient";

export default function Home() {
  const [project, setProject] = useState<any[]>();

  const fetchData = async () => {
    const { data, error } = await supabase.from('projects').select('*');
    if (!error) setProject(data);
    console.log("Project data: " + data + error);
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <>
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
          <a href="/cv.pdf" className="w-full sm:w-40 text-center bg-transparent border border-indigo-500 text-black font-medium px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition">
            Download CV
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
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Pendidikan dan Pengalaman</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pendidikan */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Pendidikan</h3>
              <ol className="relative flex flex-col gap-10 border-s border-indigo-500">
                <li className="ms-4">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                  <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                    <time className="block mb-1 text-sm font-medium text-gray-400">2019 - 2023</time>
                    <h4 className="text-lg font-semibold">S1 Teknik Informatika - Universitas Dian Nuswantoro</h4>
                    <p className="text-base text-gray-500 group-hover:text-white">Konsentrasi di bidang rekayasa perangkat lunak dan pengembangan aplikasi web.</p>
                  </div>
                </li>
                {/* <li className="ms-4">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                  <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                    <time className="block mb-1 text-sm font-medium text-gray-400">2021</time>
                    <h4 className="text-lg font-semibold">Bootcamp Full-Stack Developer - Digital Talent</h4>
                    <p className="text-base text-gray-500 group-hover:text-white">Pelatihan intensif membangun aplikasi end-to-end menggunakan JavaScript, React, dan Node.js.</p>
                  </div>
                </li> */}
              </ol>
            </div>

            {/* PENGALAMAN */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Pengalaman</h3>
              <ol className="relative flex flex-col gap-10 border-s border-indigo-500">
                <li className="ms-4">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                  <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                    <time className="block mb-1 text-sm font-medium text-gray-400">Feb 2025 - Sekarang</time>
                    <h4 className="text-lg font-semibold">Software Developer - PT Asta Berkah Autonomous</h4>
                    <p className="text-base text-gray-500 group-hover:text-white">Membuat dan mengembangkan aplikasi website dari produk perusahaan menggunakan Laravel, dan Next Js / React Js</p>
                  </div>
                </li>
                <li className="ms-4">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                  <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                    <time className="block mb-1 text-sm font-medium text-gray-400">Mar 2024 - Sekarang</time>
                    <h4 className="text-lg font-semibold">Freelance Backend Developer - PT Dynamic Talenta Navigator</h4>
                    <p className="text-base text-gray-500 group-hover:text-white">Mengembangkan berbagai aplikasi backend menggunakan Laravel sesuai dengan task yang diberikan.</p>
                  </div>
                </li>
                <li className="ms-4">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -start-2 border border-indigo-500"></div>
                  <div className="bg-white border border-slate-200 px-5 py-4 shadow-md rounded-xl">
                    <time className="block mb-1 text-sm font-medium text-gray-400">Sep 2023 - Jan 2025</time>
                    <h4 className="text-lg font-semibold">Software Engineer - PT Akhdani Reka Solusi</h4>
                    <p className="text-base text-gray-500 group-hover:text-white">Mengembangkan project aplikasi website dari klien menggunakan Laravel/Springboot/.Net, dan berpengalaman integrasi service dengan pihak ketiga.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Featured Project</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-1">
              <Link href={"/project/my_ptm"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={MyPertaminaCard} alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-white text-sm font-light border border-white rounded-full px-3 py-1"></p>
                    <p className="text-white text-sm font-semibold">2025</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-2">
              <Link href={"/project/tkdn"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={PtkdnCard} alt="Gallery" className="object-cover transition-transform duration-300 group-hover:scale-105 mx-auto my-18 md:my-4" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-slate-900 text-sm font-light border border-slate-900 rounded-full px-3 py-1">Asta Parking</p>
                    <p className="text-slate-900 text-sm font-semibold">2025</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-2">
              <Link href={"/project/tkdn"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={PtkdnCard} alt="Gallery" className="object-cover transition-transform duration-300 group-hover:scale-105 mx-auto my-18 md:my-4" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-slate-900 text-sm font-light border border-slate-900 rounded-full px-3 py-1">TKDN Management</p>
                    <p className="text-slate-900 text-sm font-semibold">2025</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-1">
              <Link href={"/project/my_ptm"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={MyPertaminaCard} alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-white text-sm font-light border border-white rounded-full px-3 py-1">E-Commerce</p>
                    <p className="text-white text-sm font-semibold">2025</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-1">
              <Link href={"/project/aher"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={AherCard} alt="Gallery" fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-white text-sm font-light border border-white rounded-full px-3 py-1">Akhdani Human Resource</p>
                    <p className="text-white text-sm font-semibold">2024</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-1">
              <Link href={"/project/amoeba"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={AmoebaBrandCard} alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-slate-900 text-sm font-light border border-slate-900 rounded-full px-3 py-1">Brand Digital Amoeba</p>
                    <p className="text-slate-900 text-sm font-semibold">2023</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-3 md:col-span-1">
              <Link href={"/project/eventeer"}>
                <div className="h-64 relative group overflow-hidden rounded-lg border border-slate-200">
                  <Image src={EventeerCard} alt="Gallery" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end justify-between transition-opacity duration-300 rounded-lg cursor-pointer px-5 pb-4 pointer-events-none">
                    <p className="text-white text-sm font-light border border-white rounded-full px-3 py-1">Event Management Platform</p>
                    <p className="text-white text-sm font-semibold">2023</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="bg-white shadow-lg border border-slate-100 rounded-lg group transform transition duration-300 md:scale-105 hover:scale-105">
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Image Content" className="rounded-t-lg mb-4 w-full h-52 object-cover transition duration-300" />
              <div className="px-5 pb-6">
                <h3 className="font-semibold text-xl">Card Title</h3>
                <p className="font-medium text-sm text-indigo-500 mt-1 mb-2">2 June 2025</p>
                <p className="font-medium text-sm text-slate-700 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quas odio optio odit, sed unde.</p>
                <Link href="/article/1" className="text-md font-medium text-indigo-500">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
