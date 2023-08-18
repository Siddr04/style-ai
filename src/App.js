import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Signup from "./pages/SignUp";

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); // State to control SignUp component

  const handleSubmit = () => {
    axios.post("http://localhost:3024/search/question", { question: question })
      .then((response) => {
        if (response.data.status === "success") {
          setResponse(response.data.response);
        }
      });
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-middle">
          <span className="logo">Style-AI</span>
        </div>
        <div className="navbar-top">
          {/* Toggle SignUp component visibility */}
          <div className="login-sign" onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Close" : "Login/Sign"}
          </div>
        </div>
      </nav>
      <div className="content">
        {/* Show SignUp component if showSignUp is true */}
        {showSignUp ? (
          <Signup />
        ) : (
          <div className="question-box">
            <input
              type="text"
              placeholder="Ask a question..."
              className="question-input"
              onChange={(event) => setQuestion(event.target.value)}
            />
            <button className="ask-button" onClick={handleSubmit}>Ask</button>
          </div>
        )}
        
        {response && (
          <div className="answer-box">
            <p className="response-text">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
