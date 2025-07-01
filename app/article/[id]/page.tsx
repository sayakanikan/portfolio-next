"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const Article = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="min-h-[calc(100vh-6rem)] pt-10">
      <div>Article Detail Tes {id}</div>
    </section>
  )
}

export default Article