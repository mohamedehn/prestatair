//this file will contain all the team's company. I use a const name "people" to include tha data and display it with a map
import React from 'react';
import anita from "../assets/team/anita.png"
import alisee from "../assets/team/alisee.png"
import julie from "../assets/team/julie.png"
import mr from "../assets/team/mr.png"
import gwen from "../assets/team/gwenaelle.png"
import julia from "../assets/team/julia.png"
import mathieu from "../assets/team/mathieu.png"
import marie from "../assets/team/marie.png"
import alyson from "../assets/team/alyson.png"


const people = [
    {
        name: 'Anita Eggermont',
        role: 'Présidente',
        imageUrl: anita,
    },
    {
        name: 'Julie Rodriguez',
        role: 'Responsable des Services',
        imageUrl: julie,
      },
    {
        name: 'Alisée',
        role: 'Responsable Qualité Conformité',
        imageUrl: alisee,
      },
    {
        name: 'Haitam',
        role: 'Assistant RH',
        imageUrl: mr,
    },
    {
        name: 'Gwenaelle',
        role: 'Assistante RH',
        imageUrl: gwen,
    },
    {
        name: 'Julia',
        role: "Chargée d'accueil",
        imageUrl: julia,
    },
    {
        name: 'Romane',
        role: "Chargée d'accueil",
        imageUrl: julia,
    },
    {
        name: 'Matthieu',
        role: "Chargé suivi",
        imageUrl: mathieu,
    },
    {
        name: 'Marie-Ange',
        role: "Chargée suivi",
        imageUrl: marie,
    },
    {
        name: 'Alyson',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Myriam',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Alexia',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Laetitia',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Katia',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Maeva',
        role: "Chargée d'assistance",
        imageUrl: alyson,
    },
    {
        name: 'Remy',
        role: "Chargé d'assistance",
        imageUrl: mr,
    },
    {
      name: 'Laurine',
      role: "Chargée d'assistance",
      imageUrl: alyson,
  },
  ]
  
  export default function Team() {
    return (
      <div className="bg-[#adccd0] py-24" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="px-6 max-w-2xl lg:mx-0">
            <h2 className="py-4 mt-2 text-3xl font-bold leading-8 tracking-tight text-[#225a65] sm:text-4xl">Notre équipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            </p>
          </div>
          <ul
            role="listitem"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 
            lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 pl-0"
          >
            {people.map((person) => (
              <li key={person.name} className="cursor-pointer hover:scale-110 ease-in duration-300">
                <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  