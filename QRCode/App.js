import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [QRCOnTarget, setQRCOnTarget] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.infoText}>Necesitas permitir acceso a la cámara</Text>
        <TouchableOpacity style={styles.buttonPrimary} onPress={requestPermission}>
          <Text style={styles.buttonText}>Dar permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleScan = ({ data }) => {
    setScannedData(data);
  };

  const copyToClipboard = () => {
    if (scannedData) {
      Clipboard.setString(scannedData);
    }
  }

  const goToLink = () => {
    if (scannedData) {
      Linking.openURL(scannedData);
    }
  }

  return (
    <View style={styles.container}>
      {scannedData ? (
        <>
          <Text style={styles.title}>Resultado del Escaneo</Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{scannedData}</Text>
          </View>
          <TouchableOpacity style={styles.buttonPrimary} onPress={goToLink}>
            <Text style={styles.buttonText}>Ir al enlace</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary} onPress={copyToClipboard}>
            <Text style={styles.buttonText}>Copiar enlace</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => setScannedData(null)}>
            <Text style={styles.buttonText}>Escanear de nuevo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Escanear Código QR</Text>
          <CameraView style={styles.camera} onBarcodeScanned={handleScan} barcodeScannerSettings={{ barcodeTypes: ["qr"], }} />
          <Text style={styles.infoText}>Apunta hacia un código QR</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 24,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F5F5',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: '#bbbbbb',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
  camera: {
    height: 350,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#000',
  },
  resultBox: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 12,
    borderColor: '#555',
    borderWidth: 1,
    marginBottom: 15,
  },
  resultText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#505050',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
