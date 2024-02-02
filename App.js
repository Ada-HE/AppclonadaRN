import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}>←</Text>
      <Image style={styles.imagen} source={require('./assets/Logo-Netflix.png')} />
    </View>
  );
}

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <Login />
    </View>
  );
}

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Logeado');
  };

  return (
    <View>
      <TextInput
        style={[styles.input, { marginTop: 130}]}
        placeholder="Email o número de teléfono"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, { marginTop: 10}]}
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Iniciar Sesión'
          onPress={handleLogin}
          color='red'
        />
      </View>
      <View style={styles.textosContainer}>
        <Text style={[styles.recurso, { marginTop: 20}]}>¿Olvidaste la contraseña?</Text>
        <Text style={[styles.recurso, { marginTop: 20}]}>¿Primera vez en Netflix? Suscríbete ya</Text>
        <Text style={[styles.recurso, { marginTop: 20}]}>El inicio de sesión está protegido por Google reCAPTCHA
        para comprobar que no eres un robot. Más info.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    backgroundColor: 'black',
    padding: 20,
    width: '100%',
  },
  cuerpo: {
    flex: 8
  },
  texto: {
    fontSize: 40,
    color: 'white',
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
    borderColor: '#CFCFCF',
    borderRadius: 12,
    height: 65,
    backgroundColor: 'gray'
  },
  imagen: {
    resizeMode: 'center',
    width: 100,
    height: 60
  },
  recurso: {
    fontSize: 13,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 10,
  },
  textosContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
