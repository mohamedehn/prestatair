import {React, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/logoNew.png"
import { useEffect } from 'react'

const navigation = [
    { name: 'Acceuil', href: '/' },
    { name: 'Mentions légales', href: '#mentions' },
    { name: 'Politique de confidentialité', href: '#politique' }
  ]

function Mentions() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className='bg-[#adccd0] h-full text-justify'>
        <div className="relative md:bg-[#adccd0] md:p-6 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
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
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-black 
                      hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]">
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
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-gray-400 
                      hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]">
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
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[#9aabb2] hover:text-gray-900 
                        no-underline"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 
                md:text-xl lg:mx-0 text-justify pt-14">
                  <div>
                    <p className='text-gray-900 font-semibold flex mx-auto w-auto justify-center' id='mentions'>MENTIONS LEGALES</p>
                    <p className='text-gray-900 font-semibold pt-10'>1 - PROPRIÉTÉ</p> 
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
                    <p className='text-gray-900 font-semibold flex mx-auto w-auto justify-center' id='politique'>
                        POLITIQUE DE CONFIDENTIALITÉ - MEMBRE FEDESAP
                    </p>
                    <p>
                        Les internautes accédant au site www.nomentreprise.fr peuvent être amenés à fournir des informations nominatives ou 
                        à caractère personnel dans le cadre des services proposés par l’association Prestat’air.
                    </p>
                    <p>
                        L’association Prestat’air est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement Général pour 
                        la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel effectuées 
                        sur le site accessible à l’adresse URL : https://www.nom entreprise.fr 
                    </p>
                    <p>L’association Prestat’air traite les données personnelles collectées via son site pour les finalités suivantes :</p>
                    <p>
                        -	Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l’association 
                        Prestat’air et les conditions d’éligibilité.<br/>
                        Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants :<br/>
                        -	Un droit d’accès<br/>
                        -	Un droit de rectification<br/>
                        -	Un droit d’effacement<br/>
                        -	Le cas échéant, d’un droit à la portabilité de ses données<br/>
                        -	Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer<br/>
                        -	Le cas échéant, un droit de retirer son consentement<br/>
                        -	Un droit de définir des directives relatives au sort de ses données après sa mort<br/>
                        Le visiteur peut exercer ses droits en envoyant soit :<br/>
                        -	Un courriel au Responsable de Traitement de L’association Prestat’air <br/>
                        -	Un courrier à l’attention du Responsable de Traitement à l’adresse suivante :<br/>
                        Association Prestat’air <br/>
                        42 Rue du Rouet<br/>
                        34300 Agde<br/>
                    </p>
                    <p>
                        Si le visiteur estime que l’association Prestat’air n’a pas correctement répondu à ses sollicitations, il dispose d’un 
                        droit d’introduire une réclamation auprès de la CNIL. L’association Prestat’air limite la collecte des données 
                        personnelles au strict nécessaire au regard des finalités des traitements de données, elles sont destinées à 
                        l’association Prestat’air mais sont susceptibles d’être transférées à des organismes publics afin de mieux répondre 
                        à la demande du visiteur.
                    </p>
                    <p>
                        Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des tiers au 
                        sens du RGPD.
                    </p>
                    <p>
                        Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de 
                        l’Union Européenne.
                    </p>
                    <p>
                        Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la 
                        gestion de sa demande.
                    </p>
                    <p>
                        L’association Prestat’air veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les 
                        données personnelles soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à 
                        l’ensemble du personnel de l’association Prestat’air , ainsi qu’à tous les prestataires et sous-traitants travaillant 
                        pour l’association Prestat’air.
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
            <ScrollToTop/>
    </div>
  )
}

export default Mentions