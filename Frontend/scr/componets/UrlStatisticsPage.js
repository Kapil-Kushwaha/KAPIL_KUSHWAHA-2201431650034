import React, { useEffect, useState } from "react";
import axios from "axios";

const UrlStatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://your-backend/stats");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching stats:", error.message);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>URL Statistics</h2>
      {data.map((item, idx) => (
        <div key={idx}>
          <p>Original URL: {item.longUrl}</p>
          <p>Short URL: {item.shortUrl}</p>
          <p>Clicks: {item.clicks}</p>
          <p>Expiry: {item.expiryTime}</p>
        </div>
      ))}
    </div>
  );
};

export default UrlStatisticsPage;
