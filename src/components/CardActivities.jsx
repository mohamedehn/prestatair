//here we will find a complete list of the activites

import Card from 'react-bootstrap/Card';

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
  
  export default function CardActivites() {
      return (
        <div className="bg-sky-100" id="activities">
          <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
            <p className="text-center text-lg font-semibold text-black">
            L'Association dispose d'une déclaration Services A la Personne délivrée par la Préfecture de la Savoie pour une durée illimitée dans le temps au niveau national permettant d'intervenir sur toute la France et les DOM TOM pour des prestations de services à la vie quotidienne et de services à la famille. Les activités déclarées par l'Association PRESTAT'AIR sont les suivantes :          
            </p>
            <div className="mt-6 grid gap-0.5 lg:mt-8 sm:block md:flex md:flex-wrap">
              <div className="contents">
                {
                  activities.map((item)=> (
                    <Card style={{ width: '18rem' }} className="mx-auto cursor-pointer mb-4 hover:bg-sky-200">
                        <Card.Body>
                            <Card.Text>{item.text}</Card.Text>
                        </Card.Body>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
    