import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';


function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  
      const toggleAccordion = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
      };
  
      const faqData = [
          {
              question: 'What are the basic requirements to apply for a visa ?',
              answer: 'To apply for a visa, you typically need to meet certain criteria, which may include a valid passport, proof of sufficient funds to cover your stay, a completed visa application form, and supporting documents such as a travel itinerary, accommodation details, and any required health insurance. Specific requirements may vary depending on the type of visa you are applying for and the country you are visiting. It is essential to consult the visa guidelines provided by the respective embassy or consulate for the most accurate and up-to-date information.',
          },
          {
              question: ' How long does the visa application process take ?',
              answer: 'The processing time for a visa can vary significantly depending on the type of visa and the country you are applying to. Generally, the process can take anywhere from a few days to several weeks. It is advisable to apply for your visa well in advance of your planned travel date to avoid any last-minute delays. Some countries may also offer expedited processing for an additional fee. Be sure to check the specific embassy or consulates website for estimated processing times for your visa category.',
  },
          {
              question: '. Can I apply for a visa if I have a criminal record?',
              answer: 'Having a criminal record may impact your visa application, but it does not automatically disqualify you from being approved. Each country has its own policies regarding applicants with criminal backgrounds. You may be required to disclose any prior convictions on your visa application form, and the authorities will assess the nature of the offense, how long ago it occurred, and whether you pose any risk to public safety. It’s important to provide full and honest disclosure during the application process, as failure to do so can result in visa denial.',
          },
          {
            question: 'What should I do if my visa application is denied?',
            answer: 'If your visa application is denied, you will typically receive a written explanation detailing the reason for the refusal. Depending on the country, you may be able to appeal the decision or reapply with additional supporting documents or information. It’s essential to carefully review the reason for the denial and consider whether it’s possible to address any concerns raised. In some cases, consulting with an immigration assistance expert or legal advisor can help clarify your options moving forward.',
        },
        {
          question: 'Can I extend my visa once I am in the country?',
          answer: 'In many cases, it is possible to extend your visa while you are in the country, but this depends on the type of visa and the countrys immigration assistance. To request an extension, you typically need to apply with the relevant authorities before your current visa expires. Extensions may be granted for specific purposes, such as additional business meetings, travel, or study. However, each country has its own rules and conditions for extending visas, so it is essential to check with local immigration assistance authorities for the procedures and eligibility criteria.',
      },
      {
        question: 'Are there any restrictions on traveling with a visa?',
        answer: 'Yes, many visas come with certain restrictions, which may include limitations on the duration of stay, the types of activities you can engage in, and the regions you can visit. For example, a tourist visa may not allow you to work or study during your stay, while a work visa may limit the employment opportunities available to you. It is essential to thoroughly understand the terms and conditions of your visa to avoid violations, as breaking these restrictions can lead to penalties or deportation.',
    },
      ];
  
  return (
    <>
      <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Your Passport to Global Opportunities 🌍✨</h3>
                <h1 className="text-anime-style-3" data-cursor="-opaque">Expert Visa Solutions for Work, Study & Travel🚀✨                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Dream big, travel far, and work without limits ! <strong>Team Tide</strong>  ensures a smooth, fast, and hassle-free visa process because your journey deserves the best start.</p>
              </div>

              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="/services" className="btn-default">discover solutions</a>
                <a href="/contactus" className="btn-default">book a consultation</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-images">
              <div className="country-circle-img">
                <img src="images/hero-country-circle-img.gif" alt="" />
              </div>

              <div className="hero-image">
                <figure className="image-anime">
                  <img src="images/hero-pass.jpg" alt="" />
                </figure>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          <span><img src="images/asterisk-icon.svg" alt="" />Team Tide offers unparalleled expertise in securing job visas globally. With a tailored approach and a strong international network, we navigate complex immigration assistance regulations seamlessly, ensuring a smooth, efficient process and maximizing your chances of approval.</span>
          <span><img src="images/asterisk-icon.svg" alt="" />Team Tide offers unparalleled expertise in securing job visas globally. With a tailored approach and a strong international network, we navigate complex immigration assistance regulations seamlessly, ensuring a smooth, efficient process and maximizing your chances of approval.</span>

        </div>

        <div className="scrolling-content">
          <span><img src="images/asterisk-icon.svg" alt="" />Team Tide offers unparalleled expertise in securing job visas globally. With a tailored approach and a strong international network, we navigate complex immigration assistance regulations seamlessly, ensuring a smooth, efficient process and maximizing your chances of approval.</span>
          <span><img src="images/asterisk-icon.svg" alt="" />Team Tide offers unparalleled expertise in securing job visas globally. With a tailored approach and a strong international network, we navigate complex immigration assistance regulations seamlessly, ensuring a smooth, efficient process and maximizing your chances of approval.</span>

        </div>
      </div>
    </div>
      {/* Home */}
      <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure className="image-anime reveal">
                  <img src="https://img.freepik.com/free-photo/view-green-card-passport-arrangement_23-2149828131.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid" alt="" />
                </figure>
              </div>

              <div className="about-img-2">
                <figure className="image-anime reveal">
                  <img src="https://img.freepik.com/premium-vector/travel-composition-with-famous-world-landmarks-tourism-passport-illustration_24911-61827.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid" alt="" />
                </figure>
              </div>

              <div className="success-rating-box">
                <div className="Success-rating-content">
                  <h2><span className="counter">100</span>%</h2>
                  <p>successful visa rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">who are Team Tide</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Your Ultimate Visa Experts  Trusted, Fast & Hassle-Free!</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Need a hassle-free visa process? Team Tide offers expert guidance for students, professionals, and travelers worldwide. With global experience and a client-first approach, we ensure smooth, efficient visa approvals. Travel with confidence Team Tide has you covered!</p>
              </div>

              <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li><strong>Expert Visa Solutions</strong>: Seamless and efficient visa processing with personalized assistance.</li>
                  <li><strong>Global Presence & Local Expertise</strong>: Offices in <strong>India, Singapore </strong>, and <strong>Cyprus</strong>, catering to worldwide travelers.</li>
                  <li><strong>Fast, Secure & Transparent Processing</strong>: Ensuring quick approvals with a client-first approach.</li>
                </ul>
              </div>

              <div className="about-experience-box">
                <div className="about-experience-image">
                  <figure className="image-anime reveal">
                    <img src="https://img.freepik.com/premium-photo/magnifying-glass-air-plane-compass-passport-old-map-travel-adventure-concept_175682-17540.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247" alt="" />
                  </figure>
                </div>
                <div className="about-experience-content">
                  <p>Fast, Secure & Hassle-Free Visas! Team Tide makes your visa journey smooth and stress-free. Let us handle the details while you focus on your future!</p>
                </div>
              </div>

              <div className="about-us-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="/about" className="btn-default">learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* OurServices */}
    <div className="our-services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Why Choose Team Tide for Your Visa?</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Team Tide Visa Solutions Your Global Journey Starts Here!</h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>Team Tide offers unparalleled expertise in securing job visas globally. With a tailored approach and a strong international network, we navigate complex immigration assistance regulations seamlessly, ensuring a smooth, efficient process and maximizing your chances of approval.</p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Services Item Start */}
            <div className="service-item wow fadeInUp">
              <div className="icon-box">
                <img src="images/icon-services-1.svg" alt="" />
              </div>
              <div className="service-content">
                <h3>Study visa</h3>
                <p> Unlock your future with top-tier education abroad. We make your study visa process simple and hassle-free.</p>
              </div>
              <div className="service-btn">
                <a href="/studyvisa" className="readmore-btn">learn more</a>
              </div>
            </div>
            {/* Services Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Services Item Start */}
            <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon-box">
                <img src="images/icon-services-2.svg" alt="" />
              </div>
              <div className="service-content">
                <h3>Tourists visa</h3>
                <p>Discover the world’s hidden gems! Secure your tourist visa swiftly and effortlessly, embarking on your travels with confidence and assurance.</p>
              </div>
              <div className="service-btn">
                <a href="/touristvisa" className="readmore-btn">learn more</a>
              </div>
            </div>
            {/* Services Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Services Item Start */}
            <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon-box">
                <img src="images/icon-services-3.svg" alt="" />
              </div>
              <div className="service-content">
                <h3>Job visa</h3>
                <p>Secure your dream job overseas with our expert job visa services. Start your international career with ease.</p>
              </div>
              <div className="service-btn">
                <a href="/jobvisa" className="readmore-btn">learn more</a>
              </div>
            </div>
            {/* Services Item End */}
          </div>

        

          <div className="col-lg-12">
            {/* Service Contact Text Start */}
            <div className="service-contact-text wow fadeInUp" data-wow-delay="0.8s">
              <p>Expert Visa & Immigration Assistance ? <a href="/contactus">contact now</a></p>
            </div>
            {/* Service Contact Text End */}
          </div>
        </div>
      </div>
    </div>
    {/* WhyChooseUs */}
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="why-choose-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose Team Tide</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Countless benefits & easy processing</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">You choose Team Tide because immigration assistance ,rules and dynamic, Complicated to apply, and its difficult to deal with the migration department and you need to increase.</p>
              </div>

              <div className="why-choose-content-body">
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="images/icon-why-choose-2.png" alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>legal immigration assistance success</h3>
                    <p>Since 2019 Team Tide legal immigration assistance success rate is 99 percent. So you don't have no need to worry.</p>
                  </div>
                </div>

                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="images/icon-why-choose-1.png" alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>required documents support</h3>
                    <p>Sometimes it is difficult for the student or people which document is required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="why-choose-image">
              <div className="apply-now-img">
                <img src="images/8.png" alt="" />
              </div>

              <div className="why-choose-img-1">
                <figure className="image-anime reveal">
                  <img src="images/why-choose-img-1.jpg" alt="" />
                </figure>
              </div>

              <div className="why-choose-img-2">
                <figure className="image-anime reveal">
                  <img src="images/why-choose-img-2.jpg" alt="" />
                </figure>
              </div>

              <div className="experience-counter-box">
                <h2><span className="counter">5+</span></h2>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <section className="faq-section">
              <div className="faq-left">
                  <p className="faq-header">/  Got Questions? We Have Answers!  </p>
                  <h2 className="faq-title">Frequently Asked Questions.</h2>
                  <p className="faq-description">Explore our carefully curated answers to frequently asked questions and gain the clarity you need to navigate your visa journey with confidence.</p>
  
                  {faqData.map((faq, index) => (
                      <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                          <div className="faq-question" onClick={() => toggleAccordion(index)}>
                              {faq.question}
                              {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                          </div>
                          {activeIndex === index && (
                              <div className="faq-answer">
                                  {faq.answer}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
  
              <div className="faq-right">
                  <div className="faq-promo">
                      
                      <p className="promo-text">Have 5+ Years Immigration Assistance Experience for Give you Visa Approval.</p>
                  </div>
                  <div className="faq-image">
                      <img src="https://img.freepik.com/premium-vector/ticket-boarding-pass-travel-document-world-map_48369-7035.jpg?uid=R187518940&ga=GA1.1.1397337788.1739512247&semt=ais_hybrid" alt="Immigration assistance Consultants" />
                      <p className="image-caption">Immigration Assistance Agency.</p>
                  </div>
              </div>
          </section>
    </>
  );
}

export default Home;