import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(
      `https://wa.me/2348012345678?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section className="new-contact-section py-5 px-3">
      <div className="container">
        <h2 className="text-center contact-heading mb-5">Get in Touch</h2>
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="contact-card p-4 shadow rounded">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn send-btn w-100 mt-3">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <div className="contact-info-box p-4 shadow rounded">
              <h5 className="text-gold  mb-3">Contact Info</h5>
              <p className="phone">
                <FaPhoneAlt className="me-2 text-gold" /> +234 801 234 5678
              </p>
              <p className="phone">
                <FaEnvelope className="me-2 text-gold" /> contact@luxurycars.com
              </p>
              <h5 className="text-gold mt-4 mb-2">Follow Us</h5>
              <div className="social-icons-wrapper">
                <a href="#" className="icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="icon">
                  <FaTwitter />
                </a>
                <a href="#" className="icon">
                  <FaInstagram />
                </a>
                <a href="#" className="icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container mt-5 shadow rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Plot+2,+km+33+Lekki-Epe+Expressway,+Lekki+Phase+1,+Lekki,+Lagos,+Nigeria+101233&output=embed"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>

        {/* Get Directions Button */}
        <div className="text-center mt-3">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Plot+2,+km+33+Lekki-Epe+Expressway,+Lekki+Phase+1,+Lagos,+Nigeria+101233"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning"
            style={{
              backgroundColor: "#b89d29",
              border: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
