import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./CustomizationStyle";
import RNPickerSelect from "react-native-picker-select";

const CustomizationView = ({ navigation }) => {
  const [checked, setChecked] = React.useState("Still");
  const [minutos, setMinutos] = React.useState(10);

  return (
    <View style={styles.containerExternal}>
      <View style={styles.containerBlock}>
        <View>
          <Text style={styles.textQuestion}>I will be...</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
            value="Still"
            status={checked === "Still" ? "checked" : "unchecked"}
            onPress={() => setChecked("Still")}
          />
          <Text>Still</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
            value="Walking"
            status={checked === "Walking" ? "checked" : "unchecked"}
            onPress={() => setChecked("Walking")}
          />
          <Text>Walking</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
            value="Running"
            status={checked === "Running" ? "checked" : "unchecked"}
            onPress={() => setChecked("Running")}
          />
          <Text>Running</Text>
        </View>
      </View>
      <View style={styles.containerBlock}>
        <Text style={styles.textQuestion}>For...</Text>
        <RNPickerSelect
          style={styles.dropdown}
          onValueChange={(value) => setMinutos(value)}
          items={[
            { label: "5 minutes", value: 5 },
            { label: "10 minutes", value: 10 },
            { label: "15 minutes", value: 15 },
          ]}
        />
        <Text>{minutos} minutes</Text>
      </View>
      <View style={styles.containerBlock}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PlayerScreen", {
              check: checked,
              time: minutos,
            });
          }}
          style={styles.btnIniciarMeditacao}
        >
          <Text style={styles.btnText}>Start Meditation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomizationView;
