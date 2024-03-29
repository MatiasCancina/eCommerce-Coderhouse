"use client";

import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      text: "Shop",
      path: "/",
    },
    {
      text: "Us",
      path: "/us",
    },
    {
      text: "Contact",
      path: "/contact",
    },
    {
      text: "Posts",
      path: "/posts",
    },
  ];

  const isShopPage = pathname === "/";

  return (
    <div className="bg-gray-800 flex justify-center items-center flex-col">
      {/* Desktop Nav */}
      <nav className=" w-full lg:flex lg:justify-between lg:items-center lg:border-box lg:pt-6 py-6 md:px-32 lg:px-40 xl:px-52 2xl:px-96 hidden select-none">
        <div>
          <Link href={"/"} className="text-white font-extrabold text-4xl w-1/2">
            iTech
          </Link>
        </div>
        <div className="flex justify-end items-center w-1/2">
          <Link
            href="/"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Shop
          </Link>
          <Link
            href="/us"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Us
          </Link>
          <Link
            href="/contact"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Contact
          </Link>
          <Link
            href="/posts"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Posts
          </Link>
          <Link
            href="/cart"
            className="text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            <BsCart2 className="text-2xl" />
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="w-screen lg:hidden">
        <div className="flex lg:hidden justify-between p-4">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className=" text-white text-2xl" />
            ) : (
              <FiMenu className=" text-white text-2xl" />
            )}
          </button>
          <BsCart2 className="text-white text-2xl" />
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence className="rounded-r-md">
          {isOpen && (
            <motion.div
              key="menu-dropdown"
              initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gray-800 absolute w-full h-screen py-1 shadow-lg"
              style={{ backdropFilter: "blur(5px)" }}
              onClick={closeMenu}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.path}>
                    <div className="flex justify-start items-center px-4 py-2 hover:bg-gray-600">
                      <p className="ml-2 text-md text-white">{item.text}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isShopPage && (
        <>
          <div className="w-11/12 md:w-3/5 lg:w-1/2 rounded-xl mb-12 mt-7 sm:mt-0 bg-red-600 h-40 lg:h-72 text-black flex items-center justify-center">
            publicidad
          </div>

          <section className="flex justify-start text-gray-800 absolute bottom-0 w-full h-[66%] sm:h-[69%] lg:h-[50%] xl:h-[48%] 2xl:h-[53%] bg-gradient-to-b from-gray-800 -z-10" />
        </>
      )}
    </div>
  );
};
