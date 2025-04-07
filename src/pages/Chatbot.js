import React, { useState, useEffect, useRef } from 'react';
import "./chatbot.css";

const questions = [
  { id: 1, text: "What role are you hiring for?", type: "checkbox", options: ["FullStack Developer", "Backend Developer", "Frontend Developer", "Software Developer", "Something else"] },
  { id: 2, text: "What technologies or programming languages are required for this role?", type: "checkbox", options: ["Nodejs/Javascript/Typescript", "Reactjs/Angularjs", "Java/SpringBoot", "Python", "Vue.js", "Something else"] },
  { id: 3, text: "How many years of experience are you looking for?", type: "radio", options: ["0-2 years", "3-5 years", "6-9 years", "10+ years"] },
  { id: 4, text: "Which database experience do you require for this role?", type: "checkbox", options: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Oracle", "SQLite", "Something else"] },
  { id: 5, text: "Which cloud platforms do you require experience with?", type: "checkbox", options: ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Something else"] },
  { id: 6, text: "Is AI/ML expertise a requirement for this role?", type: "radio", options: ["Yes", "No", "Nice to have"] },
];

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! Let’s assess how my skills align with requirements.' }]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);  // Array of arrays for each question's answers
  const [selectedOptions, setSelectedOptions] = useState([]);  // Currently selected options for the current question
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [customValue, setCustomValue] = useState('');  // State for custom value input
  const chatboxRef = useRef(null);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      setSelectedOptions([]); // Reset for each new question
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: question.text }]);
      setCustomValue(''); // Reset custom value
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const calculateMatchScore = async (finalResponses) => {
    try {
      const response = await fetch('http://localhost:5000/calculate-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responses: finalResponses }),  // Send finalResponses as array of arrays
      });

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: response.ok
            ? `Thank you for your responses! Your match score is: ${data.score}%`
            : data.message || 'There was an error calculating your match score.'
        }
      ]);
    } catch (error) {
      console.error('Error calculating match score:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'An error occurred. Please try again later.' }]);
    }
  };

  const sendMessage = () => {
    if (selectedOptions.length === 0 && !customValue) return;  // Don't send empty response
  
    // If "Something else" was selected and the custom value is provided, add it to selected options
    const finalSelectedOptions = customValue ? [...selectedOptions, customValue] : selectedOptions;
  
    // Remove "Something else" from the response shown in the chat window
    const userAnswer = finalSelectedOptions
      .filter(option => option !== "Something else")  // Remove "Something else" from the displayed response
      .join(", ");  // Concatenate selected options (and custom value if any)
  
    const updatedResponses = [...responses, finalSelectedOptions];  // Store the final selected options (including "Something else" if selected)
  
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userAnswer }]);  // Display the answer without "Something else"
    setResponses(updatedResponses);
    setSelectedOptions([]);  // Clear the selected options after sending
    setCustomValue('');  // Reset custom value after sending
  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);  // Move to the next question
    } else {
      // For the last question, just send the selected responses (not the options)
      setCurrentQuestionIndex(prev => prev + 1);  // Move to the next question
  
      calculateMatchScore(updatedResponses);  // Calculate match score when all questions are answered
    }
  };
  

  const toggleOption = (option) => {
    if (questions[currentQuestionIndex].type === "radio") {
      setSelectedOptions([option]);  // Only select one option for radio type
    } else {
      setSelectedOptions(prev =>
        prev.includes(option)
          ? prev.filter(o => o !== option)  // Unselect option if it's already selected
          : [...prev, option]  // Add option to selected options
      );
    }

    // If "Something else" is selected, show the input box
    if (option === "Something else") {
      setCustomValue('');  // Clear any previously entered custom value
    }
  };

  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);  // Update custom value input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();  // Trigger send message when Enter is pressed
    }
  };

  const closeChatbox = () => setIsChatOpen(false);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    isChatOpen && (
      <div className="chatbot-window">
        <div className="chatbot-header">
          <span>Chatbot</span>
          <button className="close-btn" onClick={closeChatbox}>X</button>
        </div>
        <div className="chatbox-container" ref={chatboxRef}>
          <div className="chatbox">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          {questions[currentQuestionIndex] && (
            <div onKeyDown={handleKeyDown}> 
              <div className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    className={`option-button ${selectedOptions.includes(option) ? 'selected' : ''}`}
                    onClick={() => toggleOption(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>

              {/* Show text input box if "Something else" is selected */}
              {selectedOptions.includes("Something else") && (
                <input
                  type="text"
                  value={customValue}
                  onChange={handleCustomValueChange}
                  placeholder="Please specify..."
                  className="custom-input"
                />
              )}

              <button
                type="button"
                className="next-btn"
                onClick={sendMessage}
              >
                {isLastQuestion ? "Submit" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Chatbot;
