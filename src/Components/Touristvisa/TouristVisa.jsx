import React, { useEffect, useState } from 'react';
import "../JobVisa/Jobvisa.css"

export default function TouristVisa() {
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
                            Tourist Visa
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
                                <h3>Step Into the World of Endless Travel Possibilities with Team Tide</h3>
                                <p>Are you ready to discover new destinations, immerse yourself in diverse cultures, or take a break and recharge? Team Tide is here to make your travel dreams a reality by offering not just tourist visa services, but a family-oriented experience that ensures your journey is as seamless and exciting as possible.</p>
                                <br />
                                <p>Since 2019, Team Tide has been more than just a service provider; we’ve become a trusted partner for all kinds of travelers. We are a team of passionate professionals, working together like a family to bring you closer to your dreams of exploring the world.</p>
                            </div>
                            <div className="terms-text">
                                <h3>Why Choose Team Tide for Your Tourist Visa?</h3>
                                <p>At Team Tide, we don’t just process visa applications. We are a family of experts who are dedicated to helping you navigate the often-complicated visa process with ease. Here’s why you should choose us:</p>
                                <ul>
                                    <li><strong>We Treat You Like Family: Personal Connection at Every Step</strong>Unlike typical visa agencies, we go beyond just providing a service. At Team Tide, we build strong, lasting relationships with our clients. From the first consultation to the moment you step onto your flight, we are here for you—like family—every step of the way. Our team’s commitment to your success is personal, and we treat your visa application as if it were our own.</li>
                                    <li><strong>Extensive Network and Expertise</strong>Our global network of partnerships with embassies, consulates, and trusted organizations gives us access to the best visa solutions and real-time updates for your application. We have strong connections with institutions across the globe, ensuring that you receive the most reliable, up-to-date information and the best chances for success.</li>
                                    <li><strong>Tailored Travel Assistance</strong>Every traveler is different, and so is every visa application. We understand that your travel goals are unique—whether you're exploring a new destination, visiting family or friends, or attending a special event. Team Tide provides personalized guidance, offering recommendations based on your travel preferences and the latest regulations.</li>
                                </ul>
                            </div>
                            <div className="terms-text">
                                <h3>The Team Tide Advantage: Your Trusted Visa Journey</h3>
                                <p>When you choose Team Tide, you are not simply filling out forms and waiting for approval—you are embarking on a collaborative journey with a team that truly cares about your success. Here's how we make your tourist visa experience easy, efficient, and enjoyable:</p>
                                <ol>
                                    <li><strong>Personal Consultations for Your Dream Journey</strong>From the moment you contact us, we provide a personalized consultation to better understand your specific travel needs. Whether you're heading to the USA, Europe, Asia, or any other destination, we will guide you to the most suitable visa options and make sure all your paperwork is ready.</li>
                                    <li><strong>End-to-End Assistance: Visa Made Simple</strong>With Team Tide, there’s no detail left to chance. From document preparation to application submission, we ensure everything is tailored and organized for you. Our expert team works alongside you, making sure that your visa application is accurate, error-free, and complete—maximizing your chances of success.</li>
                                    <li><strong>A Family of Support at Every Step</strong>We don’t stop at just processing your visa. As part of the Team Tide family, we are always available to help you with any questions or concerns you may have. From visa tracking to providing travel advice, we are here to guide you through each phase of your journey, ensuring everything goes smoothly.</li>
                                    <li><strong>Speed and Efficiency with Heart</strong>While Team Tide delivers quick and efficient services, we never sacrifice quality or personal care. We understand that time is precious when planning your trip, and we make sure your visa is submitted on time without compromising on the accuracy or thoroughness of your application.</li>
                                </ol>
                            </div>
                            <div className="terms-text">
                                <h3>Tourist Visa Destinations We Specialize In</h3>
                                <p>At Team Tide, we help you obtain tourist visas for some of the most popular and exciting destinations worldwide. Whether you're going on a leisure trip, visiting family, or just taking a well-deserved break, we’ve got you covered:</p>
                                <ul>
                                    <li><strong>USA: Dream Big, Travel Far</strong>The United States is home to some of the world’s most iconic attractions. From exploring New York City to experiencing the beauty of National Parks, we make your B1/B2 visa application as smooth and easy as possible. Let us help you unlock the American dream.</li>
                                    <li><strong>Schengen Area: Europe Awaits</strong>With a Schengen visa, you can visit 26 European countries, from France and Germany to Italy and Spain. Whether you’re exploring the streets of Paris or enjoying a medieval castle in Germany, we assist with obtaining your Schengen visa, letting you explore Europe’s history, art, and culture.</li>
                                    <li><strong>Australia: Discover the Land Down Under</strong>From the Great Barrier Reef to the Sydney Opera House, Australia offers boundless natural beauty and adventures. We assist you in securing your visitor visa, so you can experience this amazing country without the stress of visa hassles.</li>
                                    <li><strong>United Kingdom: Historic Charm Awaits</strong>Whether it’s visiting the Tower of London, wandering through Oxford, or attending theater performances in London, the UK offers a wealth of cultural experiences. Team Tide ensures your UK Visitor Visa is processed quickly and efficiently, so you can focus on your travels.</li>
                                    <li><strong>Asia: Explore Vibrant Cultures and Stunning Landscapes</strong>From the serene temples of Japan to the tropical beauty of Thailand, Singapore, and India, we help you explore the best of Asia with the appropriate tourist visa for your travel needs. Our experts assist in securing visas for multiple Asian destinations, ensuring a hassle-free experience.</li>
                                </ul>
                            </div>
                            <div className="terms-text">
                                <h3>The Team Tide Family: More Than Just a Service</h3>
                                <p>What sets Team Tide apart is the personalized approach and the fact that we treat every client like part of our family. Whether it's for your tourist visa or any other travel-related needs, you can count on us for unwavering support, honest advice, and a genuine desire to see you succeed.</p>
                                <p>We’ve been working in the visa industry for years, and in that time, we’ve built lasting relationships with embassies, universities, travel agents, and trusted partners. Our goal is to help you navigate the complex visa process, while offering a genuine, family-like experience that ensures you feel confident and cared for.</p>
                            </div>
                            <div className="terms-text">
                                <h3>Let’s Make Your Travel Dreams a Reality</h3>
                                <p>Your adventure awaits, and Team Tide is here to help you get there. We don’t just process tourist visas—we make your journey a memorable experience from the very first step. With our years of expertise, reliable connections, and personalized service, your visa process is in the best hands.</p>
                                <p>Contact Team Tide today and let’s start planning your next adventure. With us by your side, you can explore the world with confidence, knowing that your visa process is taken care of by a family-oriented team that always puts your needs first.</p>
                            </div><br/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}