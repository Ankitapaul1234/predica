
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Home from "./components/Home/home";
// import Predict from "./components/Predict";
// import Precaution from "./components/Precaution/precaution";
// import AboutPredict from "./components/About/about";
// import Contact from "./components/Contact/contact";
// // import DrAi from "./components/chatbot/DrAi";
// //import DrAi from "./components/chatbot/DrAi";  // ✅ Import DrAi
// // import HospitalSearch from "./components/HospitalSearch";  // ✅ Import HospitalSearch

// import './App.css'; // Import global styles

// function App() {
//   const user = localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
//         <Route path="/prediction" element={user ? <Predict /> : <Navigate to="/login" />} />
//         <Route path="/about-predict" element={<AboutPredict />} />
//         <Route path="/precaution" element={<Precaution />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/drai" element={<DrAi />} />
//         {/* <Route path="/hospitals" element={<HospitalSearch />} />  */}
//                  {/* ✅ Add a new route for Hospital Search */}
//       </Routes>

//     </Router>
//   );
// }

// export default App;












// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Home from "./components/Home/home";
// import Predict from "./components/Predict";
// import Precaution from "./components/Precaution/precaution";
// import AboutPredict from "./components/About/about";
// import Contact from "./components/Contact/contact";
// import DrAi from "./components/chatbot/DrAi";  // ✅ Import DrAi
// import './App.css'; // Import global styles

// function App() {
//   const user = localStorage.getItem("token");

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="/prediction" element={user ? <Predict /> : <Navigate to="/login" />} />
//           <Route path="/about-predict" element={<AboutPredict />} />
//           <Route path="/precaution" element={<Precaution />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <DrAi /> {/* DrAi chatbot button fixed on every page */}
//       </div>
//     </Router>
//   );
// }

// export default App;























import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/home";
import Predict from "./components/Predict";
import Precaution from "./components/Precaution/precaution";
import AboutPredict from "./components/About/about";
import Contact from "./components/Contact/contact";
import HospitalSearch from "./components/HospitalSearch";  // ✅ Import HospitalSearch
import DrAi from "./components/chatbot/DrAi";

import './App.css'; // Import global styles

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      {/* ✅ DrAi floats on top of all routes */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/prediction" element={user ? <Predict /> : <Navigate to="/login" />} />
        <Route path="/about-predict" element={<AboutPredict />} />
        <Route path="/precaution" element={<Precaution />} />
        <Route path="/drai" element={<DrAi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitals" element={<HospitalSearch />} />
      </Routes>
    </Router>
  );
}

export default App;