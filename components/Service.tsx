import React from "react";

const Service = ({
  service,
  button }) => {
  return (
    <div className="service mx-auto">
      <img src={service.image} alt="" />
      <h3>{service.label}</h3>
      <p>{service.description}</p>
    </div>
  );
};
export default Service;
