import React, { useEffect, useState } from 'react';
import { fetchApplications } from './api';

function App() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications().then(setApplications).catch(console.error);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Credit Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.name} - ₹{app.amount} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
