import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import ViewImageScreen from "../screens/ViewImageScreen";

function WelcomeScreen(props) {
  
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/regnetBackgroundImage.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/regnet_co_eps-GREEN.jpg")}
        />
        <Text style={styles.text}>Say What you Feel</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
         console.log('hello')
        }}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.registerButton}>
        <Text style={styles.register}>REGISTER</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1, // takes the entire screen
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 230,
    height: "328%",
    borderRadius: 5,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  text: {
    top: 20,
    color: "white",
  },
  register: {
    top: 20,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  login: {
    top: 20,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
