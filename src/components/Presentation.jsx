
export default function Presentation() {
    return (
      <div className="overflow-hidden bg-[#adccd0]  py-16 px-6 lg:px-8 xl:py-36" id="presentation">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="max-w-prose text-base lg:max-w-none">
              <h2 className="font-semibold leading-6 text-gray-900">Une qualité de service reconnu !</h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-[#225a65] sm:text-4xl">
                Présentation de notre structure
              </p>
            </div>
          </div>
          <div className="relative bg-[#adccd0]">
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
            <div className="relative md:bg-[#adccd0] md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                  <p> L'association PRESTAT'AIR a été créée en Août 2019 par Madame EGGERMONT Anita, agissant en tant que Présidente. 
                    Nos intervenant(e)s couvrent le territoire national.  
                  </p>
                  <p className="pt-14"> L’équipe administrative se compose de Madame RODRIGUEZ Julie, Responsable des Services et Madame EGGERMONT Alisée, Responsable Qualité Conformité. Le service RH est composé d’un Référent et d’une Assistante. L’équipe production est composée de sept chargés d’assistance et de deux chargés d’accueil. Le service qualité se compose de deux chargés de suivi.  
                  </p>
                </div>
                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                  <p> L’association PRESTAT'AIR, basée à Agde (34), a la particularité d'être organisée de façon centralisée et dispose de près de 6500 intervenants sur l'ensemble du territoire français.
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
  