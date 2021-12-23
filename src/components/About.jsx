import React from 'react'
import { Link } from 'react-router-dom';
import about_img from '../assets/img/about.jpg';

function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6'>
            <div className='about-img'>
              <img src={about_img} alt='' />
            </div>
          </div>
          <div className='col-lg-7 col-md-6'>
            <div className='about-text'>
              <h2><span>+18</span> ans déxperiense</h2>
              <p>
                OUARDA NETTOYAGE vous proposons un service complet et professionnel de nettoyages.
                En 18 ans nous avons constamment amélioré notre service à la clientèle, nos techniques de nettoyages et avons crées des équipes de nettoyages responsables, sympathiques et professionnelles. Nos points fort, réactivité et rapidité afin d'offrir un vrai service à nos clients et un rapport qualité/prix imbattable!
              </p>
              <Link to='/about' className='btn'>
                Apprendre encore plus...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
