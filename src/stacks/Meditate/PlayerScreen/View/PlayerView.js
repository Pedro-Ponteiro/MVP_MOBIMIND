import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./PlayerStyle";

const PlayerView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>
        {props.tempo_meditacao} minutes {props.tipo_meditacao}
      </Text>
      <TouchableOpacity
        style={styles.btnPause}
        onPress={() => {
          if (!(props.action_text == "Loading")) {
            props.pause_func();
          }
        }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>{props.action_text}</Text>
        </View>
      </TouchableOpacity>
      <Text>{props.count}</Text>
      <TouchableOpacity
        style={styles.btnCancel}
        onPress={() => props.cancel_meditation()}
      >
        <View>
          <Text style={styles.btnCancel}>cancel meditation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerView;
