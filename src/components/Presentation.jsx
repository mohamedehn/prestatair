
export default function Presentation() {
    return (
      <div className="overflow-hidden bg-sky-100  py-16 px-6 lg:px-8 xl:py-36" id="presentation">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="max-w-prose text-base lg:max-w-none">
              <h2 className="font-semibold leading-6 text-sky-600">Une qualité de service reconnu !</h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Moyens mis en oeuvre
              </p>
            </div>
          </div>
          <div className="relative bg-sky-100">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
            </svg>
            <svg
              className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div className="relative md:bg-sky-100 md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                  <p>
                    Nous disposons d'un total 10157 intervenants qualifiés mobilisables présents sur toute la France et les DOM -TOM, ce qui nous permet de couvrir l'ensemble des communes. Notre zone d'intervention repose sur un découpage de la France et notre taux de satisfaction est calculé à la suite de notre suivi téléphonique lors de la clôture des dossiers.  
                  </p>
                  <p className="pt-14">
                    Nous utilisons le logiciel PRO/CTS, qui nous permet de gérer l'ensemble de nos dossiers depuis un même logiciel, de la prise de mission jusqu'à la facturation du dossier et la paie de l'intervention.La planification est au centre de cet outil ce qui permet à nos chargés d'assistance de gagner en efficacité lors de la mise en place des dossiers et d'accéder rapidement à la disponibilité, aux compétences, et au lieu d'intervention de nos intervenants.
                  </p>
                </div>
                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                  <p>
                  Les trois points forts de nos chargés d'assistance sont : l'écoute, l'analyse et la détection des besoins. Le process unique sur lequel nous reposons, est le fruit d'une étroite collaboration entre nos partenaires et donneurs d'ordres. La culture et les valeurs de notre organisme nous permettent d'accroitre notre stratégie et notre positionnement sur le territoire. Si bien que l'Association PRESTAT'AIR s'étend vers une dynamique de progression continue dans ses différents services
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  