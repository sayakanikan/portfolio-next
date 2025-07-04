"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Image from "next/image";
import { Article } from "../../types/types";
import { supabase } from "../../lib/supabaseClient";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const Articles = () => {
  const controls = useAnimation();
  const [article, setArticle] = useState<Article[]>();
  const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(false);

  const fetchArticles = async () => {
    setIsLoadingArticle(true);
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (!error) setArticle(data);
    setIsLoadingArticle(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)]">
      <div className="py-10 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Semua Artikel</h2>

          {isLoadingArticle ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {article && article.length > 0 ? (
                article.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="bg-white shadow-lg border border-slate-100 rounded-lg group transform transition duration-300 md:scale-105 hover:scale-105 md:hover:scale-110"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Image src={item.image_url} alt="Image Content" className="rounded-t-lg mb-4 w-full h-52 object-cover transition duration-300" width={300} height={300} />
                    <div className="px-5 pb-6">
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                      <p className="font-medium text-sm text-indigo-500 mt-1 mb-2">{new Date(item.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                      <p className="font-medium text-sm text-slate-700 mb-3">{item.description}</p>
                      <Link href={`/article/${item.id}`} className="text-md font-medium text-indigo-500">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="md:col-span-4 text-center">Tidak ada Artikel.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
