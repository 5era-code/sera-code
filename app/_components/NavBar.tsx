"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const NavBar = () => {
  const NavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Contact", path: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  const MobileNav = () => {
    return (
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`flex flex-col  min-w-[40vw] rounded-md text-sm absolute mt-8 bg-white transition-all duration-200  ${
            open ? "flex  right-0 " : "top-0 scale-0"
          }`}
        >
          {NavItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="hover:text-mainColor group/hover relative px-5 py-3 transition-all duration-200  hover:bg-slate-100"
            >
              {item.name}
              <div className="w-0 group-hover/hover:w-full  h-[2px] absolute bottom-0 left-0 bg-mainColor transition-all duration-200"></div>
            </Link>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="flex justify-between items-center mt-6">
      <h1
        className={`${bebasNeue.className} text-3xl sm:text-5xl text-mainColor cursor-pointer`}
      >
        5era-code
      </h1>
      <div
        className="sm:hidden flex flex-col gap-1 relative w-7 h-5 cursor-pointer z-30"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-7  h-1 left-1/2 -translate-x-1/2  -translate-y-1/2  absolute bg-mainColor origin-center transition-all duration-200 ${
            open ? "rotate-45 top-1/2" : "rotate-0"
          }`}
        ></span>
        <span
          className={`w-7 h-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90%] absolute bg-mainColor origin-center transition-all duration-200 ${
            open ? "scale-0" : ""
          }`}
        ></span>
        <span
          className={`w-7  h-1 left-1/2 -translate-x-1/2  -translate-y-1/2 bottom-0 absolute bg-mainColor origin-center transition-all duration-200 ${
            open ? "-rotate-45 top-1/2 bottom-auto" : "rotate-0"
          }`}
        ></span>
        <MobileNav />
      </div>
      <ul className="flex-row gap-6 hidden sm:flex">
        {NavItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-base group/hover hover:text-mainColor transition-all relative duration-200 pb-1"
            >
              {item.name}
              <div className="w-0 group-hover/hover:w-full  h-[2px] absolute bottom-0 left-0 bg-mainColor transition-all duration-200"></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
