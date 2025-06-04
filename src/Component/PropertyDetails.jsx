import React from "react";
import "../Style/PropertyDetails.css";

const properties = [
  {
    id: 1,
    image: "/images/property1.jpg",
    propertyCode: "P001",
    size: "120 sqm",
    pricePerMonth: "$800",
    wings: "A",
    floor: "1st",
  },
  {
    id: 2,
    image: "/images/property2.jpg",
    propertyCode: "P002",
    size: "95 sqm",
    pricePerMonth: "$700",
    wings: "B",
    floor: "2nd",
  },
  {
    id: 3,
    image: "/images/property3.jpg",
    propertyCode: "P003",
    size: "130 sqm",
    pricePerMonth: "$850",
    wings: "A",
    floor: "3rd",
  },
  {
    id: 4,
    image: "/images/property4.jpg",
    propertyCode: "P004",
    size: "110 sqm",
    pricePerMonth: "$750",
    wings: "C",
    floor: "1st",
  },
  {
    id: 5,
    image: "/images/property5.jpg",
    propertyCode: "P005",
    size: "140 sqm",
    pricePerMonth: "$900",
    wings: "B",
    floor: "2nd",
  },
  {
    id: 6,
    image: "/images/property6.jpg",
    propertyCode: "P006",
    size: "100 sqm",
    pricePerMonth: "$720",
    wings: "A",
    floor: "3rd",
  },
  {
    id: 7,
    image: "/images/property7.jpg",
    propertyCode: "P007",
    size: "125 sqm",
    pricePerMonth: "$810",
    wings: "C",
    floor: "2nd",
  },
  {
    id: 8,
    image: "/images/property8.jpg",
    propertyCode: "P008",
    size: "135 sqm",
    pricePerMonth: "$880",
    wings: "B",
    floor: "1st",
  },
  {
    id: 9,
    image: "/images/property9.jpg",
    propertyCode: "P009",
    size: "115 sqm",
    pricePerMonth: "$770",
    wings: "A",
    floor: "2nd",
  },
];

const PropertyDetails = () => {
  return (
    <div className="page-container">
      <header className="page-header">Property Details</header>
      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.propertyCode} />
            <div className="property-info">
              <p><strong>Code:</strong> {property.propertyCode}</p>
              <p><strong>Size:</strong> {property.size}</p>
              <p><strong>Price/Month:</strong> {property.pricePerMonth}</p>
              <p><strong>Wings:</strong> {property.wings}</p>
              <p><strong>Floor:</strong> {property.floor}</p>
              <button>Make Booking</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
