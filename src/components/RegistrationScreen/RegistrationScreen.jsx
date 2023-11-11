import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import LogoImage from "../../Screens/AddPhoto.png";
import AddImage from "../../Screens/add.png";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onRegistration = () => {
    console.debug(`${login} + ${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.registrationForm}>
        <Image style={styles.logoImage} source={LogoImage} />
        <Image style={styles.AddImage} source={AddImage} />
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput
          value={login}
          onChangeText={setLogin}
          style={styles.textInput}
          placeholder="Логін"
        ></TextInput>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
          placeholder="Адреса електронної пошти"
          autoComplete="email"
        ></TextInput>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          secureTextEntry
          placeholder="Пароль"
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={onRegistration}>
          <Text style={styles.textButton}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Text style={styles.textSing}> Вже є акаунт? Увійти </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    height: "67%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
    paddingHorizontal: 16,
  },
  logoImage: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  AddImage: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: 47.5 }, { translateY: 21 }],
  },
  text: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginTop: 92,
    marginBottom: 33,
  },
  textPassword: {
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    padding: 15,
    height: 50,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 27,
    marginBottom: 16,
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  textSing: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
