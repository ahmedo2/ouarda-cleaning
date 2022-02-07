import React from 'react';
import Footer from '../components/Footer';
import Headre from '../components/Headre';

import service_1 from '../assets/img/service-1.jpg';
import service_2 from '../assets/img/service-2.jpg';
import service_3 from '../assets/img/service-3.jpg';
import service_4 from '../assets/img/service-4.jpg';
import service_5 from '../assets/img/service-5.jpg';
import service_6 from '../assets/img/service-6.jpg';
import service_7 from '../assets/img/service-7.jpg';
import service_8 from '../assets/img/service-8.jpg';

function Service() {
  return (
    <div>
      <Headre />
      <div className='service'>
        <div className='container'>
          <div className='section-header'>
            <p>Nos services</p>
            <h2>Fournir des services dans le sud de Maroc</h2>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
                <img className='card-img-top' src={service_1} alt='Service' />
                <h3>Entretien commun d'immeuble </h3>
                <p>
                  De haut en bas, des paliers à la cave nous nettoyons tout.
                  Paliers, escaliers, ascenseur, hall, cave, compteurs, garage, devanture nous nous occupons de l'entretien à la carte ! 1x, 2x ou 5 x semaines nous sommes là toujours motivé afin de vivre dans un lieu agréable et propre.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
              <img className='card-img-top' src={service_2} alt='Service' />
                <h3>Nettoyage bureaux​</h3>
                <p>
                  La journée, le soir, nous venons nettoyer vos espaces de travailles. Sol, sanitaire, cuisine, salle de réunion, bureaux, réfectoire, espace de stockage mais aussi si nécessaire le nettoyage des vitres et la gestion des poubelles hygiéniques.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
              <img className='card-img-top' src={service_3} alt='Service' />
                <h3>Nettoyage de magasins​</h3>
                <p>
                  Tout types de commerces, pharmacies, magasin de peinture, magasin de vêtements, opticien ou alimentation.
                  Les sols, les sanitaires, les vitres, étagères, réserve, comptoirs, frigo, nettoyage avec auto-laveuse. Tôt le matin, la nuit ou en journée.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
              <img className='card-img-top' src={service_4} alt='Service' />
                <h3>Nettoyage parking</h3>
                <p>
                  Nettoyage de parking d'immeuble, de commerce ou de galerie, intérieur ou à l'extérieur au Karcher ou à
                  l'auto-laveuse. En plus nous pouvons nettoyer barrière et portes d'accès, panneaux signalétiques, tuyaux, extincteurs, etc...
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
              <img className='card-img-top' src={service_5} alt='Service' />
                <h3>Nettoyages de vitres</h3>
                <p>
                  Le nettoyages de vos vitres intérieurs et extérieurs + essuyage châssis important pour une belle finition !
                  Pour particuliers, commerces et entreprises.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='service-item'>
              <img className='card-img-top' src={service_6} alt='Service' />
                <h3>Entretien cabinet médicaux</h3>
                <p>
                  L'entretien de cabinet médical ou cabinet dentaire.
                  Nous savons comment faire et aussi ce que nous ne devons pas toucher. 
                  Un entretien qu'il vaut mieux confié à quelqu'un d'expérience.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 my-card'>
              <div className='service-item'>
              <img className='card-img-top' src={service_7} alt='Service' />
                <h3>Conseil organisation nettoyage</h3>
                <p>
                  Vous avez des équipes de nettoyages mais n'y connaissez pas grand chose en gestion du temps, organisation et fréquence de nettoyages, le matériel le plus adéquat ou les produits à utiliser. Nous pouvons venir vous aidez.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 h-200'>
              <div className='service-item'>
              <img className='card-img-top' src={service_8} alt='Service' />
                <h3>Divers nettoyages</h3>
                <p>
                  Un nettoyage d'habitation après travaux ou un déménagement. 
                  <br />
                  Nous pouvons trouver une solution !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service
