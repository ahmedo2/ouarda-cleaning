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
              <p><i className='fa fa-map-marker-alt' />123 Street, New York, USA</p>
              <p><i className='fa fa-phone-alt' />+012 345 67890</p>
              <p><i className='fa fa-envelope' />contact@ouardanettoyage.com</p>
              <div className='footer-social'>
                <a href><i className='fab fa-facebook-f' /></a>
                <a href><i className='fab fa-instagram' /></a>
                <a href><i className='fab fa-linkedin-in' /></a>
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
      {/* <div className='container footer-menu'>
        <div className='f-menu'>
          <a href>Terms of use</a>
          <a href>Privacy policy</a>
          <a href>Cookies</a>
          <a href>Help &amp; FQAs</a>
          <a href>Contact us</a>
        </div>
      </div> */}
      <div className='container copyright'>
        <div className='row'>
          <div className='col-md-6'>
            <p>© {new Date().getFullYear()}<a href='https://ouardanettoyage.com'></a>, Tous droits réservés.</p>
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
