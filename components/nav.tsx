import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "./constants";
import Image from "next/image";
import a from "pages/assets/poggers_1.png";
import menu from "pages/assets/menu.svg";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: boolean[]) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="shadow-2xl">
        <nav className="w-full h-[97px] flex py-1 navbar bg-opacity-95 bg-gray-800 shadow-2xl">
          <Image
            className="my-0 object-cover ml-20 md:ml-5 overflow-hidden object-center md:h-20 md:w-[5.5rem] mx-0 max-sm:w-[60px] max-sm:h-[3rem]"
            src={a}
            alt={""}
          />

          <ul className="list-none max-sm:hidden sm:flex hidden items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-mono cursor-pointer text-xl ${
                  index === navLinks.length - 1 ? "mr-5" : "mr-10"
                } ${
                  index === 0 ? "ml-10" : "ml-0"
                } justify-between hover:bg-slate-700 rounded-lg pt-2 hover:text-slate-50 text-custom-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button className="max-sm:hidden bg-transparent md:text-xl justify-end mr-5  hover:bg-pink-300 text-custom-white font-semibold hover:text-white py-1 px-4 border border-custom-white hover:border-transparent rounded">
            Agendar agora
          </button>
          <div className="sm:hidden flex flex-1 ">
            <Image
              src={toggle ? close : menu}
              alt={""}
              className="w-[28px] h-[28px] object-contain "
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-gray-800-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none max-sm:hidden flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={` font-mono cursor-pointer text-xl ${
                      index === navLinks.length - 1 ? "mr-5" : "mr-10"
                    } ${
                      index === 0 ? "ml-10" : "ml-0"
                    } justify-between hover:bg-slate-700 rounded-lg pt-2 hover:text-slate-50 text-custom-white`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
