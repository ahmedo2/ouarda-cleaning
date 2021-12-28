import React from 'react'
import Footer from '../components/Footer'
import Headre from '../components/Headre'

function Contact() {
  return (
    <div>
      <Headre />
      <div className="contact">
        <div className="container">
          <div className="section-header">
            <p>Contact Nous</p>
            <h2>Trouvez votre réponse / Envoyez un message</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom Complet"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Votre E-mail"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Message"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button className="btn" type="submit">
                      Envoyez...
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
