import React from "react";
import { useParams } from "react-router-dom";
import "../Style/PropertyDetails.css";

const properties = [
  {
    id: 1,
    image: "/images/property1.jpg",
    propertyCode: "A001",
    size: "120 sqm",
    pricePerMonth: "$500",
    wings: "A",
    floor: "1st",
  },
  {
    id: 2,
    image: "/images/property2.jpg",
    propertyCode: "A002",
    size: "95 sqm",
    pricePerMonth: "$600",
    wings: "B",
    floor: "2nd",
  },
  {
    id: 3,
    image: "/images/property3.jpg",
    propertyCode: "P003",
    size: "130 sqm",
    pricePerMonth: "$720",
    wings: "A",
    floor: "3rd",
  },
  // ... add other properties
];

const PropertyDetails = () => {
  const { buildId } = useParams(); // capture building ID from URL

  // Filter properties by building code
  const filteredProperties = buildId
    ? properties.filter((prop) => prop.propertyCode === buildId)
    : properties;

  return (
    <div className="page-container">
      <header className="page-header">Property Details</header>
      <div className="property-grid">
        {filteredProperties.map((property) => (
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
        {filteredProperties.length === 0 && (
          <p style={{ padding: "1rem" }}>No properties found for this building.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
