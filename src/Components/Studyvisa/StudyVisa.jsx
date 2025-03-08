import React, { useEffect, useState } from 'react';
import "../JobVisa/Jobvisa.css"

export default function StudyVisa() {
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
        }, 3000); // Change image every 3 seconds

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
                            Study Visa
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
                                <h3>Your Gateway to Global Education: Team Tide’s Comprehensive Study Visa Services</h3>
                                <p>At Team Tide, we understand that pursuing higher education abroad is not just about getting a degree; it's about transforming your future. Since 2019, we’ve been helping students from all corners of the globe unlock their potential by guiding them through the intricate process of securing study visas to top universities worldwide.</p>
                                <br />
                                <p>With a rich network of long-standing partnerships with leading educational institutions in various countries, Team Tide offers exclusive access to the best study programs across the world. From advising you on the perfect academic path to navigating the visa process with precision, we are your dedicated partners in this exciting academic journey.</p>
                            </div>
                            <div className="terms-text">
                                <h3>Why Choose Team Tide for Your Study Visa Application?</h3>
                                <p>When it comes to studying abroad, Team Tide offers much more than just visa services. We offer a holistic approach that combines expert advice, personalized support, and strong industry relationships to ensure that your transition to international education is seamless and successful. Here’s why we stand out:</p>
                                <ul>
                                    <li><strong>Unmatched Experience in Study Visas:</strong> With years of experience in securing student visas for students worldwide, we are well-versed in the complex requirements and regulations across different countries. Our proven track record speaks for itself—Team Tide has helped students from various backgrounds secure their spots at world-renowned universities.</li>
                                    <li><strong>Exclusive Partnerships with Top Universities:</strong> Over the years, we have built solid relationships with universities across the United States, Canada, United Kingdom, Australia, Europe, and more. This gives you access to exclusive academic programs, scholarships, and opportunities that are not widely available to other students.</li>
                                    <li><strong>Tailored University Selection:</strong> We take the time to understand your goals, interests, and academic background. With that knowledge, we provide customized recommendations on the best-fit universities based on your career ambitions and preferred study domains, whether it's engineering, business, medicine, or the arts. We ensure that the institutions we suggest offer the best resources, faculty, and career opportunities for your field of interest.</li>
                                    <li><strong>Step-by-Step Guidance through the Visa Process:</strong> Securing a study visa can be daunting, but with Team Tide, you don’t have to face it alone. Our dedicated experts will walk you through every step of the process—from preparing the necessary documents, completing the visa application, to navigating interviews and requirements. We ensure that you are fully prepared to face any challenges, giving you the highest chance of a successful application.</li>
                                    <li><strong>Comprehensive Support Throughout Your Journey:</strong> Our services don’t stop at the visa application. Team Tide supports you from the moment you consider studying abroad to when you settle into your new life in a foreign country. We provide assistance with everything from accommodation arrangements to flight bookings, and cultural integration so that your journey is as smooth as possible.</li>
                                </ul>
                            </div>
                            <div className="terms-text">
                                <h3>Our Streamlined Process: Your Path to Studying Abroad, Simplified</h3>
                                <p>At Team Tide, we understand that applying for a study visa can feel overwhelming. That’s why we’ve developed a clear, streamlined process to make your path to studying abroad as simple and efficient as possible. Here’s how we do it:</p>
                                <ol>
                                    <li><strong>Discover Your Ideal Study Program:</strong> The first step is to identify the program that best suits your academic and career aspirations. Whether you’re interested in pursuing a bachelor’s, master’s, or Ph.D., we help you choose the best domain based on your qualifications, interests, and professional goals. Our vast expertise across various academic fields ensures you’ll find a program that not only excites you but also enhances your career prospects.</li>
                                    <li><strong>Expert University Recommendations Tailored for You:</strong> Once you’ve chosen your study program, we tap into our global network of universities to recommend the most reputable institutions that offer your desired field of study. Whether you’re aiming for a prestigious Ivy League institution or a top-ranked university in Europe or Asia, we guide you in selecting the one that fits your academic and financial needs. With Team Tide, you don’t just choose a university—we ensure you’re getting access to the highest-quality education and the best opportunities to support your academic and professional journey.</li>
                                    <li><strong>Perfect Your Application and Documentation:</strong> With our comprehensive guidance, we assist you in preparing every necessary document to ensure that your application meets the university’s requirements. From drafting a compelling statement of purpose (SOP) and preparing your transcripts to getting your letters of recommendation in order, we make sure that your application stands out. We work diligently to eliminate errors and optimize every detail of your submission, helping you present the strongest possible case for admission.</li>
                                    <li><strong>Secure Your Study Visa with Confidence:</strong> Once you're accepted into your chosen university, the next step is obtaining your student visa. The visa application process can be complicated and requires attention to detail. That’s where Team Tide comes in—our experts help you prepare all the necessary documents, complete the visa forms, and navigate any interview or approval process smoothly. We understand that visa rejections can be frustrating, so we ensure that everything is in order, giving you the highest chance of approval and a hassle-free experience.</li>
                                    <li><strong>Settle In and Start Your Academic Adventure:</strong> Your journey doesn’t end once you arrive at your destination. Team Tide continues to support you throughout your studies abroad. We provide pre-departure guidance on accommodation options, healthcare, travel arrangements, and even local customs. Our goal is to ensure that your transition to life abroad is seamless so that you can focus on thriving academically.</li>
                                </ol>
                            </div>
                            <div className="terms-text">
                                <h3>Study Abroad Opportunities: Unlock Global Education in Prestigious Universities</h3>
                                <p>At Team Tide, we offer access to a diverse range of academic programs across multiple continents. Whether you’re interested in business, medicine, science, or arts, we connect you with universities that offer highly-ranked programs. Here are some popular fields of study:</p>
                                <ul>
                                    <li><strong>Engineering & Technology:</strong> World-class institutions in Canada, Germany, and the United States offer top-notch programs in computer science, electrical engineering, and civil engineering.</li>
                                    <li><strong>Business & Management:</strong> Premier business schools in the UK, Switzerland, and Singapore provide outstanding MBA programs, finance, and marketing specializations.</li>
                                    <li><strong>Healthcare & Medicine:</strong> Elite medical universities in the USA, UK, Canada, and Australia offer medical degrees, nursing programs, and public health courses.</li>
                                    <li><strong>Arts, Design, and Humanities:</strong> Prestigious universities in the UK, Australia, and Italy offer comprehensive arts programs, including literature, fashion design, and philosophy.</li>
                                    <li><strong>Social Sciences:</strong> Leading institutions worldwide offer innovative programs in psychology, political science, and international relations.</li>
                                </ul>
                            </div>
                            <div className="terms-text">
                                <h3>Why Team Tide is Your Trusted Study Visa Partner</h3>
                                <p>At Team Tide, we understand that every student’s journey is unique. That’s why we’re committed to providing personalized guidance, extensive expertise, and dedicated support every step of the way.</p>
                                <ul>
                                    <li><strong>Personalized Guidance:</strong> We believe every student’s journey is unique. Team Tide offers tailored advice, helping you choose the perfect academic program and university for your aspirations.</li>
                                    <li><strong>Years of Expertise:</strong> With our experience, we’ve perfected the study visa process, ensuring that you navigate it smoothly and with confidence.</li>
                                    <li><strong>Global Reach with Local Insights:</strong> We work with universities in multiple countries and provide you with personalized, region-specific advice for a seamless academic experience.</li>
                                    <li><strong>Dedicated Support Every Step of the Way:</strong> From university selection to post-arrival assistance, we ensure that you receive complete support and are prepared for every aspect of studying abroad.</li>
                                </ul>
                            </div>
                            <div className="terms-text">
                                <h3>Start Your International Education Journey Today with Team Tide</h3>
                                <p>Are you ready to unlock a world of academic possibilities? With Team Tide by your side, studying abroad is an exciting, achievable reality. From visa application support to university selection and relocation assistance, we offer end-to-end services to make sure your international education experience is nothing short of extraordinary.</p>
                                <p>Contact Team Tide today and start your journey toward a brighter future, one that is full of academic achievement, cultural exploration, and global opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                         
        </>
    );
}