import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InitialProfileController = ({ navigation }) => {
  // pega todas as variaveis armazenadas e disponibiliza para o usuario
  const [keyValuePairArray, setKeyValuePairArray] = useState([]);
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    const getKeys = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        console.log("Chaves", keys);
        const keyVal = await AsyncStorage.multiGet(keys);
        console.log("Keyval", keyVal);
        setKeyValuePairArray(keyVal);
      } catch (error) {
        console.log(error);
      }
    };

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
        <Text key={key}>{key}</Text>
      ))}
    </View>
  );
};

export default InitialProfileController;
