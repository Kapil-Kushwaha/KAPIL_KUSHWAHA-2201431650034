import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShortenerPage from "./components/UrlShortenerPage";
import UrlStatisticsPage from "./components/UrlStatisticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/stats" element={<UrlStatisticsPage />} />
        <Route path="/:shortcode" element={<UrlRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
