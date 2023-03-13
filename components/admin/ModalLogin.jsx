import React, { useRef, useState } from "react";

import { defaultError } from "utils/constant/error";
import PendingButton from "components/button/PendingButton";
import { useAuth } from "store/context";

export default function ModalLogin() {
  const [loading, setLoading] = useState(false);
  const username = useRef();
  const password = useRef();
  const [isShowPass, setIShowPass] = useState(false);
  const [error, setError] = useState(null);
  const { login, setNeedLogin } = useAuth();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify({
          email: username.current.value,
          password: password.current.value,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || defaultError);
      }
      login(data.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const showPassword = () => {
    const x = password.current;
    if (x.type === "password") {
      x.type = "text";
      setIShowPass(true);
    } else {
      setIShowPass(false);
      x.type = "password";
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-20 bg-gray-700 opacity-60"></div>
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="bg-white py-6 px-8 rounded-xl flex flex-col justify-center items-center max-w-xl">
          <h4 className="text-2xl font-semibold text-gray-600">
            Masuk sebagai <span className="text-main"> Admin</span>
          </h4>
          <form className="mt-6 text-left w-72" onSubmit={loginHandler}>
            <div>
              <div className="relative mb-5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
                      fill="#9E9E9E"
                    />
                    <path
                      d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </div>
                <input
                  ref={username}
                  type="text"
                  required
                  id="input-group-1"
                  className="w-full pl-11 p-2.5 border border-slate-300 rounded-full focus:border-blue-200 focus:outline-none focus:ring-1"
                  placeholder="Username"
                  name="name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <div className="relative mb-2.5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
                      fill="#9E9E9E"
                    />
                    <path
                      d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z"
                      fill="#9E9E9E"
                    />
                    <path
                      d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </div>
                <input
                  ref={password}
                  required
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  className="w-full pl-11 p-2.5 border border-slate-300 rounded-full focus:border-blue-200 focus:outline-none focus:ring-1 pr-12"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2.5 top-3 h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={showPassword}
                >
                  {!isShowPass ? <IconEyeNotShow /> : <IconEyeShow />}
                </svg>
              </div>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <div className="mt-8">
              {loading ? (
                <PendingButton size="w-full py-2" btn="btn-sec" />
              ) : (
                <div className="flex gap-2">
                  <button
                    type="reset"
                    onClick={() => setNeedLogin(false)}
                    className="w-full px-4 py-1.5 tracking-wide btn-sec text-base"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="w-full px-4 py-1.5 tracking-wide btn-ter text-base"
                  >
                    Masuk
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const IconEyeNotShow = () => (
  <>
    <path
      d="M9.47004 15.28C9.28004 15.28 9.09004 15.21 8.94004 15.06C8.12004 14.24 7.67004 13.15 7.67004 12C7.67004 9.60998 9.61004 7.66998 12 7.66998C13.15 7.66998 14.24 8.11998 15.06 8.93998C15.2 9.07998 15.28 9.26998 15.28 9.46998C15.28 9.66998 15.2 9.85998 15.06 9.99998L10 15.06C9.85004 15.21 9.66004 15.28 9.47004 15.28ZM12 9.16998C10.44 9.16998 9.17004 10.44 9.17004 12C9.17004 12.5 9.30004 12.98 9.54004 13.4L13.4 9.53998C12.98 9.29998 12.5 9.16998 12 9.16998Z"
      fill="#9E9E9E"
    />
    <path
      d="M5.59997 18.51C5.42997 18.51 5.24997 18.45 5.10997 18.33C4.03997 17.42 3.07997 16.3 2.25997 15C1.19997 13.35 1.19997 10.66 2.25997 8.99998C4.69997 5.17998 8.24997 2.97998 12 2.97998C14.2 2.97998 16.37 3.73998 18.27 5.16998C18.6 5.41998 18.67 5.88998 18.42 6.21998C18.17 6.54998 17.7 6.61998 17.37 6.36998C15.73 5.12998 13.87 4.47998 12 4.47998C8.76997 4.47998 5.67997 6.41998 3.51997 9.80998C2.76997 10.98 2.76997 13.02 3.51997 14.19C4.26997 15.36 5.12997 16.37 6.07997 17.19C6.38997 17.46 6.42997 17.93 6.15997 18.25C6.01997 18.42 5.80997 18.51 5.59997 18.51Z"
      fill="#9E9E9E"
    />
    <path
      d="M11.9999 21.02C10.6699 21.02 9.36994 20.75 8.11994 20.22C7.73994 20.06 7.55994 19.62 7.71994 19.24C7.87994 18.86 8.31994 18.68 8.69994 18.84C9.75994 19.29 10.8699 19.52 11.9899 19.52C15.2199 19.52 18.3099 17.58 20.4699 14.19C21.2199 13.02 21.2199 10.98 20.4699 9.81C20.1599 9.32 19.8199 8.85 19.4599 8.41C19.1999 8.09 19.2499 7.62 19.5699 7.35C19.8899 7.09 20.3599 7.13 20.6299 7.46C21.0199 7.94 21.3999 8.46 21.7399 9C22.7999 10.65 22.7999 13.34 21.7399 15C19.2999 18.82 15.7499 21.02 11.9999 21.02Z"
      fill="#9E9E9E"
    />
    <path
      d="M12.69 16.27C12.34 16.27 12.02 16.02 11.95 15.66C11.87 15.25 12.14 14.86 12.55 14.79C13.65 14.59 14.57 13.67 14.77 12.57C14.85 12.16 15.24 11.9 15.65 11.97C16.06 12.05 16.33 12.44 16.25 12.85C15.93 14.58 14.55 15.95 12.83 16.27C12.78 16.26 12.74 16.27 12.69 16.27Z"
      fill="#9E9E9E"
    />
    <path
      d="M1.99994 22.75C1.80994 22.75 1.61994 22.68 1.46994 22.53C1.17994 22.24 1.17994 21.76 1.46994 21.47L8.93994 14C9.22994 13.71 9.70994 13.71 9.99994 14C10.2899 14.29 10.2899 14.77 9.99994 15.06L2.52994 22.53C2.37994 22.68 2.18994 22.75 1.99994 22.75Z"
      fill="#9E9E9E"
    />
    <path
      d="M14.53 10.22C14.34 10.22 14.15 10.15 14 10C13.71 9.71 13.71 9.23 14 8.94L21.47 1.47C21.76 1.18 22.24 1.18 22.53 1.47C22.82 1.76 22.82 2.24 22.53 2.53L15.06 10C14.91 10.15 14.72 10.22 14.53 10.22Z"
      fill="#9E9E9E"
    />
  </>
);

const IconEyeShow = () => (
  <>
    <path
      d="M12 16.33C9.61004 16.33 7.67004 14.39 7.67004 12C7.67004 9.60998 9.61004 7.66998 12 7.66998C14.39 7.66998 16.33 9.60998 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.16998C10.44 9.16998 9.17004 10.44 9.17004 12C9.17004 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.16998 12 9.16998Z"
      fill="#9E9E9E"
    />
    <path
      d="M12 21.02C8.23996 21.02 4.68996 18.82 2.24996 15C1.18996 13.35 1.18996 10.66 2.24996 8.99998C4.69996 5.17998 8.24996 2.97998 12 2.97998C15.75 2.97998 19.3 5.17998 21.74 8.99998C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.47998C8.76996 4.47998 5.67996 6.41998 3.51996 9.80998C2.76996 10.98 2.76996 13.02 3.51996 14.19C5.67996 17.58 8.76996 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.80998C18.32 6.41998 15.23 4.47998 12 4.47998Z"
      fill="#9E9E9E"
    />
  </>
);
