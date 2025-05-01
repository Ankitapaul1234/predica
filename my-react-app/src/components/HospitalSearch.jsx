
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // New Delhi

// Custom Icons
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3178/3178166.png", 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const HospitalLocator = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.warn("Using default location: New Delhi");
        setLocation(defaultLocation);
      }
    );
  }, []);

  const findHospitals = async (specialty) => {
    if (!location) return;

    setLoading(true);
    setError("");

    const searchRadius = 10000; // 10 km radius

    const overpassQuery = `
      [out:json];
      node
        ["amenity"="hospital"]
        ["name"~"${specialty}", i]
        (around:${searchRadius}, ${location.lat}, ${location.lng});
      out body;
    `;

    const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    try {
      const response = await fetch(overpassUrl);
      const data = await response.json();

      if (data.elements.length > 0) {
        const formattedHospitals = data.elements
          .filter((hospital) => hospital.tags?.name)
          .map((hospital) => ({
            name: hospital.tags.name || "Unnamed Hospital",
            address: hospital.tags["addr:street"] || "No Address Available",
            lat: hospital.lat,
            lon: hospital.lon,
          }));
        setHospitals(formattedHospitals);
      } else {
        setError("No hospitals found nearby.");
        setHospitals([]);
      }
    } catch (err) {
      setError("Failed to fetch hospital data.");
      setHospitals([]);
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
     
      <h1 className="text-2xl font-bold text-center text-white mb-4">
        Find Nearby Cancer Hospitals
      </h1>

      {/* Search Buttons */}
      <div className="flex gap-4 justify-center mb-4">
        <button
          onClick={() => findHospitals("Cancer")}
          className="bg-pink-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Find Cancer Hospitals
        </button>
      </div>

      {loading && <p className="mt-4 text-black text-center">Searching for hospitals...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Map Display */}
      {location && (
        <MapContainer center={[location.lat, location.lng]} zoom={11} style={{ height: "500px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* User's Location */}
          <Marker position={[location.lat, location.lng]} icon={userIcon}>
            <Popup>
              <h3 className="font-bold text-center">📍 You Are Here</h3>
            </Popup>
          </Marker>

          {/* Nearby Hospitals */}
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={[hospital.lat, hospital.lon]} icon={hospitalIcon}>
              <Popup>
                <h3 className="font-bold">{hospital.name}</h3>
                <p className="text-sm">{hospital.address}</p>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${hospital.lat}&mlon=${hospital.lon}&zoom=14`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Map
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      {/* List of Hospitals */}
      <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Nearby Hospitals</h2>
        {hospitals.length > 0 ? (
          <ul className="list-disc pl-5">
            {hospitals.map((hospital, index) => (
              <li key={index}>
                <strong>{hospital.name}</strong> - {hospital.address} -{" "}
                <a
                  href={`https://www.openstreetmap.org/?mlat=${hospital.lat}&mlon=${hospital.lon}&zoom=14`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Map
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hospitals found within 10 km. Try another search.</p>
        )}
      </div>
      <br />

<p>Click below to navigate to the home page:</p>

{/* Buttons for Navigation with Inline Styling */}
<button 
  onClick={() => navigate('/')} 
  style={{ 
    backgroundColor: '#d81b60', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
    marginBottom: '20px'
  }}
>
  Go to Home Page
</button>
    </div>


  );
};

export default HospitalLocator;





































