import * as React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./CustomizationStyle";

const CustomizationView = ({ navigation }) => {
  const [tipoMeditacao, setTipoMeditacao] = React.useState("Still");
  const [minutos, setMinutos] = React.useState(10);

  return (
    <SafeAreaView style={[styles.containerExternal]}>
      <View style={[styles.containerBlock, { flex: 1 }]}></View>

      <View
        style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start" }}
      >
        <View style={[styles.containerBlock, { flex: 1 }]}>
          <Text style={styles.textQuestion}>I will be...</Text>

          <View style={styles.radioContainer}>
            <RadioButton
              value="Still"
              status={tipoMeditacao === "Still" ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao("Still")}
            />
            <Text>Still</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value="Walking"
              status={tipoMeditacao === "Walking" ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao("Walking")}
            />
            <Text>Walking</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value="Running"
              status={tipoMeditacao === "Running" ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao("Running")}
            />
            <Text>Running</Text>
          </View>
        </View>
        <View style={[styles.containerBlock]}>
          <Text style={[styles.textQuestion]}>For...</Text>
          <View style={styles.radioContainer}>
            <RadioButton
              value="5"
              status={minutos === "5" ? "checked" : "unchecked"}
              onPress={() => setMinutos("5")}
            />
            <Text>5 minutes</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value="10"
              status={minutos === "10" ? "checked" : "unchecked"}
              onPress={() => setMinutos("10")}
            />
            <Text>10 minutes</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value="15"
              status={minutos === "15" ? "checked" : "unchecked"}
              onPress={() => setMinutos("15")}
            />
            <Text>15 minutes</Text>
          </View>
        </View>
      </View>
      <View style={[styles.containerBlock, { flex: 2 }]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PlayerScreen", {
              check: tipoMeditacao,
              time: minutos,
            });
          }}
          style={styles.btnIniciarMeditacao}
        >
          <Text style={styles.btnText}>Start Meditation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomizationView;
