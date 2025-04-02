// import Predict from "./components/Predict";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// // import Signup from "./components/Singup";
// // import Login from "./components/Login";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// function App() {
//   return( 
//     <Predict />

//   );
// }
// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Prediction from "./pages/Prediction";
// import Predict from "./components/Predict";
// // import Home from "./components/home";
// import Main from "./components/Main";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home/home";
// import Dashboard from "./components/Dashboard/Dashboard";

// function App() {
// 	const user = localStorage.getItem("token");
	
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/prediction" element={<Predict />} />
// 		{user && <Route path="/" exact element={<Main />} />}
// 		<Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />


// 		{/* <Route path="/" element={<Home />} />
//         <Route path="/prediction" element={<Predict />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Predict from "./components/Predict";
// import Main from "./components/Main";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home/home";
// import Dashboard from "./components/Dashboard/Dashboard";

// function App() {
//   const user = localStorage.getItem("token"); // Check if user is logged in

//   return (
//     <Router>
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Home />} />

//         {/* Login and Signup */}
//         <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
//         <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />

//         {/* Dashboard - Protected Route */}
//         <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

//         {/* Prediction - Protected Route */}
//         <Route path="/prediction" element={user ? <Predict /> : <Navigate to="/login" />} />

//         {/* Main Page - Protected Route */}
//         <Route path="/main" element={user ? <Main /> : <Navigate to="/login" />} />

//         {/* Fallback for Undefined Routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
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
import './App.css'; // Import global styles

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/prediction" element={user ? <Predict /> : <Navigate to="/login" />} />
        <Route path="/about-predict" element={<AboutPredict />} />
        <Route path="/precaution" element={<Precaution />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

