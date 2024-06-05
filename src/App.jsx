import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [inputmessage, setInputMessage] = useState("");
  const handleOnClick = () => {
    setMessage(inputmessage);
  };
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputmessage}
          onChange={(event) => {
            setInputMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={handleOnClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
