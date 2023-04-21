// In this file I'm going to make my hero section with animations and presentation of the company
// To do it I use Lottie files for animations, TailwindCSS and some headlessUI and Heroicons
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Lottie from 'react-lottie'
import animation from "../animations/75353-cleaner-blue-shirt.json"
import logo from "../assets/logoNew.png"
import React from 'react'

const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Qui sommes-nous ?', href: '#presentation' },
  { name: 'Notre équipe', href: '#team' },
  { name: 'Nos prestations', href: '#activities' },
  { name: 'Contact', href: '#contact' },
]

const defaultOptions = {
  loop: true,
  autoplay: true,
  // here is where we will declare lottie animation
  animationData: animation,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Hero () {
  return (
    <div className="relative overflow-hidden bg-[#adccd0] h-screen" id='accueil'>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-[#adccd0] pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-[50rem] lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-[#9aabb2] lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-6 pt-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#acceuil">
                      <span className="sr-only">Prestat'air</span>
                      <img
                        alt="Your Company"
                        className="h-24 w-auto sm:h-20"
                        src={logo}
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-black hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:contents md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-[#3d4346] hover:text-gray-900 text-lg no-underline">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-[#adccd0] shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-16 w-auto"
                        src={logo}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-gray-400 hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[#9aabb2] hover:text-gray-900 no-underline"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-6 sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Association Prestat'air</span>{' '}
                <span className="block text-[#225a65] xl:inline"><br/>Un nouveau souffle dans votre quotidien.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">
                L’association Prestat’air, spécialisée dans les services à la personne, est disponible pour répondre aux besoins de ses clients, 
                ainsi qu’à ceux de ses aides à domicile.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#225a65] px-8 py-3 text-base 
                    font-medium text-white hover:bg-[#9aabb2] md:py-4 md:px-10 md:text-lg no-underline"
                  >
                    Nous contacter
                  </a> 
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 md:w-[90%] z-20 md:flex hidden">
          <Lottie options={defaultOptions}/>
        </div>
      </div>
    </div>
  )
}
