import React from "react";
import { View, Text } from "react-native";

const InitialProfileController = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 24,
        marginLeft: 8,
      }}
    >
      <Text>Obrigado por utilizar o App!</Text>
    </View>
  );
};

export default InitialProfileController;
