import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <text style={styles.title}>marketspace</text>
        <text style={styles.slogan}>Seu espaço de compra e venda</text>

        <text style={styles.legend}>Acesse sua conta</text>
        <TextInput placeholder="Email" style={styles.input1} />
        <TextInput style={styles.input2} placeholder="Senha" secureTextEntry={hidePassword} value={password} onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
          <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createAccount}>
        <text style={styles.legend2}>Ainda não tem acesso?</text>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  main: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    height: '75%',
    width: '100%',
    backgroundColor: "#EDECEE",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 45,
    width: '75%',
    backgroundColor: '#6879C1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    position: 'fixed',
    top: '60%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  input1: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '45%'
  },
  input2: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '53%'
  },
  title: {
    color: '#1A181B',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight: 'bold',
    position: 'fixed',
    top: 100,
    marginTop: 80
  },
  slogan: {
    color: '#A3A1A5',
    fontFamily: 'Helveltica',
    marginBottom: 50,
    margin: 25,
    fontSize: 20,
    position: 'fixed',
    top: '24%'
  },
  legend: {
    color: '#47444A',
    fontFamily: 'Arial',
    marginTop: 95
  },
  logo: {
    width: 100,
    height: 80,
    position: 'fixed',
    top: 70,
  },
  button2: {
    height: 45,
    width: '175%',
    backgroundColor: '#D9D8DA',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonText2: {
    color: '#000011',
    fontSize: 16,
    fontWeight: 500,
  },
  legend2: {
    color: '#47444A',
    fontFamily: 'Arial',
    marginBottom: 15
  },
  createAccount: {
    position: 'fixed',
    top: '83%',
  },
  icon: {
    position: 'fixed',
    top: '57%',
    right: '16%'
  },


});
export default App;

