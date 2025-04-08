import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="big-footer text-white py-4 position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-between text-center text-md-start">
            {/* Quick Links */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="mb-3 fw-bold">Quick Links</h5>
              <ul className="list-inline">
                <li className="list-inline-item d-block d-md-inline">
                  <Link to="/" className="quick-link">
                    Home
                  </Link>
                </li>
                <li className="list-inline-item d-block d-md-inline">
                  <Link to="/car" className="quick-link">
                    {" "}
                    {/* Updated to "/cars" */}
                    Cars
                  </Link>
                </li>
                <li className="list-inline-item d-block d-md-inline">
                  <Link to="/contact" className="quick-link">
                    {" "}
                    {/* Updated to "/contact" */}
                    Contact
                  </Link>
                </li>
                <li className="list-inline-item d-block d-md-inline">
                  <Link to="/about" className="quick-link">
                    {" "}
                    {/* Updated to "/about" */}
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="mb-3 follow fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-center">
                <a href="#" className="social-link mx-2">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="social-link mx-2">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="social-link mx-2">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="social-link mx-2">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="col-md-4">
              <p className="mb-0">
                &copy; 2025 Luxury Cars | All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button onClick={scrollTop} className="scroll-to-top">
            <FaArrowUp />
          </button>
        )}
      </footer>
    </>
  );
}

export default Footer;
