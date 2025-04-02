import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Predict() {
  const [inputValues, setInputValues] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let features = inputValues.split(",").map((val) => parseFloat(val.trim()));
      features = features.slice(0, 31).concat(Array(31 - features.length).fill(0));
      
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const data = await response.json();
      setPrediction(data.prediction === 1 ? "Cancerous" : "Non-Cancerous");
    } catch (error) {
      console.error("Error predicting:", error);
      setPrediction("Error fetching prediction. Please check API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4" 
    style={{
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      textAlign: 'center',
      color: '#d81b60' // Dark Pink
    }}>Breast Cancer Prediction</h1>
      <br />
      <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
  Test Yourself: Diagnosis - radius_mean, texture_mean, perimeter_mean, area_mean, 
  smoothness_mean, compactness_mean, concavity_mean, concave points_mean, ... , 
  texture_worst, perimeter_worst, area_worst, smoothness_worst, compactness_worst, 
  concavity_worst, concave points_worst, symmetry_worst, fractal_dimension_worst, Unnamed: 32
</p>
 <br />
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          placeholder="Enter up to 31 comma-separated values (remaining will be filled with 0)"
          value={inputValues}
          onChange={handleChange}
          className="w-full p-2 border rounded h-24"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {prediction && (
        <div
          className={`mt-4 p-3 text-lg font-bold text-center border rounded
          ${prediction === "Cancerous" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"}`}
        >
          Prediction: {prediction}
        </div>
      )}

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
}