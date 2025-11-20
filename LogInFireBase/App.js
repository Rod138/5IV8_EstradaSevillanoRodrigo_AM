import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'react-native-web';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const registrar = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => setMensaje("Usuario creado"))
      .catch((e) => setMensaje(e.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => setMensaje("Usuario logueado"))
      .catch((e) => setMensaje(e.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextH1}>Iniciar sesión</Text>
      <TextInput
        placeholder='Email'
        onChangeText={setEmail}
        style={styles.TextInput}
      />

      <TextInput
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        style={styles.TextInput}
      />
      <TouchableOpacity onPress={registrar} style={styles.Button}>
        <Text style={{ color: 'white' }}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={login} style={styles.Button}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{mensaje}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  Button: {
    backgroundColor: '#000',
    padding: 10,
    marginBottom: 10,
    width: '50%',
    alignItems: 'center',
    borderRadius: 15,
  },
  TextH1: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  message: {
    color: '#4f9bffff',
    marginTop: 20,
    textAlign: 'center',
  },
});
