import React from "react";
import { NavLink } from "react-router-dom";

function Confirmation (){

    
    
    return(
        <div className="bg-[#adccd0] h-screen text-justify">
            <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none sm:mx-auto sm:max-w-xl sm:text-lg md:text-xl lg:mx-0 
            text-justify"> 
                <div>
                    <p className="text-gray-900 font-semibold flex mx-auto w-auto justify-center pb-10 text-2xl pt-24">
                        Formulaire envoyé avec succès !
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6">
                        Merci d'avoir pris le temps de nous contacter. Nous avons bien reçu votre message et nous y répondrons dans 
                        les plus brefs délais.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6">
                        En attendant, n'hésitez pas à parcourir notre site pour découvrir nos services.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6">
                        Cliquez&nbsp;<NavLink to="/">ici</NavLink>&nbsp;pour retourner à l'accueil.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6">A bientôt !</p>
                </div>
            </div>
        </div>
    )
};

export default Confirmation;