import React, { useEffect,useState } from 'react'; // Import useEffect
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserTie,
    faPassport,
    faComments,
    faBriefcase,
    faCheckCircle,
    faGlobe,
    faGraduationCap,
    faHeart,
    faPlaneDeparture,
    faBuilding,
    faFileAlt,
    faHandshake,
    faSearch,
    faUsers,
    faChartLine,
    faQuestionCircle,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";

const VisaServices = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true, // Only play animations once on initial load
            delay: 100,
        });
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
        <div className="tide-visa-services-page">
          
{/* Breadcrumb Component */}
<div className="tide-breadcrumb-container">
                <div
                    className="tide-breadcrumb-image"
                    style={{ backgroundImage: `url(${breadcrumbImages[currentImageIndex]})` }}
                >
                    <div className="tide-breadcrumb-overlay">
                        <h2 className="tide-breadcrumb-title">
                           Services
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
            {/* About Us Section */}
            <section className="tide-visa-services-about">
                <div className="tide-visa-services-container">
                    <div className="tide-visa-services-about-content" data-aos="fade-right">
                        <h2 className="tide-visa-services-section-title">About Tide Immigration Assistance Services</h2>
                        <p className="tide-visa-services-section-description">
                            At Tide Immigration, we are passionate about helping individuals and businesses achieve their global mobility goals. With years of experience and a deep understanding of immigration assistance laws and procedures, we provide tailored solutions to meet your specific needs.  Our commitment to excellence, integrity, and client satisfaction sets us apart.
                        </p>
                        <p>We believe that everyone deserves the opportunity to explore new horizons, and we are dedicated to making the visa and immigration assistance process as smooth and stress-free as possible.  From initial consultation to final approval, we are with you every step of the way.</p>
                    </div>
                    {/* <div className="tide-visa-services-about-image" data-aos="fade-left">
                        <img src="https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?ga=GA1.1.1425276390.1739774418&semt=ais_hybrid" alt="Immigration Consultants" />
                    </div> */}
                </div>
            </section>

            {/* Core Services Section */}
            <section id="services" className="tide-visa-services-section">
                <div className="tide-visa-services-container">
                    <h2 className="tide-visa-services-section-title" data-aos="zoom-in">Our Core Service Offerings</h2>
                    <p className="tide-visa-services-section-description" data-aos="zoom-in" data-aos-delay="200">
                        We provide a comprehensive range of visa and immigration Assistance services to cater to diverse needs.
                    </p>

                    <div className="tide-visa-services-grid">
                        <div className="tide-visa-service-item" data-aos="fade-up">
                            <FontAwesomeIcon icon={faUserTie} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Skilled Worker Visas</h3>
                            <p className="tide-visa-service-description">
                                Assisting qualified professionals in obtaining visas for employment opportunities worldwide. We handle everything from eligibility assessment to document preparation and application submission.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faPassport} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Business Immigration Assistance</h3>
                            <p className="tide-visa-service-description">
                                Guiding businesses through the complexities of sponsoring foreign workers, including work permits, intra-company transfers, and investor visas.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="200">
                            <FontAwesomeIcon icon={faComments} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Family Sponsorship</h3>
                            <p className="tide-visa-service-description">
                                Helping families reunite by facilitating spousal, parental, and dependent child sponsorship applications.  We provide compassionate and personalized support throughout the process.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="300">
                            <FontAwesomeIcon icon={faBriefcase} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Student Visas</h3>
                            <p className="tide-visa-service-description">
                                Supporting international students in obtaining the necessary visas to pursue their academic goals in various countries.  We advise on application requirements and provide guidance on acceptance procedures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Services Section */}
            <section className="tide-visa-services-expanded">
                <div className="tide-visa-services-container">
                    <h2 className="tide-visa-services-section-title" data-aos="zoom-in">Additional Visa and Immigration Assistance Solutions</h2>
                    <p className="tide-visa-services-section-description" data-aos="zoom-in" data-aos-delay="200">
                        Beyond our core services, we offer specialized solutions to meet your unique circumstances.
                    </p>
                    <div className="tide-visa-services-grid">
                        <div className="tide-visa-service-item" data-aos="fade-up">
                            <FontAwesomeIcon icon={faGlobe} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Permanent Residency</h3>
                            <p className="tide-visa-service-description">
                                Assisting individuals in obtaining permanent residency status in their desired country, providing long-term security and stability.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faGraduationCap} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Citizenship Applications</h3>
                            <p className="tide-visa-service-description">
                                Guiding eligible individuals through the process of applying for citizenship, helping them achieve their dreams of becoming full citizens.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="200">
                            <FontAwesomeIcon icon={faHeart} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Visitor Visas</h3>
                            <p className="tide-visa-service-description">
                                Facilitating visitor visas for tourism, business travel, and family visits, ensuring a smooth and hassle-free travel experience.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="300">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Immigration Assistance Appeals</h3>
                            <p className="tide-visa-service-description">
                                Providing expert representation and support for individuals facing immigration assistance appeals, fighting for their rights and protecting their futures.
                            </p>
                        </div>
                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="400">
                            <FontAwesomeIcon icon={faBuilding} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Corporate Immigration Assistance Solutions</h3>
                            <p className="tide-visa-service-description">
                                Tailored immigration assistance solutions for businesses of all sizes, ensuring compliance and facilitating the seamless transfer of talent across borders.
                            </p>
                        </div>

                        <div className="tide-visa-service-item" data-aos="fade-up" data-aos-delay="500">
                            <FontAwesomeIcon icon={faFileAlt} className="tide-visa-service-icon" />
                            <h3 className="tide-visa-service-name">Document Preparation & Review</h3>
                            <p className="tide-visa-service-description">
                                Meticulous document preparation and review services to ensure accuracy and completeness, maximizing the chances of a successful application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="tide-visa-services-details">
                <div className="tide-visa-services-container">
                    <h2 className="tide-visa-services-section-title" data-aos="zoom-in">Why Choose Tide Immigration assistance?</h2>
                    <p className="tide-visa-services-section-description" data-aos="zoom-in" data-aos-delay="200">
                        We go the extra mile to provide exceptional service and achieve positive outcomes for our clients.
                    </p>
                    <div className="tide-visa-services-reasons">
                        <div className="tide-visa-services-reason" data-aos="fade-up">
                            <FontAwesomeIcon icon={faCheckCircle} className="tide-visa-services-reason-icon" />
                            <h3>Proven Expertise</h3>
                            <p>Our team comprises experienced immigration assistance consultants with in-depth knowledge of global visa regulations.</p>
                        </div>
                        <div className="tide-visa-services-reason" data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faHandshake} className="tide-visa-services-reason-icon" />
                            <h3>Personalized Solutions</h3>
                            <p>We understand that every case is unique, and we tailor our services to meet your specific circumstances and goals.</p>
                        </div>
                        <div className="tide-visa-services-reason" data-aos="fade-up" data-aos-delay="200">
                            <FontAwesomeIcon icon={faSearch} className="tide-visa-services-reason-icon" />
                            <h3>Transparent Process</h3>
                            <p>We keep you informed every step of the way, providing clear communication and honest advice throughout the process.</p>
                        </div>
                        <div className="tide-visa-services-reason" data-aos="fade-up" data-aos-delay="300">
                            <FontAwesomeIcon icon={faChartLine} className="tide-visa-services-reason-icon" />
                            <h3>Results-Oriented</h3>
                            <p>We are committed to achieving the best possible outcome for your case, leveraging our expertise and resources to maximize your chances of success.</p>
                        </div>
                        <div className="tide-visa-services-reason" data-aos="fade-up" data-aos-delay="400">
                            <FontAwesomeIcon icon={faUsers} className="tide-visa-services-reason-icon" />
                            <h3>Client-Centric Approach</h3>
                            <p>Your satisfaction is our top priority. We provide dedicated support and guidance, ensuring a smooth and stress-free experience.</p>
                        </div>
                        <div className="tide-visa-services-reason" data-aos="fade-up" data-aos-delay="500">
                            <FontAwesomeIcon icon={faThumbsUp} className="tide-visa-services-reason-icon" />
                            <h3>Ethical and Compliant</h3>
                            <p>We adhere to the highest ethical standards and ensure full compliance with all applicable immigration assistance laws and regulations.</p>
                        </div>
                    </div>
                    <p className="tide-visa-services-more-info" data-aos="fade-up">
                        Ready to take the next step? Contact us today for a free consultation!
                    </p>
                </div>
            </section>

        </div>
    );
};

export default VisaServices;