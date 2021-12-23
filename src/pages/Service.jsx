import React from 'react';
import Footer from '../components/Footer';
import Headre from '../components/Headre';

import service_1 from '../assets/img/service-1.jpg';
import service_2 from '../assets/img/service-2.jpg';
import service_3 from '../assets/img/service-3.jpg';
import service_4 from '../assets/img/service-4.jpg';

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
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
                <img src={service_1} alt='Service' />
                <h3>Entretien commun d'immeuble </h3>
                <p>
                  De haut en bas, des paliers à la cave nous nettoyons tout.
                  Paliers, escaliers, ascenseur, hall, cave, compteurs, garage, devanture nous nous occupons de l'entretien à la carte ! 1x, 2x ou 5 x semaines nous sommes là toujours motivé afin de vivre dans un lieu agréable et propre.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_2} alt='Service' />
                <h3>Glass Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_3} alt='Service' />
                <h3>Carpet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_4} alt='Service' />
                <h3>Toilet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare
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
