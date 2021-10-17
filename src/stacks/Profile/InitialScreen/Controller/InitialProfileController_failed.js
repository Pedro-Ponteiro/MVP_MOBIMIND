import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import InitialProfileModel from "../Model/InitialProfileModel";

const TextInfo = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const InitialProfileController = ({ navigation }) => {
  const [textArray, setTextArray] = useState(
    new InitialProfileModel().textArray
  );

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
