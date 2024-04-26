import {useEffect, useRef} from "react";
import QrScanner from "qr-scanner";

const QrcodeScanner = ({ onScan }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const qrScanner = new QrScanner(videoRef.current, result => {
            qrScanner.stop();
            onScan(result);
        });

        qrScanner.start();

        return () => {
            qrScanner.stop();
        };
    }, [onScan]);

    return (
        <div>
            <video ref={videoRef} playsInline style={{width: "100%"}} />
        </div>
    );
};

export default QrcodeScanner;