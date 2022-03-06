import React, { useRef } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Appbar, TextInput, Button } from "react-native-paper";
import { registerStyles } from "../styles/RegisterStyles";
import { auth } from "../firebase";

export const RegisterPage = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (formData) => {
    const { email, password } = formData;
    auth.createUserWithEmailAndPassword(email.trim().toLowerCase(), password);
    console.log(formData);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Appbar>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </Appbar> */}
        <View style={registerStyles.content}>
          <TextInput label="Name" />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                keyboardType="email-address"
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
          <View>{errors.email && <Text>You must enter your email</Text>}</View>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                label="Password"
                secureTextEntry={true}
                right={<TextInput.Icon name="eye-off-outline" />}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          <View>
            {errors.password && <Text>You must enter your password</Text>}
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                label="Confirm password"
                secureTextEntry={true}
                right={<TextInput.Icon name="eye-off-outline" />}
              />
            )}
            name="passwordConf"
            rules={{
              required: true,
              validate: (value) =>
                value === password.current || "The passwords does not match",
            }}
            defaultValue=""
          />
          <View>
            {errors.passwordConf && <Text>{errors.passwordConf.message}</Text>}
          </View>
          <Button
            mode="contained"
            compact={false}
            onPress={handleSubmit(onSubmit)}
            icon="account-plus"
          >
            Register Account
          </Button>
          <View>
            <Text>Do you already have an account?</Text>
          </View>
          <Button
            mode="outlined"
            icon="account-arrow-right"
            compact
            onPress={() => navigation.goBack()}
          >
            Sign in
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
