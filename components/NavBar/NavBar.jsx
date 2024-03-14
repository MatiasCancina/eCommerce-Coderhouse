"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      text: "Inicio",
      path: "#",
    },
    {
      text: "Nostros",
      path: "#",
    },
    {
      text: "Contacto",
      path: "#",
    },
    {
      text: "Posts",
      path: "#",
    },
  ];

  // bg-gradient-to-b from-blue-800 to-[rgb(235, 236, 239)]

  return (
    <div className="bg-gray-800 flex justify-center items-center flex-col">
      <nav className=" w-full md:flex md:justify-between md:items-center md:border-box md:pt-6 py-6 md:px-40 hidden select-none">
        <span className="text-white font-bold text-xl w-1/2">
          eCommerce Coderhouse
        </span>
        <div className="flex justify-end items-center w-1/2">
          <Link
            href="#"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Nosotros
          </Link>
          <Link
            href="#"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Contacto
          </Link>
          <Link
            href="#"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            Posts
          </Link>
          <Link
            href="#"
            className="text-base text-slate-100 p-3 hover:bg-gray-700 rounded-full"
          >
            <BsCart2 className="text-2xl" />
          </Link>
        </div>
      </nav>
      <nav className="w-screen md:hidden">
        <div className="block md:hidden  justify-between p-4">
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
      <div className="w-11/12 lg:w-1/2 rounded-xl mb-12 bg-red-600 h-40 lg:h-72 text-black flex items-center justify-center">
        publicidad
      </div>
      <section className="flex justify-start text-gray-800 absolute bottom-0 w-full h-[66%] sm:h-[69%] md:h-[67%] lg:h-[50%] xl:h-[50%] 2xl:h-[53%] bg-gradient-to-b from-gray-800 -z-10">
        .
      </section>
    </div>
  );
};
