import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/coins/`)
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💰 Coin Tracker</h1>
      <ul>
        {coins.map((c, i) => (
          <li key={i}>
            {c.name} — ${c.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;