import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  
  const [confirmPassword, setconfirmPassword] = useState('');
  const [hideconfirmPassword, setHideconfirmPassword] = useState(true);

  const toggleconfirmPasswordVisibility = () => {
    setHideconfirmPassword(!hideconfirmPassword);
  };

  return (
    <View style={styles.container}>
    
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <text style={styles.title}>Boas Vindas!</text>
        <text style={styles.slogan}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</text>

        <Image source={require('./assets/profile.png')} style={styles.profile} />

        <TextInput placeholder="Nome" style={styles.name} />
        <TextInput placeholder="Email" style={styles.email} />
        <TextInput placeholder="Telefone" style={styles.phone} />
        <TextInput style={styles.password} placeholder="Senha" secureTextEntry={hidePassword} value={password} onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon1}>
          <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#555" />
        </TouchableOpacity>
        <TextInput style={styles.confirmPassword} placeholder="Confirmar senha" secureTextEntry={hideconfirmPassword} value={confirmPassword} onChangeText={(text) => setconfirmPassword(text)} />
        <TouchableOpacity onPress={toggleconfirmPasswordVisibility} style={styles.icon2}>
          <Icon name={hideconfirmPassword ? 'eye-slash' : 'eye'} size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <text style={styles.legend}>Já tem uma conta?</text>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Ir para o Login</Text>
        </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDECEE'
  },
  button: {
    height: 45,
    width: '75%',
    backgroundColor: '#1A181B',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    position: 'fixed',
    top: '70%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  name: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '37%'
  },
  email: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '44%'
  },
  phone: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '51%'
  },
  password: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,   
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '58%'
  },
  confirmPassword: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '65%'
  },
  title: {
    color: '#1A181B',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'fixed',
    top: 60,
    marginTop: 80
  },
  slogan: {
    color: '#3F3C42',
    width: '75%',
    fontFamily: 'Arial',
    marginBottom: 50,
    margin: 25,
    fontSize: 15,
    position: 'fixed',
    top: '17%',
    textAlign: 'center'
  },
  logo: {
    width: 80,
    height: 70,
    position: 'fixed',
    top: 70,
    resizeMode: 'contain'
  },
  button2: {
    height: 45,
    width: '75%',
    backgroundColor: '#D9D8DA',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'fixed',
    top: '90%'
  },
  buttonText2: {
    color: '#000011',
    fontSize: 16,
    fontWeight: 500,
  },
  legend: {
    color: '#47444A',
    fontFamily: 'Arial',
    position: 'fixed',
    top: '85%'
  },
  icon1: {
    position: 'fixed',
    top: '59.5%',
    right: '16%'
  },
  profile: {
    width: 100,
    height: 90,
    position: 'fixed',
    top: '25%',
    resizeMode: 'contain'
  },
  icon2: {
    position: 'fixed',
    top: '66.5%',
    right: '16%'
  }



});
export default App;

