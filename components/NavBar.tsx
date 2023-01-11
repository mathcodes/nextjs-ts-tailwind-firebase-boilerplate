/* eslint-disable @next/next/no-img-element */
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          {user ? (
            <>
              <div className="mr-2 hidden md:inline-block">
                <img
                  src="https://www.jonchristie.net/favicon.png"
                  alt="jonchristie.net logo"
                  className="w-32 h-auto rounded-full"
                />
              </div>
              <div className="inline-block md:hidden">
                <img
                  src="https://www.jonchristie.net/favicon.png"
                  alt=""
                  className="w-32 h-auto"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mr-2 hidden md:inline-block">
                <img
                  src="https://www.jonchristie.net/favicon.png"
                  alt="JCircle logo"
                  className="w-24 h-auto rounded-full"
                />
              </div>
              <div className="inline-block md:hidden">
                <img
                  src="https://www.jonchristie.net/favicon.png"
                  alt=""
                  className="w-32 h-auto"
                />
              </div>
            </>
          )}

          {user && (
            <div className="flex items-center justify-between space-x-1">
              <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                <i className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt"></i>
                <input
                  type="text"
                  placeholder="Search JCircle"
                  className="outline-none bg-transparent hidden xl:inline-block"
                />
              </div>
            </div>
          )}
        </div>

        <ul className="flex w-full lg:w-max items-center justify-center">
          <li className="w-1/5 md:w-max text-center">
          </li>
          {user && (
            <>
              <li className="w-1/5 md:w-max text-center">w-1/5
              </li>
              <li className="w-1/5 md:w-max text-center">w-1/5
              </li>
              <li className="w-1/5 md:w-max text-center">w-1/5
              </li>
              <li className="w-1/5 md:w-max text-center hidden md:inline-block">w-1/5
              </li>
              <li className="w-1/5 md:w-max text-center inline-block md:hidden">w-1/5
              </li>
            </>
          )}
        </ul>

        <ul className="hidden md:flex mx-4 items-center justify-center">
          <li className="h-full hidden xl:flex">
            {user ? (
              <div
                onClick={logout}
                className="cursor-pointer inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
              >
                <img
                  src={user?.photoURL as string}
                  alt="Profile picture"
                  className="rounded-full h-10 w-10"
                />
                <span className="mx-2 font-semibold dark:text-dark-txt">
                  {user?.displayName}
                </span>
              </div>
            ) : (
              <div
                onClick={() => router.push("/auth/login")}
                className="animate-pulse cursor-pointer inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?pid=ImgDet&rs=1"
                  alt="Profile picture"
                  className="rounded-full h-10 w-10"
                />
                <span className="mx-2 font-semibold dark:text-dark-txt">
                  Sign Up
                </span>
              </div>
            )}
          </li>
          {user && (
            <>
              <li>li
              </li>
              <li>li
              </li>
              <li>li
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
