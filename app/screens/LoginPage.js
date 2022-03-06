import React from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView, View, Text } from "react-native";
import { Card, TextInput, Button, StyleSheet } from "react-native-paper";
import { loginStyles } from "../styles/LoginStyles";
import { auth } from '../firebase';

export const LoginPage = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email.trim().toLowerCase(), password);

    console.log(data);
  };
  return (
    <SafeAreaView style={loginStyles.content}>
      <View style={loginStyles.view}>
        <Card>
          {/* <Card.Title
        
            titleStyle={loginStyles.cardTitle}
          ></Card.Title> */}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                mode="outlined"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />

          <View style={loginStyles.errorMsg}>
            {errors.email && (
              <Text style={loginStyles.errorText}>
                You must fill in your email
              </Text>
            )}
          </View>
          <Controller
            control={control}
            //events 
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          <View style={loginStyles.errorMsg}>
            {errors.password && (
              <Text style={loginStyles.errorText}>
                You must fill in your password
              </Text>
            )}
          </View>

          <Button
            style={loginStyles.btnLogin}
            mode="contained"
            compact={false}
            onPress={handleSubmit(onSubmit)}
            icon="account-arrow-right"
          >
            Login
          </Button>
          <View style={loginStyles.switchScreenText}>
            <Text>Don't have an account yet?</Text>
          </View>
          <Button
            style={loginStyles.switchBtn}
            icon="account-plus"
           
            onPress={() => {
              navigation.navigate("RegisterPage");
            }}
          >
            Register Account
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
};
