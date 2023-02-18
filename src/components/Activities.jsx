//here we will find a complete list of the activites

const activities = [
  {text : 'Entretien de la maison et travaux ménagers'},
  {text : 'Petits travaux de jardinage et bricolage'},
  {text : "Garde d'enfant(s) de plus de 3 ans à domicile. Soutien scolaire ou cours à domicile"},
  {text : "Préparation de repas à domicile (inclus le temps passé aux courses)"},
  {text : "Livraison de courses à domicile"},
  {text : "Assistance informatique à domicile"},
  {text : "Assistance administrative à domicile"},
  {text : "Soin et promenade d'animaux de compagnie pour personnes dépendantes (hors soins vétérinaires et toilettage)"},
  {text : "Installation Téléassistance et visio-assistance"},
  {text : "Prestation de conduite du véhicule personnel des personnes qui ont un besoin d'une aide temporaire."},
  {text : "Accompagnement des personnes qui ont besoin d'une aide temporaire pour promenades."},
  {text : "Aide à la mobilité et transport, actes de la vie courante."},
  {text : "Coordination et délivrance des services à la personne."},
  {text : "Accompagnement des enfants de plus de 3 ans en dehors de leur domicile."}
]

export default function Activites() {
    return (
      <div className="bg-sky-100" id="activities">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-black">
          L'Association dispose d'une déclaration Services A la Personne délivrée par la Préfecture de la Savoie pour une durée illimitée dans le temps au niveau national permettant d'intervenir sur toute la France et les DOM TOM pour des prestations de services à la vie quotidienne et de services à la famille. Les activités déclarées par l'Association PRESTAT'AIR sont les suivantes :          
          </p>
          <div className="mt-6 grid grid-cols-3 gap-0.5 lg:mt-8">
            <div className="contents">
              {
                activities.map((item)=> (
                  <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer rounded-full">
                    <p key={item.text} className="font-medium text-blue-900 hover:text-gray-900 text-lg">
                      {item.text}
                    </p>
                  </div>
                ))
              }
            </div>
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
                <p>Petits travaux de jardinage et bricolage</p>
            </div>
            <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Garde d'enfant(s) de plus de 3 ans à domicile. Soutien scolaire ou cours à domicile</p>
            </div>
            <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Préparation de repas à domicile (inclus le temps passé aux courses)</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Livraison de courses à domicile</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Assistance informatique à domicile</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Assistance administrative à domicile</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Soin et promenade d'animaux de compagnie pour personnes dépendantes (hors soins vétérinaires et toilettage)</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Installation Téléassistance et visio-assistance</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Prestation de conduite du véhicule personnel des personnes qui ont un besoin d'une aide temporaire.</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Accompagnement des personnes qui ont besoin d'une aide temporaire pour promenades.</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Aide à la mobilité et transport, actes de la vie courante.</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Coordination et délivrance des services à la personne.</p>
            </div> */}
            {/* <div className="col-span-1 flex justify-center bg-sky-100 py-8 px-8 hover:bg-white cursor-pointer">
              <p>Accompagnement des enfants de plus de 3 ans en dehors de leur domicile.</p>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
  