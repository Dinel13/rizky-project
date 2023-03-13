import withAdmin from "@hoc/withAdmin";
import React, { useEffect, useState } from "react";

function Materi() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const data = {
    id: "21312",
    judul: "Materi satu pertama",
    durasi: "20:60 menit",
    mapel: "Mata pelajaran satu",
    urutan: "1",
    deskripsi: "Materi satu pertama asdas adsdas d asd as d as d as d  dasdasd",
    video: "https://www.youtube.com/watch?v=aKBq2YSN4GI",
  };

  return (
    <div className="flex wrapper items-start relative lg:-mt-4">
      <div className="flex flex-col flex-1 relative">
        <div
          className={`${
            isSidebarHidden && "rounded-r-2xl"
          } w-full mx-auto h-screen border-2 rounded-l-2xl border-third`}
        >
          <iframe
            src="http://localhost:3000/pdf/test.pdf"
            width="100%"
            height="100%"
            className={`${
              isSidebarHidden && "rounded-r-xl"
            } rounded-l-xl pdf-iframe`}
          ></iframe>
        </div>
        {isSidebarHidden && (
          <button
            className="btn-main -mr-6 md:-mr-8 mt-12 absolute bg-third bg-opacity-90 right-0 top-0 py-1 pl-3 pr-4 font-semibold z-10 flex items-center gap-2"
            onClick={toggleSidebar}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Lihat materi</p>
          </button>
        )}
      </div>
      <div
        className={`flex flex-col w-64 sm:w-72 md:w-80 bg-third rounded-r-2xl md:relative h-screen ${
          isSidebarHidden ? "hidden" : ""
        }`}
      >
        <div className="">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex-grow py-6 pl-5 text-gray-100 text-lg font-medium">
              <p>Pelajaran satu</p>
            </div>
            <button
              className="flex-none items-center justify-center p-0.5"
              onClick={toggleSidebar}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 -m-2 text-gray-200"
              >
                <path
                  d="M9.16992 14.83L14.8299 9.17004"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.8299 14.83L9.16992 9.17004"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="px-5">
            <div className="-mt-2">
              <div className="flex gap-2 items-center text-gray-300 text-xs">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                >
                  <path
                    d="M18 34.125C9.105 34.125 1.875 26.895 1.875 18C1.875 9.105 9.105 1.875 18 1.875C26.895 1.875 34.125 9.105 34.125 18C34.125 26.895 26.895 34.125 18 34.125ZM18 4.125C10.35 4.125 4.125 10.35 4.125 18C4.125 25.65 10.35 31.875 18 31.875C25.65 31.875 31.875 25.65 31.875 18C31.875 10.35 25.65 4.125 18 4.125Z"
                    fill="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M23.5659 23.895C23.3709 23.895 23.1759 23.85 22.9959 23.73L18.3459 20.955C17.1909 20.265 16.3359 18.75 16.3359 17.415V11.265C16.3359 10.65 16.8459 10.14 17.4609 10.14C18.0759 10.14 18.5859 10.65 18.5859 11.265V17.415C18.5859 17.955 19.0359 18.75 19.5009 19.02L24.1509 21.795C24.6909 22.11 24.8559 22.8 24.5409 23.34C24.3159 23.7 23.9409 23.895 23.5659 23.895Z"
                    fill="currentColor"
                  />
                </svg>
                <p>Total Durasi Video 23:09 menit</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300 mt-2 text-xs">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                >
                  <path
                    d="M23.7141 30.27C23.3241 30.27 22.9191 30.255 22.4841 30.21C21.7041 30.15 20.8191 30 19.9041 29.775L17.3841 29.175C10.4691 27.54 8.20413 23.88 9.82413 16.98L11.2941 10.695C11.6241 9.27 12.0141 8.115 12.4941 7.155C15.0741 1.83 20.0091 2.31 23.5191 3.135L26.0241 3.72C29.5341 4.545 31.7541 5.85 32.9991 7.845C34.2291 9.84 34.4241 12.405 33.5991 15.915L32.1291 22.185C30.8391 27.675 28.1541 30.27 23.7141 30.27ZM19.6791 4.875C17.1741 4.875 15.5841 5.91 14.5191 8.13C14.1291 8.94 13.7841 9.945 13.4841 11.205L12.0141 17.49C10.6791 23.16 12.2241 25.635 17.8941 26.985L20.4141 27.585C21.2241 27.78 21.9891 27.9 22.6791 27.96C26.7591 28.365 28.7841 26.58 29.9241 21.675L31.3941 15.405C32.0691 12.51 31.9791 10.485 31.0791 9.03C30.1791 7.575 28.4091 6.585 25.4991 5.91L22.9941 5.325C21.7491 5.025 20.6391 4.875 19.6791 4.875Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.4956 33.375C8.64057 33.375 6.18057 31.065 4.60557 26.19L2.68557 20.265C0.555566 13.665 2.46057 9.945 9.03057 7.815L11.4006 7.05C12.1806 6.81 12.7656 6.645 13.2906 6.555C13.7256 6.465 14.1456 6.63 14.4006 6.975C14.6556 7.32 14.7006 7.77 14.5206 8.16C14.1306 8.955 13.7856 9.96 13.5006 11.22L12.0306 17.505C10.6956 23.175 12.2406 25.65 17.9106 27L20.4306 27.6C21.2406 27.795 22.0056 27.915 22.6956 27.975C23.1756 28.02 23.5656 28.35 23.7006 28.815C23.8206 29.28 23.6406 29.76 23.2506 30.03C22.2606 30.705 21.0156 31.275 19.4406 31.785L17.0706 32.565C15.3456 33.105 13.8456 33.375 12.4956 33.375ZM11.6706 9.33L9.73557 9.96C4.38057 11.685 3.10557 14.205 4.83057 19.575L6.75057 25.5C8.49057 30.855 11.0106 32.145 16.3656 30.42L18.7356 29.64C18.8256 29.61 18.9006 29.58 18.9906 29.55L17.4006 29.175C10.4856 27.54 8.22057 23.88 9.84057 16.98L11.3106 10.695C11.4156 10.215 11.5356 9.75 11.6706 9.33Z"
                    fill="currentColor"
                  />
                  <path
                    d="M26.2341 15.765C26.1441 15.765 26.0541 15.75 25.9491 15.735L18.6741 13.89C18.0741 13.74 17.7141 13.125 17.8641 12.525C18.0141 11.925 18.6291 11.565 19.2291 11.715L26.5041 13.56C27.1041 13.71 27.4641 14.325 27.3141 14.925C27.1941 15.42 26.7291 15.765 26.2341 15.765Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.8397 20.835C21.7497 20.835 21.6597 20.82 21.5547 20.805L17.1897 19.695C16.5897 19.545 16.2297 18.93 16.3797 18.33C16.5297 17.73 17.1447 17.37 17.7447 17.52L22.1097 18.63C22.7097 18.78 23.0697 19.395 22.9197 19.995C22.7997 20.505 22.3497 20.835 21.8397 20.835Z"
                    fill="currentColor"
                  />
                </svg>
                <p>Total 5 Video</p>
              </div>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAdmin(Materi);
