// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Predict() {
//   const [inputValues, setInputValues] = useState("");
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);


//   const navigate = useNavigate();
  

//   const handleChange = (e) => {
//     setInputValues(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let features = inputValues.split(",").map((val) => parseFloat(val.trim()));
//       features = features.slice(0, 31).concat(Array(31 - features.length).fill(0));
      
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ features }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch prediction");
//       }

//       const data = await response.json();
//       setPrediction(data.prediction === 1 ? "Cancerous" : "Non-Cancerous");
//     } catch (error) {
//       console.error("Error predicting:", error);
//       setPrediction("Error fetching prediction. Please check API connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4" 
//     style={{
//       fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
//       textAlign: 'center',
//       color: '#d81b60' // Dark Pink
//     }}>Breast Cancer Prediction</h1>
//       <br />
//       <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
//   Test Yourself: Diagnosis - radius_mean, texture_mean, perimeter_mean, area_mean, 
//   smoothness_mean, compactness_mean, concavity_mean, concave points_mean, ... , 
//   texture_worst, perimeter_worst, area_worst, smoothness_worst, compactness_worst, 
//   concavity_worst, concave points_worst, symmetry_worst, fractal_dimension_worst, Unnamed: 32
// </p>
//  <br />
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <textarea
//           placeholder="Enter up to 31 comma-separated values (remaining will be filled with 0)"
//           value={inputValues}
//           onChange={handleChange}
//           className="w-full p-2 border rounded h-24"
//         />
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? "Predicting..." : "Predict"}
//         </button>
//       </form>
//       {prediction && (
//         <div
//           className={`mt-4 p-3 text-lg font-bold text-center border rounded
//           ${prediction === "Cancerous" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"}`}
//         >
//           Prediction: {prediction}
//         </div>
//       )}

// <p>Click below to navigate to the home page:</p>

// {/* Buttons for Navigation with Inline Styling */}
// <button 
//   onClick={() => navigate('/')} 
//   style={{ 
//     backgroundColor: '#d81b60', 
//     color: 'white', 
//     padding: '10px 20px', 
//     border: 'none', 
//     borderRadius: '5px', 
//     cursor: 'pointer', 
//     marginBottom: '20px'
//   }}
// >
//   Go to Home Page
// </button>
//     </div>
//   );
// }











































import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Vertically center content
    padding: '2rem',
    backgroundColor: '#121212', // Dark background
    color: 'white', // Light text for dark theme
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    animation: 'fadeIn 1s ease-in-out',
    flexDirection: 'column',
    width: '100%',

  };

  const headingStyle = {
    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
    textAlign: 'center',
    color: '#d81b60', // Dark Pink
    marginBottom: '1.5rem',
    animation: 'fadeInUp 1s ease-in-out',
  };

  const paragraphStyle = {
    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const textareaStyle = {
    width: '100%',  // Ensures it takes up 100% of the width available
    maxWidth: '600px',  // Limits the maximum width to prevent it from being too wide
    height: '150px',  // Increased height for the textarea
    padding: '0.8rem',
    border: '1px solid #444', // Dark border
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#333', // Dark textarea background
    color: 'white', // White text
    transition: 'border 0.3s ease',
    resize: 'none',  // Prevents resizing
    marginBottom: '1rem', // Adds some space below the textarea
    boxSizing: 'border-box',  // Ensures padding doesn't affect the width
  };
  

  const buttonStyle = {
    width: 'auto',   // Button width adjusts to content
    padding: '1rem 2rem',  // Increased padding for a bigger button
    backgroundColor: '#d81b60', // Dark pink
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '1.5rem', // Adds some space above the button
    fontSize: '1.2rem',  // Adjusted font size for a bigger button
    marginLeft: 'auto', // Aligns button to the center horizontally
    marginRight: 'auto', // Aligns button to the center horizontally
    display: 'block', // Ensures the button is displayed as a block element for centering
  };

  const predictionStyle = (isCancerous) => ({
    marginTop: '1.5rem',
    padding: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '8px',
    animation: 'fadeIn 1.5s ease-in-out',
    color: isCancerous ? '#e53935' : '#43a047', // Red for cancerous, Green for non-cancerous
    border: `2px solid ${isCancerous ? '#e53935' : '#43a047'}`,
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '1rem', // Added space below the prediction box
  });

  const goHomeButtonStyle = {
    backgroundColor: '#d81b60', // Dark pink
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <motion.h1 
        style={headingStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Breast Cancer Prediction
      </motion.h1>
      <p style={paragraphStyle}>
        Test Yourself: Diagnosis - radius_mean, texture_mean, perimeter_mean, area_mean, smoothness_mean, 
        compactness_mean, concavity_mean, concave points_mean, ..., texture_worst, perimeter_worst, area_worst, 
        smoothness_worst, compactness_worst, concavity_worst, concave points_worst, symmetry_worst, fractal_dimension_worst, Unnamed: 32
      </p>
      <form onSubmit={handleSubmit} className="space-y-3" style={{ width: '100%' }}>
        <textarea
          placeholder="Enter up to 31 comma-separated values (remaining will be filled with 0)"
          value={inputValues}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {prediction && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={predictionStyle(prediction === "Cancerous")}
        >
          Prediction: {prediction}
        </motion.div>
      )}

      <p>Click below to navigate to the home page:</p>
      <button 
        onClick={() => navigate('/')} 
        style={goHomeButtonStyle}
      >
        Go to Home Page
      </button>
    </div>
  );
}
