

// import React, { useState } from 'react';
// import axios from 'axios';
// import './DrAi.css';

// // import { GEMINI_API_KEY } from "./config";
// // const API_KEY = GEMINI_API_KEY;


// const DrAi = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleSendMessage = async () => {
//         if (inputValue.trim() === '') return;

//         const userMessage = { role: 'user', content: inputValue };
//         setMessages((prev) => [...prev, userMessage]);
//         setIsLoading(true);

//         try {
//             const response = await axios.post(
//                 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
//                 {
//                     contents: [{ parts: [{ text: inputValue }] }],
//                 },
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );

//             const botContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from DrAi.";
//             const botMessage = { role: 'bot', content: botContent };
//             setMessages((prev) => [...prev, botMessage]);
//         } catch (error) {
//             console.error('Error sending message:', error);
//             setMessages((prev) => [...prev, {
//                 role: 'bot',
//                 content: "Hi there! DrAi is facing some issues right now."
//             }]);
//         } finally {
//             setInputValue('');
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="chatbot-container">
//             <div className="message-list">
//                 {messages.map((msg, index) => (
//                     <p key={index} className={`message ${msg.role}`}>
//                         {msg.content}
//                     </p>
//                 ))}
//                 {isLoading && (
//                     <p className="message bot">DrAi is typing...</p>
//                 )}
//             </div>
//             <div className="input-area">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     className="input-field"
//                     placeholder="Type your message..."
//                 />
//                 <button onClick={handleSendMessage} className="send-button">Send</button>
//             </div>
//         </div>
//     );
// };

// export default DrAi;







import React, { useState } from 'react';
import axios from 'axios';
import './DrAi.css';

const DrAi = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const userMessage = { role: 'user', content: inputValue };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
                {
                    contents: [{ parts: [{ text: inputValue }] }],
                },
                {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const botContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from DrAi.";
            const botMessage = { role: 'bot', content: botContent };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [...prev, {
                role: 'bot',
                content: "Hi there! DrAi is facing some issues right now."
            }]);
        } finally {
            setInputValue('');
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="message-list">
                {messages.map((msg, index) => (
                    <p key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </p>
                ))}
                {isLoading && (
                    <p className="message bot">DrAi is typing...</p>
                )}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default DrAi;
