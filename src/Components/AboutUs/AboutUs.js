import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faStar } from '@fortawesome/free-solid-svg-icons';import './About.css';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        headingRef.current.classList.add('animate-heading');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    // Breadcrumb Image Rotation Logic
    const breadcrumbImages = [
        "https://img.freepik.com/free-vector/travel-around-world_24877-52015.jpg?ga=GA1.1.1425276390.1739774418&semt=ais_hybrid",
        "https://img.freepik.com/free-vector/two-passports-with-boarding-passes-tickets-realistic-set-international-air-travel-agency-advertisement-poster_1284-17605.jpg?ga=GA1.1.1425276390.1739774418",
        "https://img.freepik.com/free-vector/man-holding-passport-airport_1212-674.jpg?ga=GA1.1.1425276390.1739774418",
        "https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % breadcrumbImages.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [breadcrumbImages.length]);

    return (
        <>
            {/* Breadcrumb Component */}
            <div className="tide-breadcrumb-container">
                <div
                    className="tide-breadcrumb-image"
                    style={{ backgroundImage: `url(${breadcrumbImages[currentImageIndex]})` }}
                >
                    <div className="tide-breadcrumb-overlay">
                        <h2 className="tide-breadcrumb-title">
                            About Us
                        </h2>
                        <p className="tide-breadcrumb-tagline">
                            Empowering Global Journeys.
                        </p>
                        <p className="tide-breadcrumb-description">
                            Discover our story, mission, and commitment to providing seamless visa solutions.
                        </p>
                      
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="tide-about-section" ref={sectionRef}>
                <div className="tide-container">
                    <div className="tide-content-wrapper">
                        <div className="tide-text-content">
                            <h3 className="wow fadeInUp" ref={headingRef}>Discover Team Tide  </h3>
                            <h1>  Meet the Experts Behind Team Tide
                            Driven by Passion, Defined by Excellence</h1>
                            <div className="tide-features">
                                <div className="tide-feature-item">
                                    <FontAwesomeIcon icon={faBullseye} className="tide-feature-icon" />
                                    Mission & Vision
                                </div>
                                <div className="tide-feature-item">
                                    <FontAwesomeIcon icon={faStar} className="tide-feature-icon" />
                                    Customer-Centric Approach 
                                </div>
                            </div>
                            <p className="tide-funky-paragraph">
                            At Team Tide, we believe that your journey toward global opportunities transcends mere visa applications and job placements.
                             Our mission is to be the catalyst for your ambitions, providing exceptional travel and immigration assistance solutions that propel 
                             you toward success. From the moment you engage with us, you’re not just another client you’re part of the Team Tide family.
                              With our personalized approach, profound industry expertise, and unwavering commitment, we ensure a seamless, efficient, 
                              and empowering experience at every step. <br /><br />
                              Our mission is rooted in our unwavering desire to unlock global opportunities for individuals, enabling them to pursue 
                              their dreams without boundaries. Whether it's securing a student visa, facilitating global job placements, or crafting
                               the perfect travel itinerary, our approach goes beyond transactional services. We aim to empower you, crafting pathways 
                               to success and ensuring that every experience is meticulously tailored to your unique goals. With Team Tide, your 
                               aspirations are never out of reach.
                            </p>

                        </div>

                        <div className="tide-image-grid">
                            <img src="https://img.freepik.com/free-vector/travel-around-world_24877-52015.jpg?ga=GA1.1.1425276390.1739774418&semt=ais_hybrid" alt=" 1" className="tide-image-grid-item tide-image-hover-effect" />
                            <img src="https://img.freepik.com/free-vector/two-passports-with-boarding-passes-tickets-realistic-set-international-air-travel-agency-advertisement-poster_1284-17605.jpg?ga=GA1.1.1425276390.1739774418" alt=" 2" className="tide-image-grid-item tide-image-hover-effect" />
                            <img src="https://img.freepik.com/free-vector/man-holding-passport-airport_1212-674.jpg?ga=GA1.1.1425276390.1739774418" alt=" 3" className="tide-image-grid-item tide-image-hover-effect" />
                            <img src="https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418" alt=" 4" className="tide-image-grid-item tide-image-hover-effect" />
                        </div>
                    </div>

                </div>
            </section>
            <section className="tide-company-section">
            <div className="tide-company-container tide-new-layout">

            <div className="tide-company-images">
                    <div className="tide-company-image-wrapper">
                        <img src="https://img.freepik.com/free-photo/man-preparing-travel_53876-14615.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 1" className="tide-company-image tide-rounded-image" />
                        <img src="https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 3" className="tide-company-image tide-rounded-image" />
                    </div>
                    <div className="tide-company-image-wrapper">
                        <img src="https://img.freepik.com/premium-photo/world-travel-earth-airline-tickets-passport-3d_505080-597.jpg?ga=GA1.1.1425276390.1739774418  " alt="Company 4" className="tide-company-image tide-rounded-image" />
                    <img src="https://img.freepik.com/free-photo/top-view-tickets-little-plane_52683-136433.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 2" className="tide-company-image tide-rounded-image" />
                    </div>
                    
                </div>
                <div className="tide-company-text">
                    <h2 className="tide-company-title">Visionary Thinking, Limitless Horizons</h2>
                    <h3 className="tide-company-providing">Breaking Barriers for Global  <span>Mobility</span></h3>
                    <p className="tide-company-description">At Team Tide, we are not constrained by the conventional. Our vision is to create a 
                      world where international mobility is effortless, boundless, and accessible to all. We envision a future where people can 
                      connect with global opportunities seamlessly, with the confidence that the right support and guidance is always within reach. 
                      Our global network ensures that we are always positioned to help you achieve your goals whether you wish to study in Europe,
                       work in Asia, or explore the world</p>

                  
                </div>

            </div>
            <div className="tide-company-container tide-new-layout">


    <div className="tide-company-text">
        <h2 className="tide-company-title">Team Tide: Where Expertise Meets Passion</h2>
        <h3 className="tide-company-providing">Global Reach, Local Expertise, <br/><span> Real Results</span></h3>
        <p className="tide-company-description">From our head office in India to our offices in Cyprus, Singapore, and other strategically located regions, Team Tide stands as a global beacon of expertise in visa services, immigration assistance and job placement. With our expansive international network, we deliver not only localized knowledge but also the global insight you need to succeed. Whether you're pursuing education, seeking career advancement, or exploring global travel, we are here to ensure that your journey is both smooth and successful.

We have built strong, successful relationships since 2019, working passionately in this domain. Our deep connections with universities, businesses, and institutions across various countries and industries give us a unique advantage. We are proud to offer you exclusive access to a vast array of opportunities in fields ranging from higher education to global employment, ensuring that you have the resources and expertise to make the best choices for your future.</p>

      
    </div>
    <div className="tide-company-images">
        <div className="tide-company-image-wrapper">
            <img src="https://img.freepik.com/free-photo/man-preparing-travel_53876-14615.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 1" className="tide-company-image tide-rounded-image" />
            <img src="https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 3" className="tide-company-image tide-rounded-image" />
        </div>
        <div className="tide-company-image-wrapper">
            <img src="https://img.freepik.com/premium-photo/world-travel-earth-airline-tickets-passport-3d_505080-597.jpg?ga=GA1.1.1425276390.1739774418  " alt="Company 4" className="tide-company-image tide-rounded-image" />
        <img src="https://img.freepik.com/free-photo/top-view-tickets-little-plane_52683-136433.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 2" className="tide-company-image tide-rounded-image" />
        </div>
        
    </div>
</div>
<div className="tide-company-container tide-new-layout">

<div className="tide-company-images">
        <div className="tide-company-image-wrapper">
            <img src="https://img.freepik.com/free-photo/man-preparing-travel_53876-14615.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 1" className="tide-company-image tide-rounded-image" />
            <img src="https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 3" className="tide-company-image tide-rounded-image" />
        </div>
        <div className="tide-company-image-wrapper">
            <img src="https://img.freepik.com/premium-photo/world-travel-earth-airline-tickets-passport-3d_505080-597.jpg?ga=GA1.1.1425276390.1739774418  " alt="Company 4" className="tide-company-image tide-rounded-image" />
        <img src="https://img.freepik.com/free-photo/top-view-tickets-little-plane_52683-136433.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 2" className="tide-company-image tide-rounded-image" />
        </div>
        
    </div>
    <div className="tide-company-text">
        <h2 className="tide-company-title">Our Mission: Unlocking Global Potential, One Opportunity at a Time</h2>
        <h3 className="tide-company-providing">Shaping Your Future with Expertise and  <span>Vision</span></h3>
        <p className="tide-company-description">Our mission is rooted in our unwavering desire to unlock global opportunities for individuals, 
          enabling them to pursue their dreams without boundaries. Whether it's securing a student visa, facilitating global job placements, or 
          crafting the perfect travel itinerary, our approach goes beyond transactional services. We aim to empower you, crafting pathways to
           success and ensuring that every experience is meticulously tailored to your unique goals. With Team Tide, 
           your aspirations are never out of reach.</p>

      
    </div>

</div>
<div className="tide-company-container tide-new-layout">


<div className="tide-company-text">
    <h2 className="tide-company-title">Our Values: Excellence, Integrity, and Family-Centric Service</h2>
    <h3 className="tide-company-providing">Built on Trust, Driven by  <span>Excellence</span></h3>
    <p className="tide-company-description">What distinguishes Team Tide is our uncompromising commitment to excellence. We operate with integrity at every level, ensuring that our services are both transparent and trustworthy. Beyond our professionalism, we cultivate a culture that feels more like a family. At Team Tide, you are not just a client you are a valued member of our community, and we are dedicated to seeing you thrive. Our customer-centric philosophy drives us to create lasting relationships founded on trust, respect, and support.

</p>

  
</div>
<div className="tide-company-images">
    <div className="tide-company-image-wrapper">
        <img src="https://img.freepik.com/free-photo/man-preparing-travel_53876-14615.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 1" className="tide-company-image tide-rounded-image" />
        <img src="https://img.freepik.com/free-vector/travel-passport-concept-illustration_114360-25605.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 3" className="tide-company-image tide-rounded-image" />
    </div>
    <div className="tide-company-image-wrapper">
        <img src="https://img.freepik.com/premium-photo/world-travel-earth-airline-tickets-passport-3d_505080-597.jpg?ga=GA1.1.1425276390.1739774418  " alt="Company 4" className="tide-company-image tide-rounded-image" />
    <img src="https://img.freepik.com/free-photo/top-view-tickets-little-plane_52683-136433.jpg?ga=GA1.1.1425276390.1739774418" alt="Company 2" className="tide-company-image tide-rounded-image" />
    </div>
    
</div>
</div>
        </section>
        </>
    );
};

export default AboutSection;