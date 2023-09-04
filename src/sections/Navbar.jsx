import React, { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import {
  hamburger,
  close,
  moon,
  sun_b,
  sun_w,
  hamburger_w,
  close_w,
} from "../assets/icons/";
import { navLinks } from "../constants";

import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(Boolean | undefined);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode === true) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, [darkMode]);

  return (
    <header
      className={`padding-x py-8 fixed scroll-smooth top-0 z-20 w-full ${
        scrolled
          ? "bg-white dark:bg-slate-900 dark:text-white-400 "
          : "bg-transparent dark:text-slate-400 "
      } `}
    >
      <div className="flex flex-row items-center justify-between max-container ">
        <a href="/">
          <img
            className="w-[130px] h-[29px] "
            src={headerLogo}
            alt="Nike Logo"
          />
        </a>
        <ul className="flex flex-row flex-1 items-center justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className={`font-montserrat leading-normal text-lg text-slate-gray dark:${
                  scrolled
                    ? "text-white-400 focus::text-red-500 "
                    : "text-slate-400 hover:text-slate-300 "
                } `}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <button
            className=" absolute right-[15%] max-xl:right-[10%] hidden lg:block "
            onClick={switchMode}
          >
            {darkMode === true && (
              <div>
                <img
                  className="xl:block hidden "
                  width={32}
                  height={32}
                  src={scrolled ? sun_w : sun_b}
                  alt="mode"
                />
                <img
                  className="xl:hidden block"
                  width={32}
                  height={32}
                  src={sun_w}
                  alt="mode"
                />
              </div>
            )}
            {darkMode === false && (
              <img width={32} height={32} src={moon} alt="mode" />
            )}
          </button>
        </ul>
        {/* mobile navigation */}
        <div className="hidden max-lg:block ">
          <div className="flex flex-row-reverse ">
            <button className="ml-4">
              {" "}
              {/* Hamburger Menu */}
              <img
                className=""
                width={25}
                height={25}
                src={
                  !toggleMenu
                    ? darkMode === true
                      ? hamburger_w
                      : hamburger
                    : darkMode
                    ? close_w
                    : close
                }
                alt="hamburger"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </button>{" "}
            <div onClick={switchMode}>
              {/* Dark Mode Toggle */}
              {darkMode === true && (
                <div>
                  <img
                    className="xl:block hidden"
                    width={32}
                    height={32}
                    src={scrolled ? sun_w : sun_b}
                    alt=" light mode"
                  />
                  <img
                    className="xl:hidden block"
                    width={32}
                    height={32}
                    src={sun_w}
                    alt="light mode"
                  />
                </div>
              )}
              {darkMode === false && (
                <img width={25} height={25} src={moon} alt="dark mode" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-lg:block">
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col flex-1 items-center absolute right-0 justify-center h-screen bg-white dark:bg-slate-900 max-sm:w-full w-2/3 "
          >
            <div>
              <ul className="flex flex-col flex-1 items-center justify-center gap-16 ">
                {navLinks.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                    }}
                    key={index}
                  >
                    <a
                      className="font-montserrat leading-normal text-xl text-slate-gray dark:text-white-400 "
                      href={item.href}
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
