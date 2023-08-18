import './App.css';
import { useState } from 'react';
function App() {

  const [question, setQuestion] = useState('');
  const handleSubmit=()=>{
    console.log(question);
  }
  return (
    <div className="App">
      <nav className="navbar">
      <div className="navbar-middle">
          <span className="logo">Style-AI</span>
        </div>
        <div className="navbar-top">
          <div className="login-sign">Login/Sign</div>
        </div>
        
      </nav>
      <div className="content">
        <div className="question-box">
          <input
            type="text"
            placeholder="Ask a question..."
            className="question-input"
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button className="ask-button" onClick={handleSubmit}>Ask</button>
        </div>
      </div>
    </div>
  );
}

export default App;
