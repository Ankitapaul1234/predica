
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";
// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export const DrAi = () => {
//   const [userInput, setUserInput] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleUserInput = (value) => {
//     console.log(value);
//     setUserInput(value);
//   };
//   const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const sendMessage = async (messageText) => {
//     if (messageText.trim() === "") return;

//     try {
//       const prompt = messageText;
//       const result = await model.generateContent(prompt);
//       const response = result.response;
//       const text = response.text();
//       setChatHistory((prev) => [
//         ...prev,
//         { type: "user", message: messageText },
//         { type: "bot", message: text },
//       ]);
//       setUserInput("");
//       console.log(text);
//     } catch (e) {
//       console.log("Error occurred while fetching", e);
//     }
//   };

//   return (
//     <div style={{ position: "relative", height: "500px" }}>
//       <MainContainer>
//         <ChatContainer>
//           <MessageList>
//             {chatHistory.map((elt, i) => (
//               <Message
//                 key={i}
//                 model={{
//                   message: elt.message,
//                   sender: elt.type,
//                   sentTime: "just now",

//                   direction: elt.type === "user" ? "outgoing" : "incoming",
//                 }}
//               />
//             ))}
//           </MessageList>
//           <MessageInput
//             placeholder="Type message here"
//             value={userInput}
//             onChange={(value) => handleUserInput(value)}
//             onSend={sendMessage}
//           />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   );
// };
// export default DrAi;


























// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";
// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./DrAi.css"; // Custom CSS

// const DrAi = () => {
//   const [userInput, setUserInput] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleUserInput = (value) => {
//     setUserInput(value);
//   };

//   const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const sendMessage = async (messageText) => {
//     if (messageText.trim() === "") return;

//     try {
//       const result = await model.generateContent(messageText);
//       const response = result.response;
//       const text = response.text();
//       setChatHistory((prev) => [
//         ...prev,
//         { type: "user", message: messageText },
//         { type: "bot", message: text },
//       ]);
//       setUserInput("");
//     } catch (e) {
//       console.error("Error occurred while fetching", e);
//     }
//   };

//   return (
//     <div className="chat-wrapper">
//       <MainContainer>
//         <ChatContainer>
//           <MessageList>
//             {chatHistory.map((elt, i) => (
//               <Message
//                 key={i}
//                 model={{
//                   message: elt.message,
//                   sender: elt.type,
//                   sentTime: "just now",
//                   direction: elt.type === "user" ? "outgoing" : "incoming",
//                 }}
//               />
//             ))}
//           </MessageList>
//           <MessageInput
//             placeholder="Type message here"
//             value={userInput}
//             onChange={(val) => handleUserInput(val)}
//             onSend={sendMessage}
//           />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   );
// };

// export default DrAi;



















import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./DrAi.css";

const DrAi = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return;

    try {
      const result = await model.generateContent(messageText);
      const response = result.response;
      const text = response.text();
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: messageText },
        { type: "bot", message: text },
      ]);
      setUserInput("");
    } catch (e) {
      console.error("Error occurred while fetching", e);
    }
  };

  return (
    <div className="chat-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <MainContainer style={{ width: "100%", maxWidth: "800px", height: "600px" }}>
        <ChatContainer>
          <MessageList>
            {chatHistory.map((elt, i) => (
              <Message
                key={i}
                model={{
                  message: elt.message,
                  sender: elt.type,
                  sentTime: "just now",
                  direction: elt.type === "user" ? "outgoing" : "incoming",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={userInput}
            onChange={(val) => handleUserInput(val)}
            onSend={sendMessage}
          />
        </ChatContainer>
      </MainContainer>

      {/* Go to Home Button UNDER the chat UI */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#2d89ef",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default DrAi;
