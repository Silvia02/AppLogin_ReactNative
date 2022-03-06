import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import { Appbar } from "react-native-paper";
import { LoginPage } from "../screens/LoginPage";
//import { firebase } from '../firebase';


const Home = ({ navigation }) => {


  return (
    // <Appbar.Header>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!🔆</Text>
      {/* <Text style={styles.title}>Welcome {user.email}!</Text> */}

      <Button
        title="log out"
        onPress={() => {
       
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
