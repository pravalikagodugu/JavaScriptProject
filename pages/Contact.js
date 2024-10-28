import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Message: ${message}`);
    setName('');
    setMessage('');
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
