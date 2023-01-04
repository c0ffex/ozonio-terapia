import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navLinks } from '../pages/constants'
import Image from 'next/image'
import a from 'pages/assets/poggers_1.png'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: boolean[]) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {
  return (
    <>
    <div className='shadow-2xl'>
      <nav className='w-full h-[97px] flex py-1 justify-between items-center navbar bg-opacity-95 bg-gray-800 shadow-2xl'>
        
      <Image className=" my-0 object-cover ml-20 md:ml-5  overflow-hidden sm:justify-center md:h-20 md:w-[5.5rem] max-sm:object-fill max-sm:w-[60px]" src={a} alt={""}/>
      
        <ul className='list-none sm:flex hidden items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` font-mono cursor-pointer text-xl ${
                index === navLinks.length - 1 ? 'mr-5' : 'mr-10'
              } ${index === 0 ? 'ml-10' : 'ml-0'} justify-between hover:bg-slate-700 rounded-lg pt-2 hover:text-slate-50 text-custom-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>              
          ))}
        </ul>
        <button className="bg-transparent md:text-xs justify-end mr-5 mx-auto hover:bg-pink-300 text-custom-white font-semibold hover:text-white py-2 px-4 border border-custom-white hover:border-transparent rounded">
            Agendar agora
        </button>
      </nav>
      </div>
    </>
  )
}

export default Nav