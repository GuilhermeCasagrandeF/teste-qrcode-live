import logo from './logo.svg';
import './App.css';
import QrcodeScanner from "./QrcodeScanner";
import {useState} from "react";

function App() {
    const [qrcodeResult, setQrcodeResult] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <QrcodeScanner onScan={(result) => setQrcodeResult(result)} />

          {qrcodeResult &&
              <p style={{background: "red", padding: "40px", width: "100%"}}>
                  {qrcodeResult}
              </p>
          }
      </header>
    </div>
  );
}

export default App;
