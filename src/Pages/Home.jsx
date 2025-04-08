import {
  FaArrowRight,
  FaGem,
  FaCrown,
  FaOilCan,
  FaCarBattery,
  FaShieldAlt,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import img1 from "../images/ferrari.jpg";
import img2 from "../images/corvette.jpg";
import img3 from "../images/bentley.jpg";
import img4 from "../images/big bentley.jpg";
import img5 from "../images/cyber.jpg";
import { Link } from "react-router-dom";

// Car data with local image imports
const cars = [
  { name: "Ferrari 488 Spider", image: img1 },
  { name: "Chevrolet Corvette", image: img2 },
  { name: "Bentley Continental GT", image: img3 },
  { name: "Bentley Mulsanne", image: img4 },
  { name: "Tesla Cybertruck", image: img5 },
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="hero text-white text-center">
          <h1 className="display-4 fw-bold">Welcome to Polanco Cars</h1>
          <p className="lead">Luxury at its Finest</p>
          <Link to="/car">
            {" "}
            <button className="btn explore-btn">
              Explore Now <FaArrowRight className="ms-2" />
            </button>
          </Link>
        </section>

        <section className="luxury-cars container py-5">
          <h2 className="text-center mb-5 text-gold">Our Collection</h2>
          <div className="car-gallery d-flex flex-wrap justify-content-center gap-4">
            {cars.map((car, index) => (
              <div className="car-card-custom" key={index}>
                <img src={car.image} alt={car.name} />
                <h5 className="car-title mt-3">{car.name}</h5>
              </div>
            ))}
          </div>
        </section>

        <section className="spotlight text-center py-5">
          <div className="container">
            <h2 className="text-gold mb-4">Spotlight: The King of the Road</h2>
            <img src={img1} className="img-fluid rounded" alt="Featured Car" />
            <h4 className="text-white mt-4">Ferrari 488 Spider</h4>
            <p className="text-light">Elegance, speed, and timeless class.</p>
          </div>
        </section>

        <section className="benefits py-5">
          <div className="container text-center">
            <h2 className="text-gold mb-5">Why Choose Polanco?</h2>
            <div className="row text-white">
              <div className="col-md-4 mb-4">
                <FaGem className="icon" />
                <h5 className="mt-3">Exquisite Selection</h5>
                <p>Only the finest luxury vehicles across the globe.</p>
              </div>
              <div className="col-md-4 mb-4">
                <FaCrown className="icon" />
                <h5 className="mt-3">Royal Experience</h5>
                <p>Enjoy a customer experience fit for royalty.</p>
              </div>
              <div className="col-md-4 mb-4">
                <FaShieldAlt className="icon" />
                <h5 className="mt-3">Top-notch Security</h5>
                <p>Your privacy and safety are our highest priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="testimonial-section py-5">
          <div className="container text-center text-white">
            <h2 className="text-gold mb-4">What Our Clients Say</h2>
            <blockquote className="blockquote fst-italic">
              “Driving a car from Polanco feels like ruling the world.”
            </blockquote>
            <footer className="blockquote-footer text-gold">- Drake</footer>
          </div>
        </section>
        {/* End testimonial */}

        {/* Maintenance Tips Section */}
        <section className="maintenance-tips py-5 bg-dark text-white">
          <div className="container text-center">
            <h2 className="text-gold mb-5">Luxury Car Maintenance Tips</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <FaOilCan className="icon mb-3" />
                    <h5 className="card-title">Regular Oil Changes</h5>
                    <p className="card-text">
                      Keep your engine in top shape by changing the oil
                      regularly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <GiCarWheel
                      className="icon mb-3"
                      size={60}
                      color="#b89d29"
                    />
                    <h5 className="card-title">Tire Maintenance</h5>
                    <p className="card-text">
                      Ensure your tires are properly inflated and rotated for
                      better performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <FaCarBattery className="icon mb-3" />
                    <h5 className="card-title">Battery Care</h5>
                    <p className="card-text">
                      Check your battery regularly to avoid unexpected issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Maintenance Tips Section */}
      </div>
    </>
  );
};

export default Home;
