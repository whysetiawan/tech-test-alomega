"use client";

import { useState } from "react";
import Link from "next/link";
import { scrollTo } from "../../../shared/helpers/scrollTo";
import { Button } from "@repo/ui";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-20 w-full transform duration-300 ease-in-out ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center bg-white opacity- ">
          <button
            className="mt-4 mr-8 h-8 w-8"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed pt-8 w-full flex-col bg-white">
          <div className="px-10 py-4">
            <Link
              href={"#about"}
              className="text-2xl font-bold tracking-widest text-gray-900"
              onClick={onToggleNav}
            >
              <button onClick={scrollTo("about")}>ABOUT</button>
            </Link>
          </div>

          <div className="px-10 py-4">
            <Link
              href={"#pricing"}
              className="text-2xl font-bold tracking-widest text-gray-900"
              onClick={onToggleNav}
            >
              <button onClick={scrollTo("pricing")}>PRICING</button>
            </Link>
          </div>

          <div className="px-10 py-4">
            <Link
              href={"#contact"}
              className="text-2xl font-bold tracking-widest text-gray-900"
              onClick={onToggleNav}
            >
              <button onClick={scrollTo("contact")}>CONTACT</button>
            </Link>
          </div>

          <div className="px-10 py-4">
            <Link
              href={"/login"}
              className="text-2xl font-bold tracking-widest text-gray-900"
              onClick={onToggleNav}
            >
              MASUK
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
