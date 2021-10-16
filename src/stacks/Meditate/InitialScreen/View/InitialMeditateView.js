import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./InitialMeditateStyle";

const InitialMeditateView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CustomizationScreen");
        }}
        style={styles.btnQueroMeditar}
      >
        <Text style={styles.textInfo}>Create Meditation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialMeditateView;
