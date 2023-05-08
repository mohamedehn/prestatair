// in this file i'm going to set a form to collecte informations

import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


export default function Form() {
  
  return (
    <div className="bg-[#adccd0]" id='contact'>
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only ">Contactez&#8209;nous</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-[#9aabb2] py-10 px-6 sm:px-10 xl:p-12">
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Contactez-nous</h3>
              <p className="mt-6 max-w-3xl text-base text-gray-900 text-justify">
                Nos services sont disponibles pour vous répondre du lundi au vendredi, de 8h30 à 12h et de 13h30 à 17h. 
                Si vous souhaitez effectuer une candidature spontanée suite à une annonce sur l’un de nos sites partenaires, 
                nous vous remercions de stipuler le numéro d’offre dans l’objet de votre formulaire de contact. 
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-gray-900">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <span className="ml-3">04 30 41 84 90</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-gray-900">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <span className="ml-3">
                    <a href="maito:contact@association-prestatair.com" className='no-underline text-gray-900'>
                      contact@association-prestatair.com
                    </a>
                  </span>
                </dd>
              </dl>
              <div>
              <div className="map-container-2 w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11612.31904646705!2d3.4713674!3d43.3125897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba1b5dd76e905%3A0xec564c6f35ee459c!2sPRESTAT&#39;AIR!5e0!3m2!1sfr!2sfr!4v1676047078034!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="adress" className="border-0 w-full"></iframe>
              </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Ecrivez-nous un message</h3>
              <form action="https://formsubmit.co/contact@association-prestatair.com" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                    Prénom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                    Nom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Téléphone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optionnel
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Objet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 caractères
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="message-max"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#225a65] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#9aabb2] focus:outline-none focus:ring-2 focus:ring-[#9aabb2] focus:ring-offset-2 sm:w-auto"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
