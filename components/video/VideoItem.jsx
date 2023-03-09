import React from "react";

export default function VideoItem(){
  const selectMateri = () => {};
  return (
    <button
      onClick={selectMateri}
      className="bg-second py-2 px-4 mb-3 rounded-xl w-full"
    >
      <p className="text-gray-200 text-left text-base font-medium">
        Materi Video satu
      </p>
      <div className="flex gap-2 items-center text-gray-300 text-xs mt-1 mb-1">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4"
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
        <p>23:09 menit</p>
      </div>
    </button>
  );
};