"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const Article = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>Article Detail Tes {id}</div>
  )
}

export default Article