import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo!</Text>
      <StatusBar style="light" /> 
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="#BB86FC"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F5F5F5',
    fontSize: 20,
  },
});
