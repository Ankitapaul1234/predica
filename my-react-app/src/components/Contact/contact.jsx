// import React from 'react';
// import Navbar from "../navbar/Navbar";
// import styles from "./styles.module.css";

// const contact = () => {
//   return (
//     <>
//       <div className={styles.contactContainer}>
//         <Navbar />
//         <div className={styles.contentWrapper}>
//           <h1 className={styles.title}>Overview</h1>

            
           
          
//         </div>
//         {/* Footer Section */}
//         <footer className={styles.footer}>
//           <p>© 2024 Predica. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default contact























import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Contact Us</h1>
          {submitted ? (
            <p className={styles.successMessage}>Thank you for reaching out! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}

          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p><FaPhone /> +914567890235</p>
            <p><FaEnvelope /> <a href="mailto:Predica@gmail.com">Predica@gmail.com</a></p>
            <p><FaMapMarkerAlt /> 123 L.N Road, Kolkata, India</p>
          </div>
        </div>

        {/* Footer Section */}
        {/* <footer className={styles.footer}>
          <p>© 2024 Predica. All rights reserved.</p>
        </footer> */}
      </div>
    </>
  );
};

export default Contact;

