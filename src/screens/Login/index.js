import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    login:"",
    password:"",
  });
  
  return (
    <View style={styles.container}>
      <Gradient />
      <image style= {styles.logo} source={logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput 
      value={user.login}
      onChangeText={setUser}
      placeholder={"Digite seu login"}
      placeholderTextColor={"gray"}
      style={styles.inputLogin}
      />
      <TextInput
      value={user.password}
      onChangeText={setUser}
      placeholder={"Digite sua senha"}
      placeholderTextColor={"gray"}
      style={styles.inputPassword}
      />
= 

      <Text style={styles.recover} >Esqueceu sua senha? Clique aqui</Text>
      <TouchableOpacity/>
      <Text>ENTRAR</Text>
      <Text>Não possui cadastro? Cadastre-se!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  recover:{
    color: "#120A8F",
    fontFamily: "sans-serif",
    fontSize: 18,
    padding: "12px",
  },

  inputLogin:{
    height: 31,
    width: 188,
    border: '1px solid #00ffff',
    borderRadius: 5,
    paddingLeft: 5,
    fontFamily:'sans-serif',
    marginBottom: 20,
  },

  inputPassword:{
    height: 31,
    width: 188,
    border: '1px solid #00ffff',
    borderRadius: 5,
    paddingLeft: 5,
    fontFamily:'sans-serif',
    marginBottom: 5,
  },

  logo: {
    width: "100px",
    height: 100,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: "20px",
  },
});