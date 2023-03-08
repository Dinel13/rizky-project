/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import Link from "next/link";
import CardVideo from "components/video/CardVideo";

const Header = () => {
  const [isOpnVid, setIsOpnVid] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 bg-gradient-to-r from-main to-third via-main">
      <div className="flex flex-wrap px-2 md:px-4 lg:px-6 py-3 items-center gap-2 w-full">
        <Link
          href=""
          className="flex title-font font-medium items-center text-white"
        >
          {/* <div className="relative w-10 h-9">
            <Image
              src="/ruki.jpeg"
              width={20}
              height={17}
              layout="responsive"
              alt="logo"
              className="rounded"
            />
          </div> */}
          <div className="bg-bone rounded-r-xl">
            <p className="pl-2 pr-2.5 py-1 leading-10 text-5xl font-black text-third ">R</p>
          </div>
          <span className="text-2xl font-semibold tracking-widest ml-2">
            RIZKI
          </span>
        </Link>
        <nav className="ml-auto mr-auto flex flex-wrap items-center text-lg justify-center gap-x-4 gap-y-1 font-alegreya font-semibold tracking-wider text-white">
          <button
            href="Video"
            className="hover:text-gray-100 hover:font-bold"
            onClick={() => setIsOpnVid((p) => !p)}
          >
            Video pembelajaran
          </button>
          <Link href="Pdf" className="hover:text-gray-100 hover:font-bold">
            File pembelajaran
          </Link>
        </nav>
      </div>

      {isOpnVid && (
        <div className="border-second border-t-2 px-2 md:px-4 lg:px-6 py-6 flex justify-center gap-5 flex-wrap">
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
        </div>
      )}
    </header>
  );
};

export default Header;
