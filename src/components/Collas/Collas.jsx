import React from 'react';

const Collas = () => {
  return (
    <>
      <section>
        <div className="Collas bg-light p-5">
          <div className="about-content text-center">
            <a href="#" className="text-dark">
              Home
              <span className="text-success">
                / Contact Us
              </span>
              <h1>
                CONTACT US
              </h1>
            </a>
          </div>
        </div>

        <div className="other">
          <div className="container">
            <h2 className="pt-5 text-center mb-4">Let us know what you have in mind</h2>
            <p className="text-center mb-5 ">Visit our shop to see amazing creations from our designers</p>
          </div>
        </div>

        <div className="p-4">
          <div className="row">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756716!2d-0.26640578112070873!3d51.528739804788714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1698207939820!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collas;
