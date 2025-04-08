import React from "react";
import img1 from "../images/fera.jpg";
import img2 from "../images/corvette.jpg";
import img3 from "../images/bentley.jpg";
import img4 from "../images/big bentley.jpg";
import img5 from "../images/urus.jpg";
import img6 from "../images/Prado.jpg";
import img7 from "../images/RR.jpg";
import img8 from "../images/Audi.jpg";
import img9 from "../images/Hilux.jpg";
import "../Pages/Cars.css";

const carData = [
  {
    id: 1,
    brand: "Ferrari",
    type: "Sports",
    name: "Ferrari 488 GTB",
    image: img1,
  },
  {
    id: 2,
    brand: "Lamborghini",
    type: "SUV",
    name: "Lamborghini Urus",
    image: img5,
  },
  {
    id: 3,
    brand: "Rolls-Royce",
    type: "Luxury",
    name: "Phantom VIII",
    image: img3,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img4,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img5,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img6,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img7,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img8,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img9,
  },
  {
    id: 4,
    brand: "Mercedes",
    type: "SUV",
    name: "G-Wagon",
    image: img2,
  },
  // Add more cars here
];

const Cars = () => {
  return (
    <div className="inventory-page py-5">
      <h2 className="text-center inventory-title mb-4">
        Available Luxury Cars
      </h2>

      <div className="row">
        {carData.map((car) => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div className="card car-card">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">
                  {car.brand} — {car.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
