import React from "react";
import { View, Image } from "react-native";
import logo from "../assets/logo.png";

const LogoComponent = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <Image source={logo} style={{ width: 250, height: 50 }} />
    </View>
  );
};

export default LogoComponent;
