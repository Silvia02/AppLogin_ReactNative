import React from "react";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { LoginPage } from "./app/screens/LoginPage";
import { RegisterPage } from "./app/screens/RegisterPage";
import AppNavigator from "./app/app.navigation";
import Home from "./app/components/Home";

export default function App() {
 
  return (
    <PaperProvider>
      {/* <LoginPage /> */}
      {/* <Home />  */}

      <AppNavigator />
      {/* <RegisterPage />  */}
    </PaperProvider>
    // <WelcomeScreen />
    // <ViewImageScreen />
  );
}
