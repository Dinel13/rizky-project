/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import Link from "next/link";

import CardVideoNav from "components/video/CardVideoNav";
import { mataPelajaran } from "utils/constant/mata-pelajaran";

const HeaderAdmin = () => {
  const [isOpnVid, setIsOpnVid] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 bg-gradient-to-r from-main to-third via-main">
      <div className="flex flex-wrap px-2 md:px-4 lg:px-6 py-3 items-center gap-2 w-full">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white -my-1.5"
        >
          <div className="bg-bone rounded-tr-xl">
            <p className="pl-1 pr-1.5 leading-9 text-4xl font-black text-third ">
              R
            </p>
          </div>
          <span className="text-2xl font-semibold tracking-widest ml-1 pt-4">
            RIZKI
          </span>
        </Link>
        <nav className=" ml-auto mr-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-1 font-semibold tracking-wide text-white">
          <button
            href="Video"
            className="hover:text-gray-300 hover:font-bold flex gap-0.5 items-center"
            onClick={() => setIsOpnVid((p) => !p)}
          >
            <p className="tracking-wide">Video</p>
            {isOpnVid ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <Link
            href="/admin/materi"
            className="hover:text-gray-300 hover:font-bold"
          >
            Materi
          </Link>
          <Link
            href="/admin/testimonial"
            className="hover:text-gray-300 hover:font-bold"
          >
            Testimonial
          </Link>
        </nav>
      </div>

      {isOpnVid && (
        <div className="border-second border-t-2 px-2 md:px-4 lg:px-6 py-6 flex justify-center gap-4 flex-wrap">
          {mataPelajaran.map((i) => (
            <CardVideoNav key={i.url} data={{ ...i, url: "/admin" + i.url }} />
          ))}
        </div>
      )}
    </header>
  );
};

export default HeaderAdmin;
