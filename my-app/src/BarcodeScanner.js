import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = ({onScan}) => {
    return (
        <>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) onScan(result.text);
                    else onScan("Not Found");
                }}
            />
        </>
    );
}

export default BarcodeScanner;