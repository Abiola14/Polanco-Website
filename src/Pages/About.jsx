import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* ====== Intro Section ====== */}
      <section className="intro-section text-center">
        <h2 className="fw-bold">About Polanco Luxury Cars</h2>
        <p className="intro-text">
          At Polanco, we redefine luxury with our exquisite selection of premium
          cars. From Lamborghini to Ferrari, our mission is to provide an
          unparalleled driving experience that exudes elegance, power, and
          sophistication.
        </p>
      </section>

      {/* ====== Vision & Mission Section ====== */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-5 vision-box">
              <FaEye className="vision-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and luxurious car dealership, delivering
                excellence and class to discerning car enthusiasts.
              </p>
            </div>
            <div className="col-md-5 mission-box">
              <FaBullseye className="mission-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide top-tier luxury cars and exceptional service that
                match the aspirations of our esteemed clientele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Our Services Section ====== */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Services</h2>
          <div className="services-list">
            {[
              "Premium Luxury Car Sales",
              "Exclusive Ferrari & Lamborghini Models",
              "VIP Concierge Service",
              "Personalized Vehicle Customization",
              "Worldwide Delivery Services",
            ].map((service, index) => (
              <div className="service-item" key={index}>
                <FaCheckCircle className="service-icon" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ Section ====== */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center faq-f">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "What brands of luxury cars do you offer?",
              answer:
                "We offer a range of premium brands, including Lamborghini, Ferrari, and Porsche.",
            },
            {
              question:
                "What should I expect during a consultation or showroom visit?",
              answer:
                "During your visit, you’ll be greeted by our expert team who will guide you through our selection of luxury cars. If you wish, you can take a test drive of the car(s) you're interested in.",
            },
            {
              question: "Can I test drive the cars before purchasing?",
              answer:
                "Absolutely! We encourage our customers to experience the cars first-hand with a test drive.",
            },
            {
              question: "How do I schedule an appointment?",
              answer:
                "You can schedule an appointment by calling our showroom or emailing us. Our team will be happy to assist you in finding a convenient time.",
            },
            {
              question: "How can I contact customer service?",
              answer:
                "You can reach our customer service team via email at [email@example.com], by phone at [phone number], or through our contact form on the website.",
            },
          ].map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h5>{faq.question}</h5>
                <span
                  className={`faq-icon ${activeIndex === index ? "open" : ""}`}
                >
                  &#9660;
                </span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
