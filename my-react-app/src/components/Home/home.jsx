
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
// import TestimonialsSection from "../Testimonial/testi";
import TestimonialsSection from "../Testimonial/testi";


const Home = () => {
  const navigate = useNavigate();

  const handleStartPredict = () => {
    navigate("/login"); // Navigate to login page
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1 className="text-4xl font-bold mb-4">
              WELCOME TO <span className="text-pink-500">PREDICA</span>
            </h1>
            <h3 className="text-lg mb-8 max-w-xl italic">
              Empowering early detection with AI-driven breast cancer prediction.
            </h3>

            <h2 className="text-2xl font-bold text-pink-500">What is Predica?</h2>
            <h3 className="text-lg mb-6">
              Predica is an AI-powered tool designed to help detect breast cancer
              early by analyzing input values and providing predictive insights.
              By leveraging machine learning, Predica assists in timely detection,
              leading to better medical intervention and outcomes. The color pink
              represents solidarity and breast cancer awareness.
            </h3>
            {/* <br /> */}
              
              {/* <p>For a doctor’s appointment, click the button below to find Oncologists in your area:</p> */}
              
              {/* <button className={styles.animatedButton}>Start Predict</button> */}

              <div>
      <h2>For test yourself click to START PREDICT : <button className={styles.animatedButton} onClick={handleStartPredict}>
        Start Predict
      </button></h2>
      
    </div>

          <br />   
                          

            <div
              className={styles.imageContainer}
              style={{ width: "600px", height: "auto", margin: "20px auto" }}
            >
              <img
                src="src/img/home.jpg"
                alt="Breast Cancer Awareness"
                className={`${styles.image} ${styles.animatedImage}`}
              />
            </div>

            <h2 className="text-2xl font-bold text-pink-500">Who is it for?</h2>
            <h3 className="text-lg mb-6">
              Predica is for individuals who want to take proactive steps in
              breast cancer detection. It is especially beneficial for women at
              risk, healthcare professionals seeking AI-assisted insights, and
              researchers exploring medical machine learning applications. While
              Predica doesn't replace a medical diagnosis, it offers early
              indicators and promotes consultations with healthcare providers.
            </h3>

            <br />

            <h2 className="text-2xl font-bold text-pink-500">
              Why Early Detection Matters?
            </h2>
            <h3 className="text-lg mb-6">
              Early detection of breast cancer significantly increases the chances
              of successful treatment. Regular screenings and predictive insights
              from Predica can lead to earlier diagnoses, less aggressive
              treatments, and higher survival rates.
            </h3>

            <br />

            <h2 className="text-2xl font-bold text-pink-500">
              How Predica Supports You?
            </h2>
            <ul className="list-disc pl-8 mb-6">
              <li>
                Provides AI-powered risk assessments using your medical data.
              </li>
              <li>
              It offers insights, nearby hospital maps, and AI support to guide your care.
              </li>
              <li>Educates users on breast cancer prevention and symptoms.</li>
            </ul>

            {/* Breast Cancer Description Section */}
            <section className={styles.breastCancerSection}>
              <h2 className="text-2xl font-bold text-pink-500">
                Understanding Breast Cancer
              </h2>
              <h3 className="text-lg mb-6">
                Breast cancer is a disease in which cells in the breast grow
                uncontrollably. It can occur in both men and women, but it's far
                more common in women. Symptoms of breast cancer can vary, but some
                common signs include a lump in the breast, changes in the size or
                shape of the breast, and skin changes. Early detection and
                treatment are crucial for improving outcomes.
              </h3>
            </section>

            {/* Feature Section */}
            <section className={styles.featureSection}>
              <h2 className={styles.sectionTitle}>Our Features</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureBox}>
                  <h3>Prediction</h3>
                  <p className={styles.featureDescription}>
                    AI-powered predictions based on your medical data, helping you
                    understand potential risks.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Awareness</h3>
                  <p className={styles.featureDescription}>
                    Comprehensive information on breast cancer symptoms, risk
                    factors, and the latest treatment options.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Precaution</h3>
                  <p className={styles.featureDescription}>
                  Stay proactive in your health journey with guided exercise videos, precautionary tips, and expert-backed diet advice.
                  </p>
                </div>

                <div className={styles.featureBox}>
                  <h3>Advice</h3>
                  <p className={styles.featureDescription}>
                  Access nearby cancer care centers and receive supportive health insights from AI-powered assistant.
                  </p>
                </div>
              </div>
            </section>



<TestimonialsSection />

            {/* FAQ Section */}
            <section className={styles.faqSection}>
              <h2 className="text-2xl font-bold text-pink-500 mb-4">
                Frequently Asked Questions
              </h2>
              <div className={styles.faqContainer}>
              <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>
                    Is Predica a substitute for a doctor's visit?
                  </h3>
                  <h4 className={styles.faqAnswer}>
                  No, Predica is not a substitute for medical advice. 
                  It offers insights, helps locate nearby cancer hospitals on a map, 
                  and provides AI-based support to assist your healthcare journey.
                  </h4>
                </div>
                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>
                    How accurate are Predica's predictions?
                  </h3>
                  <h4 className={styles.faqAnswer}>
                    Predica uses advanced AI algorithms, but its predictions are not
                    guaranteed to be 100% accurate. The accuracy depends on the
                    quality and completeness of the data provided.
                  </h4>
                </div>
                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>
                    How is my data protected?
                  </h3>
                  <h4 className={styles.faqAnswer}>
                    We take your privacy seriously. Your data is encrypted and stored
                    securely, and we adhere to strict data protection policies.
                    Your trust is our priority.
                  </h4>
                </div>
                <div className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>What if I don't have test results?</h3>
                    <h4 className={styles.faqAnswer}>
                      You can still get a basic risk assessment by answering a few quick questions. 
                      For more accurate predictions, use your test results on the prediction page.
                    </h4>
                 </div>
                
              </div>
            </section>
          </div>
        </div>
        {/* Footer Section */}
        <footer className={styles.footer}>
           

<p>
  For CONTACT us please click the link :🔗{" "}
  <Link 
    to="/contact" 
    style={{
      color: 'blue',
      textDecoration: 'underline',
      fontWeight: '500'
    }}
  >
    Contact
  </Link>
</p>

<p>© 2024 Predica. All rights reserved.</p>
  
        </footer>
      </div>
    </>
  );
};

export default Home;          