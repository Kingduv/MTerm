// This is an Example to Send WhatsApp Message from React Native App
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Communications from "react-native-communications";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: "5545339750",
      msg: "",
      email: "diegouvillalobos@gmail.com",
    };
  }
  sendOnWhatsApp = () => {
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if (mobile) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          this.state.msg +
          "&phone=52" +
          this.state.mobile_no;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened");
          })
          .catch(() => {
            alert("Make sure Whatsapp installed on your device");
          });
      } else {
        alert("Porfavor inserta un mensaje");
      }
    } 
  };
  render() {
    return (
     
      <View style={styles.container}>
        
        <Text
          style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}
        >
          Envianos un mensaje por whatsapp o correo electrónico
        </Text>

        <TextInput
          value={this.state.msg}
          onChangeText={(msg) => this.setState({ msg })}
          placeholder={"Mensaje"}
          style={styles.input}
        />
        <View style={styles.buttonSend}>
          <Button
            onPress={this.sendOnWhatsApp}
            title="WhatsApp"
            color="#68de78"
          />
        </View>

        <TouchableOpacity
          style={styles.buttonSend}
          onPress={() =>
            Communications.email(
              this.state.email.split(","),
              null,
              null,
              "Contact",
              this.state.msg
            )
          }
        >
          {/*email(to, cc, bcc, subject, body)*/}
          <Text style={styles.text}>Enviar Correo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    padding: 30,
    backgroundColor: "#ffffff",
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    margin: 20,
    backgroundColor: "#D3D3D3",
  },
  buttonSend: {
    width: 200,
    height: 35,
    marginTop: 20,
    backgroundColor: "#9d3deb",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  
});
