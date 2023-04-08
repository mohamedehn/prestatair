import React from "react";
import Activities from "./Activities";
import jardin from "../assets/jardin.png"


const DisplayActivities = () =>{
    return(
        <div className="w-full sm:pt-[50px]" id="activities">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <div className="mt-2 text-2xl font-semibold leading-6 tracking-tight text-[#225a65] sm:text-4xl">
                Nous disposons d'une déclaration Services à la personne et celle-ci nous permet d'intervenir sur tout le territoire national 
                pour des prestations de services à la vie quotidienne et de services à la famille.
                <p className="mt-2 py-14 text-2xl font-semibold leading-6 tracking-tight text-gray-900 sm:text-4xl">Les activités déclarées 
                par l'Association PRESTAT'AIR sont les suivantes : </p> 
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Activities activities="Entretien de la maison et travaux ménagers" img={jardin} />
                    <Activities activities="Petits travaux de jardinage et bricolage" img={jardin} />
                    <Activities activities="Garde d'enfant(s) de plus de 3 ans à domicile" img={jardin} />
                    <Activities activities="Préparation de repas à domicile (inclus le temps passé aux courses)" img={jardin} />
                    <Activities activities="Soutien scolaire ou cours à domicile" img={jardin} />
                    <Activities activities="Préparation de repas à domicile (inclus le temps passé aux courses)" img={jardin} />
                    <Activities activities="Livraison de courses à domicile" img={jardin} />
                    <Activities activities="Préparation de repas à domicile" img={jardin} />
                    <Activities activities="Assistance informatique à domicile" img={jardin} />
                    <Activities activities="Assistance administrative à domicile" img={jardin} />
                    <Activities activities="Soin et promenade d'animaux de compagnie pour personnes dépendantes 
                    (hors soins vétérinaires et toilettage)," img={jardin} />
                    <Activities activities="Accompagnement des enfants de plus de 3 ans en dehors de leur domicile," img={jardin} />
                    <Activities activities="Installation Téléassistance et Visio-assistance" img={jardin} />
                    <Activities activities="Prestation de conduite du véhicule personnel des personnes qui ont un besoin d'une aide temporaire" img={jardin} />
                    <Activities activities="Accompagnement des personnes qui ont besoin d'une aide temporaire pour promenades" img={jardin} />
                    <Activities activities="Aide à la mobilité et transport, actes de la vie courante" img={jardin} />
                    <Activities activities="Coordination et délivrance des services à la personne" img={jardin} />
                </div>
            </div>
        </div>
    )
}

export default DisplayActivities;