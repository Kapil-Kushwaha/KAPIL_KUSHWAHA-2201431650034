import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Example API
      .then((res) => res.json())
      .then((json) => setData(json.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
