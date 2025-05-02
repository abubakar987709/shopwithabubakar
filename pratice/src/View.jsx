import React, { useState } from "react";

// Service List Component
const ServiceList = ({ services }) => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-2">Our Welding Services</h2>
    <ul className="list-disc list-inside">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

// Customer Request Form
const CustomerRequestForm = ({ onAddRequest }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && service) {
      onAddRequest({ name, service });
      setName("");
      setService("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Request a Service</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Service Needed"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Request
      </button>
    </form>
  );
};

// Main App Component
const WeldingShopApp = () => {
  const [requests, setRequests] = useState([]);
  const services = [
    "MIG Welding",
    "TIG Welding",
    "Arc Welding",
    "Custom Fabrication",
    "Metal Repair",
  ];

  const addRequest = (request) => {
    setRequests([...requests, request]);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">🔥 Welding Shop</h1>
      <ServiceList services={services} />
      <CustomerRequestForm onAddRequest={addRequest} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Customer Requests</h3>
        <ul className="list-disc list-inside">
          {requests.map((req, idx) => (
            <li key={idx}>
              {req.name} requested <strong>{req.service}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeldingShopApp;
