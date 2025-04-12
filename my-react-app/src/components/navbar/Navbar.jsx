// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4 shadow-md flex justify-between items-center">
//       <h1 className="text-white text-2xl font-bold">Cancer Prediction</h1>
//       <div className="space-x-4">
//         {/* <Link to="/signin">
//           <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
//             Sign In
//           </button>
//         </Link> */}
//         <Link to="/signup">
//           <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/prediction">
//           <button className="bg-green-500 text-white px-4 py-2 rounded-md">
//             Prediction
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <h1 className={styles.title}>Cancer Prediction</h1>
//       <div>
//         <Link to="/signup">
//           <button className={styles.button}>Sign Up</button>
//         </Link>
        
//         <Link to="/prediction">
//           <button className={`${styles.button} ${styles.primaryButton}`}>Prediction</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       {/* Title */}
//       <h1 className={styles.title}>Cancer Prediction</h1>
      
//       {/* Navigation Section */}
//       <div className={styles.navButtons}>
//         {/* Blog Dropdown */}
//         <div className={styles.dropdown}>
//           <button className={styles.button} onClick={toggleDropdown}>
//             Blog ▼
//           </button>
//           {isDropdownOpen && (
//             <div className={styles.dropdownMenu}>
//               <Link to="/about-predict" className={styles.dropdownItem}>About Predict</Link>
//               <Link to="/precaution" className={styles.dropdownItem}>Precaution</Link>
//               <Link to="/contact" className={styles.dropdownItem}>Contact</Link>
//             </div>
//           )}
//         </div>

//         {/* Sign Up Button */}
//         <Link to="/signup">
//           <button className={styles.button}>Sign Up</button>
//         </Link>

//         {/* Prediction Button */}
//         {/* <Link to="/prediction">
//           <button className={`${styles.button} ${styles.primaryButton}`}>Prediction</button>
//         </Link> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo and Title */}
//       <h1 className={styles.title}>Cancer Prediction</h1>
      
//       {/* Mobile Menu Button */}
//       <button className={styles.menuButton} onClick={toggleMenu}>
//         ☰
//       </button>

//       {/* Navbar Links */}
//       <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//         {/* Blog Dropdown */}
//         <div className={styles.dropdown}>
//           <button className={styles.button} onClick={toggleDropdown}>
//             Blog ▼
//           </button>
//           {isDropdownOpen && (
//             <div className={styles.dropdownMenu}>
//               <Link to="/about-predict" className={styles.dropdownItem}>About Predict</Link>
//               <Link to="/precaution" className={styles.dropdownItem}>Precaution</Link>
//               <Link to="/contact" className={styles.dropdownItem}>Contact</Link>
//             </div>
//           )}
//         </div>

//         {/* Sign Up and Prediction Buttons */}
//         <Link to="/signup">
//           <button className={styles.button}>Sign Up</button>
//         </Link>
//         <Link to="/prediction">
//           <button className={`${styles.button} ${styles.primaryButton}`}>Prediction</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo and Title */}
      <Link to="/" className={styles.title}>
        <h1>Predica</h1>
      </Link>
      
      {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        {/* Blog Dropdown */}
        <div className={styles.dropdown}>
          <button className={styles.button} onClick={toggleDropdown}>
            Blog ▼
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/" className={styles.dropdownItem}>Home</Link>
              <Link to="/about-predict" className={styles.dropdownItem}>About Predict</Link>
              <Link to="/precaution" className={styles.dropdownItem}>Precaution</Link>
              <Link to="/drai" className={styles.dropdownItem}>DrAi</Link>
            </div>
          )}
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo with Ribbon */}
//       <Link to="/" className={styles.logoContainer}>
//         <svg className={styles.ribbonLogo} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
//           <path d="M32 4C21.5 4 12 13.5 12 24c0 5.5 2.2 10.5 5.8 14.2L32 60l14.2-21.8C49.8 34.5 52 29.5 52 24c0-10.5-9.5-20-20-20zm0 8c6.6 0 12 5.4 12 12 0 3.7-1.7 7.1-4.4 9.4L32 52 24.4 33.4C21.7 31.1 20 27.7 20 24c0-6.6 5.4-12 12-12z" fill="#ff007f"/>
//         </svg>
//         <h1 className={styles.title}>Predica</h1>
//       </Link>
      
//       {/* Mobile Menu Button */}
//       <button className={styles.menuButton} onClick={toggleMenu}>
//         ☰
//       </button>

//       {/* Navbar Links */}
//       <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//         {/* Blog Dropdown */}
//         <div className={styles.dropdown}>
//           <button className={styles.button} onClick={toggleDropdown}>
//             Blog ▼
//           </button>
//           {isDropdownOpen && (
//             <div className={styles.dropdownMenu}>
//               <Link to="/" className={styles.dropdownItem}>Home</Link>
//               <Link to="/about-predict" className={styles.dropdownItem}>About Predict</Link>
//               <Link to="/precaution" className={styles.dropdownItem}>Precaution</Link>
//               <Link to="/contact" className={styles.dropdownItem}>Contact</Link>
//             </div>
//           )}
//         </div>

//         {/* Login Button */}
//         <Link to="/login">
//           <button className={styles.button}>Login</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

