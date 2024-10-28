import React from 'react';

const ServiceDetail = ({ title, description }) => {
  return (
    <div className="service-detail">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceDetail;
