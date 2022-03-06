import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage } from "./screens/LoginPage";
import Home from "./components/Home";
import { RegisterPage } from "./screens/RegisterPage";
import { auth } from "./firebase";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SettingsTab from "./screens/SettingsTab";
import { Button } from "react-native-paper";

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: "transparent",
    },
  });
  const [signedIn, setSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);


    } else {
      setSignedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {signedIn ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#29434e" }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "home") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "settings") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                // <FontAwesome name="list-ul" size={size} color={color} />
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              //     if (route.name === "settings") {
              //       return <FontAwesome name="cogs" size={size} color={color} />;
              //     }
              //   },
            })}
            // tabBarOptions={{
            //   activeTintColor: "white",
            //   inactiveTintColor: "#819ca9",
            //   style: {
            //     backgroundColor: "#29434e",
            //   },
            // }}
          >
            <Tab.Screen
              name="home"
              component={Home}
              options={{
                title: "Home",
              }}
            ></Tab.Screen>

            <Tab.Screen
              name="settings"
              component={SettingsTab}
              options={{
                title: "Settings",
              }}
            />
          </Tab.Navigator>
        </SafeAreaView>
      ) : (
        //   <View>
        //       <Home />
        //       <Text>Signed in</Text>

        //   </View>
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login"
            mode="card"
            screenOptions={{}}
          >
            <Screen
              name="Login"
              component={LoginPage}
              options={{
                cardStyleInterpolator: forFade,
                headerStyle: {
                  backgroundColor: "#29434e",
                  borderBottomColor: "#29434e",
                },
                headerTintColor: "#fff",
              }}
            />
            <Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{
                title: "Register",
                cardStyleInterpolator: forFade,
                headerStyle: {
                  backgroundColor: "#29434e",
                  borderBottomColor: "#29434e",
                },
                headerTintColor: "#fff",
              }}
            />
            {/* <Screen name="Home" component={Home} />
              <Screen name="AppNavigator" component={AppNavigator} /> */}
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};
export default AppNavigator;
const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    top: 100,
    alignItems: "center",
  },
});
