/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-l from-main via-third to-main mt-16">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-start mt-16">
          <div className="my-10 w-full xs:w-1/2 sm:w-1/3 md:w-1/3">
            <h5 className="text-white text-2xl font-semibold my-2 tracking-wider">
              Materi Pelajaran
            </h5>
            <Link
              href=""
              className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
            >
              Mata pelajaran 1
            </Link>
            <Link
              href=""
              className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
            >
              Mata pelajaran 2
            </Link>
            <Link
              href=""
              className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
            >
              Mata pelajaran 3
            </Link>
            <Link
              href=""
              className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
            >
              Mata pelajaran 4
            </Link>
            <Link
              href=""
              className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
            >
              Mata pelajaran 5
            </Link>
          </div>
          <div className="my-10 w-full xs:w-1/2 sm:w-1/3 md:w-1/4">
            <div>
              <h2 className="text-white text-2xl font-semibold my-2 tracking-wider">
                Tentang kami
              </h2>
              <Link
                href=""
                className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
              >
                About US
              </Link>
              <Link
                href=""
                className="block text-gray-300 hover:text-sky-300 text-base my-2.5"
              >
                Testimonial
              </Link>
            </div>
          </div>
          <div className="my-10 w-full xs:w-1/2 sm:w-1/3 lg:w-1/5">
            <h2 className="text-white text-2xl font-semibold my-2 tracking-wider">
              Kontak kami
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="h-9 w-9 -ml-0.5 -mb-1.5 text-white hover:text-sky-600"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
                    />
                  </svg>
                </a>
                <p className="text-base text-gray-200">facebook.com/user</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 text-white hover:text-sky-600"
                  >
                    <path
                      fill="currentColor"
                      d="M9.72 20.16v0c-0.8 0-1.32-0.6-1.36-1.44 0-0.16 0-5.44 0-5.48 0.040-0.8 0.6-1.4 1.36-1.4 0.24 0 0.48 0.040 0.68 0.16 0.44 0.24 5.24 2.84 5.24 2.84 0.44 0.28 0.68 0.68 0.68 1.12s-0.24 0.84-0.64 1.12c0 0-5.24 2.84-5.28 2.88-0.2 0.12-0.44 0.2-0.68 0.2zM10.040 13.68v4.52c0 0.040 0 0.080 0 0.080l4.24-2.28c0 0-3.96-2.16-4.24-2.32zM11.52 24.48c-2.44 0-5.4-0.2-7.72-0.48-2-0.24-3.12-1.28-3.44-3.16-0.24-1.24-0.36-2.96-0.36-4.84s0.12-3.6 0.32-4.84c0.32-1.88 1.44-2.92 3.44-3.16 2.32-0.28 5.28-0.48 7.72-0.48s5.4 0.2 7.72 0.48c2 0.24 3.12 1.28 3.44 3.16 0.2 1.24 0.32 2.96 0.32 4.84s-0.12 3.6-0.32 4.84c-0.32 1.88-1.44 2.92-3.44 3.16-2.28 0.28-5.24 0.48-7.68 0.48zM11.52 9.16c-2.36 0-5.24 0.16-7.48 0.44-1.48 0.2-1.88 0.88-2.040 1.84-0.2 1.2-0.32 2.8-0.32 4.56s0.12 3.36 0.32 4.52c0.16 0.96 0.6 1.64 2.040 1.84 2.24 0.28 5.12 0.44 7.48 0.44s5.24-0.16 7.48-0.44c1.48-0.2 1.88-0.88 2.040-1.84 0.2-1.16 0.32-2.76 0.32-4.52s-0.12-3.36-0.32-4.52c-0.16-0.96-0.6-1.64-2.040-1.84-2.24-0.28-5.12-0.48-7.48-0.48z"
                    ></path>
                  </svg>
                  <p className="text-base text-gray-200">youtube.com/user</p>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 text-white hover:text-sky-600"
                  >
                    <path
                      d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <p className="text-base text-gray-200">user@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-10 w-10 -ml-1 -mr-1 text-white hover:text-sky-600"
                  >
                    <path
                      d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"
                      fill="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="text-base text-gray-200">084564566456</p>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-200 py-2 border-t my-10 pt-4">
          © PT Rizki Edukasi Bangsa, 2023.
        </p>
      </div>
    </footer>
  );
}
