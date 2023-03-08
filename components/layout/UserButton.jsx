import { useState } from "react";
import router from "next/router";
import Link from "next/link";

export default function UserButton({ nama, role }) {
  const [isDrdwnUser, setIsDrdwnUser] = useState(false);

  const togledrdwnUser = () => {
    setIsDrdwnUser(!isDrdwnUser);
  };

  const signOutUser = () => {
    router.replace("/");
    signOut({ redirect: false });
  };

  return (
    <div className="relative mr-3">
      <button
        onClick={() => togledrdwnUser()}
        className="btn-1 px-2 py-0.5 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mt-1 truncate w-20">{nama}</p>
      </button>

      {isDrdwnUser && (
        <>
          <div
            onClick={() => togledrdwnUser()}
            className="fixed inset-0 h-full w-full z-10"
          ></div>
          <div
            onClick={() => togledrdwnUser()}
            className="absolute -right-2 mt-2 w-48 bg-gray-50 rounded-xl overflow-hidden shadow-2xl z-40 divide-y"
          >
            <Link href="/profile">
              <a className="flex items-center p-3 cursor-pointer text-gray-600 text-sm hover:text-gray-800 focus:text-gray-800 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 26 26"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={7} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span className="ml-2">Profile ku</span>
              </a>
            </Link>
            {role == 9 && (
                <Link href="/admin">
                  <a className="flex items-center p-3 cursor-pointer text-gray-600 text-sm hover:text-gray-800 focus:text-gray-800 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 26 26"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="ml-2">Dashboard Admin</span>
                  </a>
                </Link>
            )}
            <div className="flex px-4 justify-between items-center bg-pink-400 rounded-b-xl">
              <button
                className="text-gray-700 hover:text-gray-900 py-3 pr-3"
                onClick={() => togledrdwnUser()}
              >
                Tutup
              </button>
              <button
                onClick={signOutUser}
                className="flex items-center text-gray-700 hover:text-gray-900 py-3 pl-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Keluar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
