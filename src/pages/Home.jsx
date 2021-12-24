import Footer from '../components/Footer';
import Headre from '../components/Headre';
import About from '../components/About';
import { Link } from "react-router-dom";

import service_1 from '../assets/img/service-1.jpg';
import service_2 from '../assets/img/service-2.jpg';
import service_3 from '../assets/img/service-3.jpg';
import service_4 from '../assets/img/service-4.jpg';

function Home() {
  return (
    <div className='wrapper'>
      <Headre />
      <About />
      {/* Service */}
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
                <h3>Entretien commun d'immeuble</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
                <img src={service_1} alt='Service' />
                <h3>Nettoyage bureaux</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_2} alt='Service' />
                <h3>Nettoyage de magasins</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_3} alt='Service' />
                <h3>Nettoyages de vitres</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_4} alt='Service' />
                <h3>Entretien cabinet médicaux</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_4} alt='Service' />
                <h3>Nettoyage parking</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_4} alt='Service' />
                <h3>Conseil organisation nettoyage</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='service-item'>
              <img src={service_4} alt='Service' />
                <h3>Divers nettoyages</h3>
                <Link to='/service' className='btn'>Apprendre encore plus</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service */}
      <div className='feature'>
        <div className='container'>
          <h1>Pourquoi nous choisir?</h1>
          <div className='row'>
            <div className='col-md-4'>
              <div className='section-header left'>
                <h2>Nettoyeurs experts et années d'expérience</h2>
              </div>
              <p>
                LES AVANTAGES OUARDA NETTOYAGE
              </p>
              <Link to='/about' className='btn'>Apprendre encore plus</Link>
            </div>
            <div className='col-md-8'>
              <div className='row align-items-center feature-item'>
                <div className='col-1'>
                  <i className='fas fa-arrow-alt-circle-right' />
                </div>
                <div className='col-11'>
                  <p>
                    Service client, un seul interlocuteur le patron qui répond aux demandes immédiatement.
                  </p>
                </div>
              </div>
              <div className='right-items'>
                <div className='row align-items-center feature-item'>
                  <div className='col-1'>
                    <i className='fas fa-arrow-alt-circle-right' />
                  </div>
                  <div className='col-11'>
                    <p>
                      Toujours le même personnel formé et responsable de la qualité et du contact client.
                    </p>
                  </div>
                </div>
                <div className='row align-items-center feature-item'>
                  <div className='col-1'>
                    <i className='fas fa-arrow-alt-circle-right' />
                  </div>
                  <div className='col-11'>
                    <p>
                      Afin d'offrir le meilleur qualité/prix nous améliorons la qualité de travail mais aussi nous calculons nos frais au plus bas.
                    </p>
                  </div>
                </div>
                <div className='row align-items-center feature-item'>
                  <div className='col-1'>
                    <i className='fas fa-arrow-alt-circle-right' />
                  </div>
                  <div className='col-11'>
                    <p>
                      Le gérant ayant lui-même travaillé comme technicien, organise au mieux la méthode de travail. Parfait bilingue  Néerlandais. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <a href='#' className='back-to-top'><i className='fa fa-chevron-up' /></a> */}
  </div>
  );
}

export default Home;
