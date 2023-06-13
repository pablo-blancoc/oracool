// src/pages/RulesPage.js
import React, { useState } from 'react';

const RulesPage = () => {
  const [message, setMessage] = useState('Welcome to the rules');

  const handleUpdateMessage = () => {
    setMessage('New message');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleUpdateMessage}>Update Message</button>
    </div>
  );
};

export default RulesPage;
