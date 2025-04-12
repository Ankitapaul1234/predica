

import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Overview</h1>

          {/* Who is it for? */}
          <section className={styles.section}>
            <h2>Who is it for?</h2>
            <p>
              Predict is designed for women who have undergone surgery for early
              invasive breast cancer. It assists them in determining which
              additional treatments may enhance their survival rates.
              Additionally, it is beneficial for healthcare professionals
              seeking AI-assisted insights and researchers exploring medical
              machine learning applications.
            </p>
          </section>
             
        <br/>

          {/* How Predict Works? */}
          <section className={styles.section}>
            <h2>How Predict Works?</h2>
            <p>
              Predict utilizes <strong>Logistic Regression</strong> to analyze
              patient data and estimate breast cancer survival rates over time.
              This supervised machine learning algorithm is particularly
              effective for binary classification problems, such as predicting
              cancer outcomes.
            </p>

            <br/>

            <p>
              The algorithm considers multiple features from a patient’s medical
              data, including:
            </p>
            <ul>
              <li>
                <strong>Tumor Size and Shape:</strong> Radius, perimeter, and
                area measurements.
              </li>
              <li>
                <strong>Texture and Smoothness:</strong> Variations in tissue
                appearance.
              </li>
              <li>
                <strong>Compactness, Concavity, and Symmetry:</strong>{" "}
                Characteristics of tumor cell growth.
              </li>
              <li>
                <strong>Lymph Node Involvement:</strong> Spread of cancer to
                nearby lymph nodes.
              </li>
              <li>
                <strong>Hormone Receptor Status:</strong> Presence of receptors
                like ER (Estrogen Receptor) and HER2.
              </li>
            </ul>
            <p>
              Using these inputs, the model applies a mathematical function to
              calculate the probability of survival based on historical data
              from thousands of similar cases.
            </p>

            <br/>

            <h3>Why Logistic Regression?</h3>
            <ul>
              <li>
                Ideal for predicting binary outcomes like survival
                probabilities.
              </li>
              <li>
                Provides clear probability scores for easy interpretation by
                doctors.
              </li>
              <li>
                Handles multiple independent variables for accurate predictions.
              </li>
            </ul>


            <p>
              Predict provides estimated survival rates at different time
              intervals (e.g., 5 years, 10 years, and 15 years) along with the
              expected benefits of additional treatments. However, final
              decisions should always be made in consultation with healthcare
              professionals.
            </p>
          </section>

          <br/>


           <div
                        className={styles.imageContainer}
                        style={{ width: "600px", height: "auto", margin: "20px auto" }}
                      >
                        <img
                          src="src/img/ai.jpg"
                          alt="Breast Cancer Awareness"
                          className={`${styles.image} ${styles.animatedImage}`}
                        />
                      </div>

          <br />
          {/* How Predict Helps Users */}
          <section className={styles.section}>
            <h2>How Predict Helps Users</h2>
            <p>
              Predict empowers users with personalized insights to make informed
              health decisions. It supports proactive health management through
              the following features:
            </p>
            <ul>
              <li>
                <strong>Awareness:</strong> Comprehensive information on breast
                cancer symptoms, risk factors, and the latest treatment options.
              </li>
              <li>
                <strong>Advice:</strong> Connect with healthcare professionals
                for personalized guidance and expert medical advice.
              </li>
              <li>
                <strong>Precaution:</strong> Personalized preventative measures
                to minimize your risk and promote proactive health management.
              </li>
              <li>
                <strong>Prediction:</strong> AI-powered predictions based on
                your medical data, helping you understand potential risks and
                make informed choices.
              </li>
            </ul>
          </section>

          <br/>

          {/* FAQ Section */}
          <div>
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
                    No, Predica is not a substitute for professional medical
                    advice. It is designed to provide insights based on your
                    data and should be used as a tool to inform discussions with
                    your healthcare provider.
                  </h4>
                </div>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How accurate are Predica's predictions?
                </h3>
                <h4 className={styles.faqAnswer}>
                  Predica uses advanced AI algorithms, but its predictions are
                  not guaranteed to be 100% accurate. The accuracy depends on
                  the quality and completeness of the data provided.
                </h4>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How is my data protected?
                </h3>
                <h4 className={styles.faqAnswer}>
                  We take your privacy seriously. Your data is encrypted and
                  stored securely, and we adhere to strict data protection
                  policies. Your trust is our priority.
                </h4>
              </div>
              <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What data is required for Predict to generate results?</h3>
              <h4 className={styles.faqAnswer}>
              Predict requires data such as tumor size, lymph node involvement, hormone receptor status, and other clinical factors to estimate survival rates.
              </h4>
            </div>
            </section>
          </div>
        </div>
        {/* Footer Section */}
        <footer className={styles.footer}>
          <p>© 2024 Predica. All rights reserved.</p>
          <p>
  For CONTACT us please click the link :🔗{" "}
  <Link 
    to="/contact" 
    style={{
      color: 'light blue',
      textDecoration: 'underline',
      fontWeight: '500'
    }}
  >
    Contact
  </Link>
</p>
        </footer>
      </div>
    </>
  );
};

export default About;
