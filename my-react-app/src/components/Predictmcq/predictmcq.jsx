// import React, { useState } from "react";
// import styles from "./style.module.css"; // Correct import

// const questions = [
//   {
//     question: "Do you have a family history of breast cancer?",
//     options: [
//       { text: "Yes, close relative (mother/sister)", score: 2 },
//       { text: "Yes, distant relative (aunt/grandmother)", score: 1 },
//       { text: "No family history", score: 0 },
//       { text: "I don't know", score: 0 },
//     ],
//   },
//   {
//     question: "Have you noticed any lump or thickening?",
//     options: [
//       { text: "Yes, recently", score: 2 },
//       { text: "Yes, but long ago and treated", score: 1 },
//       { text: "No", score: 0 },
//       { text: "Not sure", score: 0 },
//     ],
//   },
//   {
//     question: "Changes in breast shape, size, or skin texture?",
//     options: [
//       { text: "Significant changes recently", score: 2 },
//       { text: "Minor changes", score: 1 },
//       { text: "No changes", score: 0 },
//       { text: "I don't know", score: 0 },
//     ],
//   },
//   {
//     question: "Nipple discharge, redness, or pain?",
//     options: [
//       { text: "Yes", score: 2 },
//       { text: "Sometimes", score: 1 },
//       { text: "No", score: 0 },
//       { text: "Not sure", score: 0 },
//     ],
//   },
//   {
//     question: "Your age group?",
//     options: [
//       { text: "Below 30", score: 0 },
//       { text: "30-45", score: 1 },
//       { text: "46-60", score: 2 },
//       { text: "Above 60", score: 2 },
//     ],
//   },
// ];

// function BreastCancerPredictionQuiz() {
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [result, setResult] = useState("");

//   const handleOptionChange = (qIndex, score) => {
//     const newAnswers = [...answers];
//     newAnswers[qIndex] = score;
//     setAnswers(newAnswers);
//   };

//   const calculateRisk = () => {
//     const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

//     if (totalScore <= 2) {
//       setResult("Low Risk");
//     } else if (totalScore <= 5) {
//       setResult("Medium Risk");
//     } else {
//       setResult("High Risk");
//     }
//   };

//   return (
//     <div className={styles.quizContainer}>
//       <h2 className={styles.title}>Breast Cancer Risk Prediction Quiz</h2>

//       {questions.map((q, qIndex) => (
//         <div key={qIndex} className={`${styles.question} ${styles.fadeIn}`}>
//           <p>{q.question}</p>
//           {q.options.map((option, oIndex) => (
//             <label key={oIndex} className={styles.option}>
//               <input
//                 type="radio"
//                 name={`question-${qIndex}`}
//                 value={option.score}
//                 onChange={() => handleOptionChange(qIndex, option.score)}
//                 checked={answers[qIndex] === option.score}
//               />
//               {option.text}
//             </label>
//           ))}
//         </div>
//       ))}

//       <button className={styles.submitButton} onClick={calculateRisk}>
//         Submit
//       </button>

//       {result && (
//         <div className={`${styles.result} ${styles.fadeIn}`}>
//           Prediction: <span>{result}</span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BreastCancerPredictionQuiz;

















import React, { useState } from "react";
import styles from "./style.module.css"; // Correct import

const questions = [
  {
    question: "Do you have a family history of breast cancer?",
    options: [
      { text: "Yes, close relative (mother/sister)", score: 2 },
      { text: "Yes, distant relative (aunt/grandmother)", score: 1 },
      { text: "No family history", score: 0 },
      { text: "I don't know", score: 0 },
    ],
  },
  {
    question: "Have you noticed any lump or thickening?",
    options: [
      { text: "Yes, recently", score: 2 },
      { text: "Yes, but long ago and treated", score: 1 },
      { text: "No", score: 0 },
      { text: "Not sure", score: 0 },
    ],
  },
  {
    question: "Changes in breast shape, size, or skin texture?",
    options: [
      { text: "Significant changes recently", score: 2 },
      { text: "Minor changes", score: 1 },
      { text: "No changes", score: 0 },
      { text: "I don't know", score: 0 },
    ],
  },
  {
    question: "Nipple discharge, redness, or pain?",
    options: [
      { text: "Yes", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No", score: 0 },
      { text: "Not sure", score: 0 },
    ],
  },
  {
    question: "Your age group?",
    options: [
      { text: "Below 30", score: 0 },
      { text: "30-45", score: 1 },
      { text: "46-60", score: 2 },
      { text: "Above 60", score: 2 },
    ],
  },
];

function BreastCancerPredictionQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState("");

  const handleOptionChange = (score) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRisk();
    }
  };

  const calculateRisk = () => {
    const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

    if (totalScore === 0) {
      setResult("No Risk");
    } else if (totalScore <= 2) {
      setResult("Low Risk");
    } else if (totalScore <= 5) {
      setResult("Medium Risk");
    } else {
      setResult("High Risk");
    }
  };

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.title}>Breast Cancer Risk Prediction Quiz</h2>

      {!result ? (
        <div className={`${styles.question} ${styles.fadeIn}`}>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option.score}
                onChange={() => handleOptionChange(option.score)}
                checked={answers[currentQuestion] === option.score}
              />
              {option.text}
            </label>
          ))}
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={answers[currentQuestion] === null}
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      ) : (
        <div className={`${styles.result} ${styles.fadeIn}`}>
          Prediction:{" "}
          <span
            className={
              result === "High Risk"
                ? styles.highRisk
                : result === "Medium Risk"
                ? styles.mediumRisk
                : result === "Low Risk"
                ? styles.lowRisk
                : styles.noRisk
            }
          >
            {result}
          </span>
        </div>
      )}
    </div>
  );
}

export default BreastCancerPredictionQuiz;
