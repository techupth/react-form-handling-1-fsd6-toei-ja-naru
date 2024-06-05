import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setInputMessage(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setGreetingMessage(inputMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
