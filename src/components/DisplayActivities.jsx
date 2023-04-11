import React from "react";
import Activities from "./Activities";
import menage from "../assets/activities/menage.png"
import repassage from "../assets/activities/repasser.png"
import jardinage from "../assets/activities/jardinage.png"
import renovation from "../assets/activities/renovation.png"
import garde from "../assets/activities/garde.png"
import enfants from "../assets/activities/enfants.png"
import devoirs from "../assets/activities/devoirs.png"
import courses from '../assets/activities/courses.png'
import chef from '../assets/activities/chef.png'
import marche from "../assets/activities/marche.png"
import voiture from "../assets/activities/voiture.png"
import clients from "../assets/activities/clients.png"
import formulaire from "../assets/activities/formulaire.png"
import chien from "../assets/activities/chien.png"



const DisplayActivities = () =>{
    return(
        <div className="w-full sm:pt-[50px]" id="activities">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <div className="mt-2 text-2xl font-semibold leading-6 tracking-tight text-[#225a65] sm:text-4xl pb-24">
                    Nous vous proposons les prestations suivantes :
                {/* <p className="mt-2 py-14 text-2xl font-semibold leading-6 tracking-tight text-gray-900 sm:text-4xl">Les activités déclarées 
                par l'Association PRESTAT'AIR sont les suivantes : </p>  */}
                </div>
                <div className="block md:flex justify-between flex-wrap md:gap-10 gap-32">
                    <Activities activities="Entretien de la maison" img={menage} />
                    <Activities activities="Repassage à domicile" img={repassage} />
                    <Activities activities="Petits travaux de jardinage" img={jardinage} />
                    <Activities activities="Petits travaux de bricolage" img={renovation} />
                    <Activities activities="Garde d’enfants de plus de trois ans, à domicile " img={garde} />
                    <Activities activities="Accompagnement des enfants de plus de trois ans " img={enfants} />
                    <Activities activities="Soutien scolaire" img={devoirs} />
                    <Activities activities="Livraison de courses" img={courses} />
                    <Activities activities="Préparation de repas à domicile " img={chef} />
                    <Activities activities="Accompagnement non véhiculé" img={marche} />
                    <Activities activities="Accompagnement véhiculé" img={voiture} />
                    <Activities activities="Assistance informatique" img={clients} />
                    <Activities activities="Assistance administrative" img={formulaire} />
                    <Activities activities="Soin et promenade d’animaux de compagnie " img={chien} />
                </div>
            </div>
        </div>
    )
}

export default DisplayActivities;

//grid md:grid-cols-5 md:gap-10 gap-32 object-cover