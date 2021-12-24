import React from 'react';
import AboutPart from '../components/About';
import Footer from '../components/Footer';
import Headre from '../components/Headre';
import { Link } from 'react-router-dom';
import about_img from '../assets/img/about.jpg';

function About() {
  return (
    <>
      <Headre />
      <div className='container card aprops'>
        <h2>A PROPOS DE NOUS</h2>
        <p>
          Apres 18 ans déxperiense de EL Hassan Hajaoui dans le domaine de nettoyage a LA HOLLAND.   
          la societe OUARDA NETTOYAGE a ete cree en 2015 par lui au Maroc.
          OUARDA NETTOYAGE est une société de nettoyage localisée à Kelaat M’gouna province de Tinhgir.. Notre entreprise offre une large gamme de prestations, tant pour les sociétés que pour les particuliers dans le nettoyage
        </p>
      </div>
      <AboutPart />
      <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-6'>
            <div className='about-text'>
              <h2>Histoire de l'entreprise</h2>
              <p>
                Avant de créer d'abord OUARDA NETTOYAGE société de nettoyage le gérant Mr EL HASSAN HAJAOUI commencer en 1998. Il y à 12 ans il à décidé de se lancer dans le service aux entreprises.
                <br />
                Après une formation et des années sur le terrain à nettoyer, le temps était venu de grandir...
                <br />
                Après avoir longuement étudié la meilleur manière pour être compétitif et afin d'offrir un service optimale et proche du client, il s'est concentré sur la formation de ses collègues. Responsable de son chantier, de la qualité du travail, les techniciens sont à l'écoute du client.
                <br />
                Pour nos  société, notre réputation s'est surtout construite par le bouche à oreille et non avec des budgets publicitaires importants.
              </p>
              <Link to='/contact' className='btn'>
                Alors pourquoi ne pas essayer avec nous?
              </Link>
            </div>
          </div>
          <div className='col-lg-5 col-md-6'>
            <div className='about-img'>
              <img src={about_img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default About
