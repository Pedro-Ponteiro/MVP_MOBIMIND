import AsyncStorage from "@react-native-async-storage/async-storage";

export default class InitialProfileModel {
  constructor() {
    this.doStuff();
  }

  doStuff = async () => {
    all_keys = await this.getAllKeys();
    texts = await this.transformText(all_keys);
    console.log("KEYS", all_keys);
    console.log("TEXTS", texts);
  };

  getTextByKey = async (key) => {
    const value = await this.getMyStringValue(key);

    console.log("VALUE", value);
    const arrKey = key.split("_");
    const textName = arrKey[0].replace("@", "");

    return arrKey[1] == "times"
      ? `You have meditated ${textName} ${value} times`
      : `You have meditated ${textName} for ${value} minutes`;
  };

  transformText = async (keys) => {
    let texts = [];
    await keys.forEach(async (key) => {
      const text = await this.getTextByKey(key);
      texts.push(text);
    });

    return texts;
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
  };

  getMyStringValue = async (key) => {
    let isso;
    try {
      isso = await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
    if (isso == null) {
      return "QUE MERDA";
    } else {
      return isso;
    }
  };
}
