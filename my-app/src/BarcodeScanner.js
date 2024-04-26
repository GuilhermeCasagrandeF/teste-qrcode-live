import {useZxing} from "react-zxing";

const BarcodeScanner = ({onScan}) => {
    const { ref } = useZxing({

        onDecodeResult(result) {
            onScan(result.getText());
        },
    });

    return (
        <>
            <video ref={ref} style={{width: "100%"}} />
        </>
    );
}

export default BarcodeScanner;