/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";

export default function CardVideoNav({ data }) {
  return (
    <Link
      href={data.url}
      className="bg-gradient-to-bl from-purple-800 to-pink-700 rounded-xl py-4 px-6 w-52 hover:scale-105"
    >
      <h5 className="text-base text-white">{data.judul}</h5>
      <p className="text-gray-300 leading-5 mt-2">{data.desc}</p>
    </Link>
  );
}
