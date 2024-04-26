import './App.css';
import QrcodeScanner from "./QrcodeScanner";
import {useState} from "react";
import BarcodeScanner from "./BarcodeScanner";

function App() {
    const [scanQrcode, setScanQrCode] = useState(false);
    const [scanBarcode, setScanBarcode] = useState(false);
    const [qrcodeResult, setQrcodeResult] = useState(null);
    const [barcodeResult, setBarcodeResult] = useState(null);
  return (
    <div className="App">
      <header className="App-header">

          <button onClick={() =>setScanQrCode(!scanQrcode)}>Escanear Qrcode</button>

          {(scanQrcode && !qrcodeResult) &&
              <QrcodeScanner onScan={(result) => setQrcodeResult(result)} />
          }

          <br/>
          <button onClick={() => setScanBarcode(!scanBarcode)}>Escanear Barcode</button>

          {(scanBarcode && !barcodeResult) &&
            <BarcodeScanner onScan={(result) => setBarcodeResult(result)} />
          }

          {qrcodeResult &&
              <p style={{background: "red", padding: "40px", width: "100%"}}>
                  {qrcodeResult}
              </p>
          }
          {barcodeResult &&
              <p style={{background: "red", padding: "40px", width: "100%"}}>
                  {barcodeResult}
              </p>
          }
      </header>
    </div>
  );
}

export default App;
