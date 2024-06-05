import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, getInputMessage] = useState("");
  const [displayMessage, getDisplayMessage] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{displayMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputMessage}
          onChange={(event) => {
            getInputMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            getDisplayMessage(inputMessage);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
