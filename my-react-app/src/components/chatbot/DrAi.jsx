// import { useState } from "react";
// import axios from "axios";
// import "./DrAi.css";

// const DrAi = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const API_KEY = process.env.AIzaSyBwOf7H3eCiErSpSa5YLP5_rZknFF1OX5g;

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     try {
//       const res = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AIzaSyBwOf7H3eCiErSpSa5YLP5_rZknFF1OX5g}`,
//         { prompt: { text: input } }
//       );
//       setResponse(res.data.candidates[0].content);
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse("DrAi couldn't process your request.");
//     }
//   };

//   return (
//     <div className="drai-container">
//       <h2>DrAi - Your AI Assistant</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="drai-input"
//         placeholder="Ask DrAi anything..."
//       />
//       <button onClick={sendMessage} className="drai-button">Send</button>
//       {response && <p className="drai-response">{response}</p>}
//     </div>
//   );
// };

// export default DrAi;








// import { useState } from "react";
// import axios from "axios";
// import "./DrAi.css";

// const DrAi = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility
//   const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

//   if (!API_KEY) {
//     console.error("🚨 API Key is missing! Check your .env file.");
//     return null; // Prevent component from rendering
//   }

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     try {
//       const res = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
//         { prompt: { text: input } }
//       );
//       setResponse(res.data.candidates[0]?.content || "No response from DrAi.");
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse("DrAi couldn't process your request.");
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button className="drai-float-btn" onClick={() => setIsOpen(!isOpen)}>
//         🩺 Chat with DrAi
//       </button>

//       {/* Chatbot Window */}
//       {isOpen && (
//         <div className="drai-container">
//           <button className="drai-close-btn" onClick={() => setIsOpen(false)}>✖</button>
//           <h2>DrAi - Your AI Assistant</h2>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="drai-input"
//             placeholder="Ask DrAi anything..."
//           />
//           <button onClick={sendMessage} className="drai-button">Send</button>
//           {response && <p className="drai-response">{response}</p>}
//         </div>
//       )}
//     </>
//   );
// };

// export default DrAi;






import { useState } from "react";
import axios from "axios";
import "./DrAi.css";

const DrAi = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("🚨 API Key is missing! Check your .env file.");
    return null; // Prevent component from rendering
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        { prompt: { text: input } }
      );
      const botMessage = { sender: 'bot', text: res.data.candidates[0]?.content || "No response from DrAi." };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { sender: 'bot', text: "DrAi couldn't process your request." };
      setMessages([...messages, newMessage, errorMessage]);
    }

    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button className="drai-float-btn" onClick={() => setIsOpen(!isOpen)}>
        🩺 Chat with DrAi
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="drai-container">
          <button className="drai-close-btn" onClick={() => setIsOpen(false)}>✖</button>
          <h2>DrAi - Your AI Assistant</h2>
          <div className="drai-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`drai-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="drai-input"
            placeholder="Ask DrAi anything..."
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="drai-button">Send</button>
        </div>
      )}
    </>
  );
};

export default DrAi;