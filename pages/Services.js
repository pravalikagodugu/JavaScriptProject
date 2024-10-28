import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ServiceDetail from '../components/ServiceDetail';

const Services = () => {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <nav>
        <ul>
          <li><NavLink to="design">Design</NavLink></li>
          <li><NavLink to="development">Development</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="design" element={<ServiceDetail title="Design Services" description="Creative design solutions tailored to your needs." />} />
        <Route path="development" element={<ServiceDetail title="Development Services" description="Robust development offerings to bring your ideas to life." />} />
      </Routes>
    </div>
  );
};

export default Services;
