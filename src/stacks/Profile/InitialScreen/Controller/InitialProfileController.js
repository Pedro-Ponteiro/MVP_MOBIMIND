import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TextInfo = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const InitialProfileController = ({ navigation }) => {
  // pega todas as variaveis armazenadas e disponibiliza para o usuario

  const [keysArray, setKeysArray] = useState(async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log("keys from localStorage", keys);
    if (keys) return keys;
    else return [];
  });

  const getTextByKey = async (k) => {
    // console.log("estamos pegando o texto");
    const value = await AsyncStorage.getItem(k);
    const arrKey = k.split("_");
    const textName = arrKey[0].replace("@", "");
    // console.log("k", k);
    // console.log("Value", value);
    // console.log("textName", textName);

    return arrKey[1] === "times"
      ? `You have meditated ${textName} ${value} times`
      : `You have meditated ${textName} for ${value} minutes`;
  };

  const transformText = () => {
    const texts = keysArray.map(async (key) => {
      return await getTextByKey(key);
    });

    // console.log(temp);
    // setTextArray(texts);
    return texts;
  };

  const [textArray, setTextArray] = useState(() => {
    if (!!keysArray) return transformText();
    else return [];
  });

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
      <FlatList
        data={textArray}
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
        // renderItem={({ item }) => <Text>{item.key}</Text>}
        // renderItem={({ item }) => <TextInfo item={item} />}
        // item = {key:value}
        keyExtractor={(item) => item.key}
      />

      {/* {console.log(keysArray)} */}
    </View>
  );
};

export default InitialProfileController;
