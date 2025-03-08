import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faTty, faClone, faShare, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
export default function Contact() {
  const locations = [
    {
      id: 1,
      name: "India Office",
      lat: 22.3511148,
      lng: 78.6677428,
    },
    {
      id: 2,
      name: "Euro Cyprus Study Visa Centre",
      lat: 23.867997,
      lng: 90.399331,
    },
  ];
  
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };
  
  const center = {
    lat: 10,
    lng: 70, // Adjust based on your locations
  };
  return (
    <>
       <div className="container-fluid contact overflow-hidden py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-primaryy pe-3"> 📞 Connect With Us</h5>
            </div>
              <h1 className="text-anime-style-3" data-cursor="-opaque">Welcome to Team Tide - Your Gateway to Global Opportunities!</h1>
            <p className="mb-5">
                              <br/>Dreaming of studying, working, or settling abroad? At <strong>Team Tide</strong>, we make your international aspirations a reality with hassle-free, reliable, 
                              and efficient visa solutions. Whether you’re a student, professional, entrepreneur, or traveler,
                               we provide end-to-end visa assistance, ensuring a smooth and stress-free process.
            </p>
            <div className="d-flex border-bottom mb-4 pb-4">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fa-4x text-primaryy bg-light p-3 rounded" />
              <div className="ps-3">
                <h5>Location</h5>
                <p>
           India
                </p>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-xl-6">
                <div className="d-flex">
                  <div className="ps-3">
                    <h5 className="mb-3">Quick Contact</h5>
                   
                    <div className="mb-3">
                      <h6 className="mb-0">Email:</h6>
                      <a href="#" className="fs-5 text-primaryy">
                      info@teamtide.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex">
                  
                  <div className="ps-3">
                    <h5 className="mb-3">Opening Hrs</h5>
                    <div className="mb-3">
                      <h6 className="mb-0">Mon - Friday:</h6>
                      <a href="#" className="fs-5 text-primaryy">
                        09.00 am to 07.00 pm
                      </a>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-0">Saturday:</h6>
                      <a href="#" className="fs-5 text-primaryy">
                        10.00 am to 05.00 pm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
            <div className="sub-style">
              <h5 className="sub-title text-primaryy pe-3">Get in Touch with Team Tide</h5>
            </div>
            <h1 className="text-anime-style-3" data-cursor="-opaque">Drop Us a Message </h1>
            <p className="mb-3">
            Have questions or need guidance with your visa application? Our expert team is ready to help and provide personalized support.
             Drop us a message, and we'll get back to you quickly with all the answers you need.
            </p>
            <form>
              <div className="row g-4">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                  <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
               
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: '160px' }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="office pt-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primaryy px-3">Worldwide Presence</h5>
            </div>
            <h1 className="display-5 mb-4">Explore Our Global Presence  Offices Worldwide</h1>
            <p className="mb-0">
            Team Tide stands at the forefront of global visa services, with a dynamic network of offices spanning across key international locations.
             Our expert team, equipped with in-depth knowledge and experience, ensures bespoke solutions for every visa need, no matter where you are. 
             We simplify the complexities of visa applications, delivering seamless, efficient support tailored to your journey.
             With Team Tide by your side, you can count on unparalleled guidance and service wherever life takes you.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="office-item p-4">
                <div className="office-img mb-4">
                  <img
                    src="https://img.freepik.com/free-vector/passport-with-flight-tickets-white-background_1308-90416.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="office-content d-flex flex-column">
                  <h4 className="mb-2">Australia</h4>
                  
                  <a href="/" className="text-muted fs-5 mb-2">
                  info@teamtide.com                   </a>
                  <p className="mb-0">
               India
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="office-item p-4">
                <div className="office-img mb-4">
                  <img
                    src="https://img.freepik.com/premium-photo/registration-tourists-hotel-passport-wooden-reception-desk_128384-825.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="office-content d-flex flex-column">
                  <h4 className="mb-2">Canada</h4>
               
                  <a href="/" className="text-muted fs-5 mb-2">
                  info@teamtide.com      
                  </a>
                  <p className="mb-0">
                India
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="office-item p-4">
                <div className="office-img mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/closed-wallet-with-euros-world-map_23-2148256054.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="office-content d-flex flex-column">
                  <h4 className="mb-2">United Kingdom</h4>
                 
                  <a href="/" className="text-muted fs-5 mb-2">
                  info@teamtide.com      
                  </a>
                  <p className="mb-0">
                 India
                  </p>
                </div>
              </div>  
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="office-item p-4">
                <div className="office-img mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/passport-travel-tickets_53876-20450.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="office-content d-flex flex-column">
                  <h4 className="mb-2">India</h4>

                  <a href="/" className="text-muted fs-5 mb-2">
                  info@teamtide.com    
                  </a>
                  <p className="mb-0">
              India
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-12 pt-5 wow zoomIn" data-wow-delay="0.1s">
              <div className="rounded h-100">
                <iframe
                  className="rounded w-100"
                  style={{ height: '500px' }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14307.5037237859!2d73.0393276!3d26.2981218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418defa4621acf%3A0x8dfc61d82304c812!2sVissa%20elite%20consultancy!5e0!3m2!1sen!2sin!4v1730797844184!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map" 
                ></iframe>
              </div>
            </div> */}
             <LoadScript googleMapsApiKey="AIzaSyA8xz2sKWHZ9wG9LB7BLaK4_EKbfQCJ5qg">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={3}>
        {locations.map((location) => (
          <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} label={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
