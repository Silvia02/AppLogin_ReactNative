import React, { useState } from "react";
import colors from "../config/colors";
import WelcomeScreen from "../screens/WelcomeScreen";

import { View, StyleSheet, Button, TextInput, Text } from "react-native";

function ViewImageScreen() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </Text>
        {/* <WelcomeScreen datatoParent={email} /> */}
      </View>
      ,
      <View style={styles.inputView}>
        <Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </Text>
        {/* <WelcomeScreen datatoParent={password} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});

export default ViewImageScreen;
