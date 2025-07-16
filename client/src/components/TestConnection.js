import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios.get('https://mern-portfolio-xxmy.onrender.com') // Replace with deployed backend URL after deployment
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setResponse({ error: err.message });
      });
  }, []);

  return (
    <div>
      <h2>🔗 Backend Test Response:</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default TestConnection;
