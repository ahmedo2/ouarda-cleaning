import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='footer-contact'>
              <h2>Entrer en contact</h2>
              <p><i className='fa fa-map-marker-alt' />Kelaat M’gouna, Tinghir</p>
              <p><i className='fa fa-phone-alt' />+31 6 6811 6900</p>
              <p><i className='fa fa-envelope' />info@ouardanettoyage.com</p>
              <div className='footer-social'>
                <a href={"https://www.facebook.com/"} target='_blank' rel="noreferrer"><i className='fab fa-facebook-f' /></a>
                <a href={"https://www.instagram.com/"} target='_blank' rel="noreferrer"><i className='fab fa-instagram' /></a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='footer-link'>
              <h2>Lien Utile</h2>
              <Link to='/' className='nav-item nav-link active'>
                Accueil
              </Link>
              <Link to='/about' className='nav-item nav-link'>
                A Propos
              </Link>
              <Link to='/service' className='nav-item nav-link'>
                Service
              </Link>
              <Link to='/contact' className='nav-item nav-link'>
                Contact
              </Link>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='footer-form'>
              <h2 className='h2'>Avez-vous des questions</h2>
              <br />
              <div>
                <Link to='/contact' className='btn'>
                  Contactez-Nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container copyright'>
        <div className='row'>
          <div className='col-md-6'>
            <p>© {new Date().getFullYear()} Tous droits réservés.</p>
          </div>
          <div className='col-md-6'>
            <p>Designed By <a href='https://www.linkedin.com/in/ahmed-oublihi/' target='blank'>Ahmed</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
