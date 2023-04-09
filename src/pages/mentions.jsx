import React from 'react'
import { NavLink } from 'react-router-dom'

function Mentions() {
  return (
    <div className='bg-[#adccd0] h-screen'>
        <div className="relative md:bg-[#adccd0] md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 
                md:text-xl lg:mx-0 text-justify">
                  <div> 
                    <p className='text-gray-900 font-semibold'>1 - PROPRIÉTÉ</p> 
                    <p>
                        Le présent site est la propriété de L’association Prestat’air <br/>
                        Siège social : 42 Rue du Rouet 34300 Agde - Tél.: 04 30 41 84 90 <br/>
                        Email: contact@association-prestatair.com <br/>
                        Entreprise/ Association créée en 2019– code 8810A - Convention 3127 - SIRET : 85290414300025 <br/>
                        Directeur de la publication : nom, fonction et entreprise <br/>
                        Toute reproduction même partielle est interdite sans autorisation préalable.
                    </p> 
                  </div>
                  <div>
                    <p className='text-gray-900 font-semibold'>2 - PRESTATAIRES</p>
                    <p>
                        Création / Conception / Développement : <br/>
                        Nom entreprise et adresse : <br/>
                        Tél. : numéro <br/> 
                        Email : contact@nomentreprise.fr <br/>
                        Web : www.site.fr <br/>
                        Hébergement : Nom
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-900 font-semibold flex mx-auto w-auto justify-center'>POLITIQUE DE CONFIDENTIALITÉ - MEMBRE FEDESAP</p>
                    <p>
                        Les internautes accédant au site www.nomentreprise.fr peuvent être amenés à fournir des informations nominatives ou 
                        à caractère personnel dans le cadre des services proposés par l’association Prestat’air.
                    </p>
                  </div>
                  <div className="rounded-md shadow w-[25%] justify-center flex mx-auto">
                    <NavLink
                        to="/"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#225a65] px-8 py-3 text-base 
                        font-medium text-white hover:bg-[#9aabb2] md:py-4 md:px-10 md:text-lg no-underline"
                    >
                        Accueil
                    </NavLink> 
                </div>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
              </div>
            </div>
    </div>
  )
}

export default Mentions