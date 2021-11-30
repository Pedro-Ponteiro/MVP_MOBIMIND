import * as React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./CustomizationStyle";
import APIController from "../../../../components/APIController";

const CustomizationView = ({ navigation }) => {
  const [tipoMeditacao, setTipoMeditacao] = React.useState("Still");
  const [minutos, setMinutos] = React.useState(10);

  const [atividades, setAtividades] = React.useState(
    new APIController().get_activities()
  );

  React.useEffect(() => {
    let get_activities = async () => {
      let atividades = await new APIController().get_activities();
      setAtividades(atividades);
    };

    get_activities();
  }, []);

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
              value={atividades[0]}
              status={tipoMeditacao === atividades[0] ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao(atividades[0])}
            />
            <Text>{atividades[0]}</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value={atividades[1]}
              status={tipoMeditacao === atividades[1] ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao(atividades[1])}
            />
            <Text>{atividades[1]}</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton
              value={atividades[2]}
              status={tipoMeditacao === atividades[2] ? "checked" : "unchecked"}
              onPress={() => setTipoMeditacao(atividades[2])}
            />
            <Text>{atividades[2]}</Text>
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
              activity: tipoMeditacao,
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
