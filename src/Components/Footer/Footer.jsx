import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'; // Import Link
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../Navbar/LogoTeamTide.png"
function Footer() {
  useEffect(() => {
    // JavaScript for Visa Card Floating Effect
    const createVisaCard = () => {
      const visaCard = document.createElement("div");
      visaCard.classList.add("visa-card");
      visaCard.style.left = `${Math.random() * 100}vw`;
      visaCard.style.animationDuration = `${Math.random() * 5 + 3}s`; // Vary the speed
      visaCard.style.opacity = `${Math.random() * 0.5 + 0.2}`; // Vary opacity

      // Ensure .footer-top exists before appending
      const footerTop = document.querySelector(".footer-top");
      if (footerTop) {
        footerTop.appendChild(visaCard);

        visaCard.addEventListener("animationend", () => {
          visaCard.remove();
        });
      }
    };

    // Add Visa cards
    const visaCardInterval = setInterval(createVisaCard, 300);

    // JavaScript for Particle Effect
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}vw`; // Random X position
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed

      // Ensure .footer-top exists before appending
      const footerTop = document.querySelector(".footer-top");
      if (footerTop) {
        footerTop.appendChild(particle);

        particle.addEventListener("animationend", () => {
          particle.remove();
        });
      }
    };

    const particleInterval = setInterval(createParticle, 200);

    return () => {
      clearInterval(visaCardInterval);
      clearInterval(particleInterval);
    };
  }, []);
  const logos = [
    "https://cdn.worldvectorlogo.com/logos/calvin-klein.svg",
    "https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/ngk-3.svg",
    "https://cdn.worldvectorlogo.com/logos/asus-rog-1.svg",
    "https://cdn.worldvectorlogo.com/logos/nippon-sanso.svg",
    "https://cdn.worldvectorlogo.com/logos/comdisco.svg",
    "https://cdn.worldvectorlogo.com/logos/aricoin-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/pse-1.svg",
    "https://cdn.worldvectorlogo.com/logos/scien.svg",
    "https://cdn.worldvectorlogo.com/logos/e-online.svg",
    "https://cdn.worldvectorlogo.com/logos/yourhomedirect.svg",
    "https://cdn.worldvectorlogo.com/logos/nextra-3.svg",
  ];
  

  return (
    <>
      <section className="logoMarqueeSection">
      <div className="container" id="logoMarqueeSection">
        <div className="default-content-container flex items-center">
          <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
            <div className="marquee" style={{ animationDuration: '57s' }}>
              {logos.map((logo, index) => (
                <a key={index} href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`} //Always use descriptive ALT text.
                    title=""
                    className="marqueelogo"
                    style={{ width: 'auto', maxWidth: 'none' }}
                  />
                </a>
              ))}
            </div>
            <div className="marquee" style={{ animationDuration: '57s' }}>
              {logos.map((logo, index) => (
                <a key={`${index}-duplicate`} href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`} //Always use descriptive ALT text.
                    title=""
                    className="marqueelogo"
                    style={{ width: 'auto', maxWidth: 'none' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
                <div className="footer-top">
                  </div>
            <div className="footer-content">  {/* This is where particles and Visa cards now go */}
                <div className="footer-left">
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/013/787/630/small/commercial-jet-plane-airliner-flying-png.png" alt="logo"  />
                    <p className="quote">
                        <i>"The journey of a thousand miles begins with a single visa."</i>
                    </p>
                    <p>Your Trusted Visa & Immigration Consultant Support</p> {/* Keep original description */}
                </div>
                <div className="footer-middle">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/touristvisa">Tourist Visa</Link></li> {/* Example Privacy Policy Link */}
                        <li><Link to="/jobvisa">Job Visa</Link></li>   {/* Example Terms of Service Link */}
                        <li><Link to="/studyvisa">Study Visa</Link></li>   {/* Example Terms of Service Link */}

                    </ul>
                </div>

                <div className="footer-right">
                    <h2 className="footer-title">Contact Us</h2>
                    <p>Email: info@teamtide.com</p>      {/* Replace with actual email */}


                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <FaFacebook />
                        </a>
                      
                        <a href="#" className="social-icon">
                            <FaInstagram />
                        </a>
                        <a href="#" className="social-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                <Link className="logo-footer" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">© 2025 Team Tide. All rights reserved. </p>
                <p className="designedBy">@Designed By <a target="blank" href="https://dheersoftwaresolutions.com/">Dheer Software Solutions.</a></p>
            </div>
          
        </footer>
    </>
  );
}

export default Footer;