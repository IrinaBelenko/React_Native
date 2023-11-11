import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";

import backgroundImage from "./src/Screens/PhotoBG.jpg";
import RegistrationScreen from "./src/components/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";

export default function App() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <StatusBar style="auto" />
      <LoginScreen></LoginScreen>
      {/* <RegistrationScreen /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
