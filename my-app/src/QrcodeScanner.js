import {useEffect, useRef} from "react";
import QrScanner from "qr-scanner";

const QrcodeScanner = ({ onScan }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const qrScanner = new QrScanner(videoRef.current, result => {
            qrScanner.stop();
            onScan(result);
            alert(result);
        });

        qrScanner.start();

        return () => {
            qrScanner.stop();
        };
    }, [onScan]);

    return (
        <div>
            <video ref={videoRef} playsInline />
        </div>
    );
};

export default QrcodeScanner;