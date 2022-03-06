import React from "react";
import { Text, View, Button } from "react-native";

const SettingsTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings! 😄 </Text>
     

      <Button title="Log out" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SettingsTab;
