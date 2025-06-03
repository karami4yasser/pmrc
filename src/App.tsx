import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/pages/Home";
import About from "./main/pages/About";
import GpsTrackerProduct from "./main/pages/GpsTrackerProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent-car-near-me" element={<Home />} />
            {/* English Keywords - All point to Home */}
            <Route path="/rent-car-tangier" element={<Home />} />
            <Route path="/car-rental-tangier" element={<Home />} />
            <Route path="/rent-car-morocco" element={<Home />} />
            <Route path="/car-rental-tangier-airport" element={<Home />} />
            <Route path="/rent-car-tangier-airport" element={<Home />} />
            <Route path="/car-rental-tangier-city" element={<Home />} />
            <Route path="/rent-car-tangier-port" element={<Home />} />
            <Route path="/car-rental-near-me" element={<Home />} />{" "}
            {/* Assumes user near Tangier */}
            <Route path="/economy-car-rental-tangier" element={<Home />} />
            <Route path="/luxury-car-rental-tangier" element={<Home />} />
            <Route path="/suv-rental-tangier" element={<Home />} />
            <Route path="/automatic-car-rental-tangier" element={<Home />} />
            <Route path="/7-seater-car-rental-tangier" element={<Home />} />
            <Route path="/our-fleet" element={<Home />} />
            <Route path="/best-car-rental-tangier" element={<Home />} />
            <Route path="/cheap-car-rental-tangier" element={<Home />} />
            <Route path="/car-hire-tangier" element={<Home />} />
            <Route path="/tangier-car-hire" element={<Home />} />
            {/* French Keywords - All point to Home */}
            <Route path="/location-voiture-tanger" element={<Home />} />
            <Route path="/louer-une-voiture-tanger" element={<Home />} />
            <Route
              path="/location-voiture-tanger-aeroport"
              element={<Home />}
            />
            <Route
              path="/location-voiture-pas-cher-tanger"
              element={<Home />}
            />
            <Route path="/location-voiture-luxe-tanger" element={<Home />} />
            <Route
              path="/location-voiture-automatique-tanger"
              element={<Home />}
            />
            <Route
              path="/location-voiture-7-places-tanger"
              element={<Home />}
            />
            <Route path="/nos-voitures" element={<Home />} />
            {/* Arabic Keywords - All point to Home */}
            <Route path="/كراء-السيارات-في-طنجة" element={<Home />} />
            <Route path="/كراء-السيارات-بدون-شيك-طنجة" element={<Home />} />
            <Route path="/كراء-السيارات-مطار-طنجة" element={<Home />} />
            <Route path="/تأجير-سيارات-طنجة" element={<Home />} />
            <Route path="/سيارات-للكراء-طنجة" element={<Home />} />
            <Route path="/أفضل-كراء-السيارات-طنجة" element={<Home />} />
            <Route path="/كراء-سيارات-اقتصادية-طنجة" element={<Home />} />
            <Route path="/كراء-سيارات-فاخرة-طنجة" element={<Home />} />
            <Route path="/كراء-سيارات-أوتوماتيكية-طنجة" element={<Home />} />
            <Route path="/كراء-سيارات-7-مقاعد-طنجة" element={<Home />} />
            <Route path="/أسطول-السيارات" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
