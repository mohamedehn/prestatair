import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoNew.png";
import { useEffect } from "react";
import React from "react";

const navigation = [{ name: "Accueil", href: "/" }];

function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#adccd0] h-full text-justify">
      <div className="relative md:bg-[#adccd0] md:p-6 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-6">
          <Popover>
            <div className="relative px-6 pt-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
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
                      <Popover.Button
                        className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-black
                      hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]"
                      >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:contents md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-[#3d4346] hover:text-gray-900 text-lg no-underline"
                    >
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
                      <img className="h-16 w-auto" src={logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className="inline-flex items-center justify-center rounded-md bg-[#adccd0] p-2 text-gray-400
                      hover:bg-[#225a65] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#225a65]"
                      >
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
          <div
            className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5
                md:text-xl lg:mx-0 text-justify pt-14"
          >
            <p className="text-gray-900 font-semibold flex mx-auto w-auto justify-center pb-10">
              POLITIQUE DE GESTION DES COOKIES
            </p>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto">
                INFORMATIONS À PROPOS DES COOKIES
              </p>
              <p>
                Lors de la consultation de notre site internet, des cookies sont
                déposés sur le terminal (ordinateur, tablette, smartphone) avec
                lequel vous naviguez.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto pt-10">
                QU’EST CE QU’UN COOKIE ?
              </p>
              <p>
                Le cookie est un petit fichier texte déposé dans un espace dédié
                du disque dur de votre terminal qui va stocker des informations
                relatives à votre navigation. Il est téléchargé par votre
                navigateur lors de la visite d’un site internet. Lorsque vous
                revenez sur ce site en utilisant le même appareil, le cookie et
                les informations qui y sont stockés sont soit envoyés au site
                internet qui l’a créé (cookie propriétaire) soit envoyés à un
                autre site internet auquel il appartient (cookie tiers).
                Certains cookies sont extrêmement utiles car ils peuvent
                améliorer l’expérience de l’utilisateur. Par exemple, lorsque
                vous consultez plusieurs fois un site internet avec un même
                navigateur, les cookies gardent en mémoire, vos préférences, la
                manière dont vous utilisez un site et adaptent le contenu
                affiché pour qu’il soit adapté à vos besoins et intérêts
                personnels. Selon leur fonction et leur finalité, les cookies
                peuvent être divisés en quatre catégories : les cookies
                essentiels, les cookies de mesures d’audience et de statistique,
                les cookies fonctionnels et les cookies publicitaires.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto pt-10">
                QUELLE EST LA DUREE DE CONSERVATION D’UN COOKIE ?
              </p>
              <p className="pb-10">
                Les cookies déposés par L’association Prestat’air, nos
                sous-traitants et nos partenaires et les données de navigations
                recueillies sont conservées pour une durée maximale de 13 mois à
                compter du dépôt sur votre terminal. A l’expiration de ce délai,
                votre consentement sera à nouveau nécessaire au dépôt du cookie.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto pb-3">
                LES CATEGORIES DE COOKIES
              </p>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto">
                LES COOKIES ESSENTIELS :
              </p>
              <p>
                Les cookies essentiels, également appelés cookies « strictement
                nécessaires », assurent des fonctions sans lesquelles le site ne
                peut pas fonctionner correctement. Ils sont stockés sur votre
                appareil uniquement pendant la durée de la session d’utilisation
                du navigateur, et votre consentement n’est pas requis pour ce
                type de cookie.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto">
                LES COOKIES DE MESURES D’AUDIENCE ET DE STATISTIQUES :
              </p>
              <p>
                Les cookies de mesures d’audience et de statistique permettent
                de produire des statistiques anonymes quant à la fréquentation
                du site (ex : nombre de visites, les pages consultées, le temps
                passé…). Ces cookies permettent d’adapter le site aux demandes
                des visiteurs et d’améliorer sa performance et ses
                fonctionnalités.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto">
                LES COOKIES DE FONCTIONNELS :
              </p>
              <p>
                Les cookies fonctionnels permettent à un site internet
                d’enregistrer des informations qui ont déjà été fournies (ex :
                le nom de l’utilisateur, la localisation) et d’offrir à
                l’utilisateur des fonctions améliorées et personnalisées.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto">
                LES COOKIES PUBLICITAIRES :
              </p>
              <p>
                Les cookies publicitaires sont utilisés pour diffuser des
                publicités qui sont pertinentes pour certains utilisateurs
                spécifiques et adaptées à leurs intérêts.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto pt-10">
                COMMENT GÉRER ET SUPPRIMER LES COOKIES ?
              </p>
              <div>
                <p>
                  Lors de votre première visite sur le site, un bandeau vous
                  informe de la présence de ces cookies et vous invite à les
                  accepter ou les refuser. Les cookies, qui nécessitent votre
                  consentement, seront déposés uniquement si vous y consentez.
                </p>
                <p>
                  Par ailleurs, pour gérer les cookies, la plupart des
                  navigateurs vous permettent de refuser ou d’accepter tous les
                  cookies ou de n’en accepter que certains. Vous trouverez la
                  procédure de gestion et de suppression des cookies à la
                  rubrique aide de votre navigateur, ou directement en cliquant
                  sur les liens suivants :
                </p>
                <p>
                  Pour Chrome, cliquer&nbsp;
                  <a href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647">
                    ici
                  </a>
                </p>
                <p>
                  Pour Safari, cliquer&nbsp;
                  <a href="http://support.apple.com/kb/HT1677?viewlocale=fr_FR">
                    ici
                  </a>
                </p>
                <p>
                  Pour Firefox, cliquer&nbsp;
                  <a href="http://support.mozilla.org/fr/kb/activer-desactiver-cookies?redirectlocale=fr&redirectslug=Activer+et+d%C3%A9sactiver+les+cookies">
                    ici
                  </a>
                </p>
                <p>
                  Pour Opera, cliquer&nbsp;
                  <a href="http://help.opera.com/Windows/10.20/fr/cookies.html">
                    ici
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-semibold flex mx-auto w-auto pt-10">
                MISES À JOUR DE LA POLITIQUE DE GESTION DES COOKIES :
              </p>
              <p>
                L’association Prestat’air se réserve le droit de modifier ou de
                mettre à jour cette politique lorsque cela devient nécessaire
                (dernière mise à jour le 07/04/2023), afin de s’adapter aux
                retours clients, aux changements liés à nos produits et
                services, ou pour être conforme à de nouvelles exigences
                légales. Nous vous prions de bien vouloir la consulter
                régulièrement. Lorsque nous mettons à jour cette politique, nous
                révisons la date de « dernière mise à jour » en haut de ce
                document.
              </p>
            </div>
            <div className="rounded-md shadow w-[25%] justify-center flex mx-auto mt-10">
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
        <div className="mt-8 inline-flex rounded-md shadow"></div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Cookies;
