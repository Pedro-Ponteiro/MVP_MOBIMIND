import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InitialProfileController = ({ navigation }) => {
  // pega todas as variaveis armazenadas e disponibiliza para o usuario
  const [keyValuePairArray, setKeyValuePairArray] = useState([]);
  const [textArray, setTextArray] = useState([]);

  const getKeyVal = async () => {
    const keys = await AsyncStorage.getAllKeys();
    // console.log("Chaves", keys);
    const keyVal = await AsyncStorage.multiGet(keys);

    return keyVal;
  };
  const getKeys = async () => {
    try {
      const keyVal = await getKeyVal();
      // console.log("Keyval", keyVal);
      console.log("get keys rodou");
      setKeyValuePairArray(keyVal);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getKeys();
  }, []);

  useEffect(() => {
    const getTextArray = async () => {
      try {
        const text = keyValuePairArray.map((array) => {
          const key = array[0];
          const value = array[1];

          const arrKey = key.split("_");
          const textName = arrKey[0].replace("@", "");
          return arrKey[1] === "times"
            ? `You have meditated ${textName} ${value} times`
            : `You have meditated ${textName} for ${value} minutes`;
        });
        setTextArray(text);
      } catch (error) {
        console.log(error);
      }
    };
    getTextArray();
  }, [keyValuePairArray]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 24,
        marginLeft: 8,
      }}
    >
      {textArray.map((key) => (
        <Text style={{ flex: 1 }} key={key}>
          {key}
        </Text>
      ))}

      <TouchableOpacity
        onPress={() => getKeys()}
        style={{
          height: "50%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "blue" }}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialProfileController;
