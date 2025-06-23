import React, { useState } from "react";
import axios from "axios";
import { Log } from "../../Logging Middleware/logger";

const UrlShortenerPage = () => {
  const [urls, setUrls] = useState([{ url: "", validity: 30, shortcode: "" }]);

  const handleInputChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const shortenUrls = async () => {
    for (let entry of urls) {
      try {
        const payload = {
          longUrl: entry.url,
          validity: entry.validity || 30,
          customShortcode: entry.shortcode || undefined
        };

        const response = await axios.post("http://your-backend/shorten", payload);
        console.log("Shortened:", response.data);
        await Log("frontend", "info", "service", "URL shortened successfully");
      } catch (err) {
        await Log("frontend", "error", "service", "Failed to shorten URL");
      }
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      {urls.map((entry, index) => (
        <div key={index}>
          <input
            placeholder="Long URL"
            value={entry.url}
            onChange={(e) => handleInputChange(index, "url", e.target.value)}
          />
          <input
            placeholder="Validity (minutes)"
            value={entry.validity}
            onChange={(e) => handleInputChange(index, "validity", e.target.value)}
          />
          <input
            placeholder="Custom Shortcode"
            value={entry.shortcode}
            onChange={(e) => handleInputChange(index, "shortcode", e.target.value)}
          />
        </div>
      ))}
      <button onClick={shortenUrls}>Shorten All</button>
    </div>
  );
};

export default UrlShortenerPage;
