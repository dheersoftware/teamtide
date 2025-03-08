import React, { useEffect, useRef, useState } from 'react';
import "./Jobvisa.css"
export default function Jobvisa() {
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
                            Job Visa
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

            <div className="container">
                    <div className="row">
                        <div className="col-12">
                           
                            <div className="terms-content">
                                <div className="terms-text">
                                    <h3>Transform Your Career with Team Tide's Job Visa Services</h3>
                                     <p>At <strong>Team Tide</strong>, we’ve been paving the way for global professionals since 2019, connecting talented individuals to top-tier employers around the world.
                                         Our proven expertise, <strong>deep-rooted industry connections</strong>, and commitment to excellence make us the<strong> trusted choice</strong> for those looking to elevate their careers internationally.
                                         <br/> <br/>With our strategic partnerships and a continually updated list of <strong>premium job opportunities</strong>, we don't just help you secure a job;
                                         we help you embark on a global journey towards<strong> career advancement</strong> and <strong>personal growth</strong>.<br/> <br/><strong>
                                         Join the ranks of successful professionals who have trusted Team Tide to turn their dreams into reality.
                                         </strong>
                                     </p>

                                </div>
                                 <div className="terms-text">
                                      <h3>Why Team Tide is Your Ultimate Job Visa Partner</h3>
                                      <br />
                                      <p>Navigating the complexities of job visas can be daunting. At Team Tide, we provide a streamlined, client-centered approach, ensuring that your journey from job application
                                         to relocation is smooth and efficient. Here's why you can count on us:</p>
                                     <ul>
                                      
                                           
                                            <ul>
                                                <li><strong>Unmatched Industry Expertise:</strong> With years of experience and a trusted presence since 2019, we’ve honed our craft, offering bespoke job visa solutions that address your unique needs.</li>
                                                <li><strong>Exclusive Global Access:</strong>  Thanks to our long-standing relationships with top employers worldwide, we have access to exclusive, high-demand roles that you won’t find anywhere else. 
                                                These opportunities are curated for professionals who are ready to make their mark on the global stage.</li>
                                                <li><strong>Comprehensive, Personalized Support:</strong> From the moment you inquire, we treat you like family. Our team offers tailored advice and hands-on assistance, guiding you through every stage of the visa process.
                                                 No stone is left unturned in ensuring your success.</li>
                                            </ul>
                                      
                                        <li>
                                            <strong>Our Effortless, 4-Step Process to Your International Career</strong>
                                            <p>At Team Tide, we’ve perfected a process that makes obtaining your job visa straightforward, efficient, and stress-free. Here’s how you can get started:</p>
                                            <ul>
                                                <li><strong>Browse Our Curated Job Listings:</strong>We continuously update our job listings with the latest, high-quality roles from trusted employers around the world.
                                                 Whether you're looking for an exciting opportunity in technology, finance, education, healthcare, or engineering, our platform showcases only the most relevant and
                                                  prestigious openings.</li>
                                                <li><strong>Select Your Dream Job</strong>This is your chance to choose the job that perfectly matches your aspirations, skills, and expertise. With a range of roles
                                                 to suit every level of experience—from entry-level to executive positions—we ensure you have access to premium opportunities that align with your career goals.</li>
                                                <li><strong>Secure Your Job Visa</strong> Once you've selected your dream job, our dedicated team of experts will guide you through the entire visa application process.
                                                 With in-depth knowledge of visa regulations in multiple countries, we ensure all documents are in order and your application is processed efficiently.
                                                  From start to finish, we manage the complexities of the process so you can focus on what matters most: your new career.</li>
                                                <li><strong>Relocate and Start Your Global Career</strong>Once your visa is approved, it’s time for the next exciting phase—relocation. Our team offers seamless
                                                 support throughout your move, ensuring a smooth transition as you settle into your new job and new life abroad. From assisting with accommodation to offering cultural 
                                                 insights, we ensure your journey is as stress-free as possible.</li>
                                              
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                 <div className="terms-text">
                                    <h3>Explore a World of Unparalleled Career Opportunities</h3>
                                    <p>Whether you’re looking for a short-term contract or a long-term career shift, Team Tide connects you with exclusive,
                                         high-level job opportunities across the globe. Our listings cover a diverse range of industries, including:</p>
                                   
                                      <ul>
                                            <li><strong>Healthcare & Medicine:</strong> Physicians, nurses, and healthcare administrators in hospitals and clinics worldwide.</li>
                                            <li><strong>Information Technology:</strong> Software developers, IT managers, system analysts, and cybersecurity experts.</li>
                                            <li><strong>Engineering:</strong> Civil, mechanical, electrical, and environmental engineers across leading global companies.</li>
                                             <li><strong>Education: </strong>  Teachers, trainers, and academic coordinators for international institutions.</li>
                                              <li><strong>Hospitality & Tourism</strong> Executive chefs, hotel managers, and tourism experts working with luxury global brands.</li>
                                        </ul>
                                </div>
                                 <div className="terms-text">
                                    <h3>Why Team Tide?</h3>
                                    <br />
                                   <p>At Team Tide, we understand that securing a job abroad is not just about finding any position—it’s about finding the right fit for your professional growth and personal aspirations. Here’s why our clients continue to choose us as their go-to job visa partner:

<br/><br/><strong>Exclusive Access to Premium Job Roles:</strong> We collaborate with only the most reputable employers worldwide, ensuring you have access to exclusive, high-level job opportunities that match your expertise.
<br/><strong>Tailored Visa Solutions:</strong> Each job and each applicant is unique. That’s why we provide customized visa solutions designed to meet the specific needs of your career and destination country.
<br/><strong>Global Expertise, Local Support:</strong> Our team of experts is well-versed in the visa requirements of multiple countries. We offer strategic, expert advice and local insights to ensure that your move is not just successful but seamless.
<br/><strong>Comprehensive Relocation Assistance:</strong> We go beyond the visa application. We provide holistic relocation support, including assistance with accommodation, cultural integration, and settling into your new role.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
