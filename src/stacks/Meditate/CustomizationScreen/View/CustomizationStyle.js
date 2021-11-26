import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerExternal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBlock: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  textQuestion: {
    color: "blue",
    textAlign: "left",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },

  btnIniciarMeditacao: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 500,
    backgroundColor: "orange",
  },
  titulo: {
    fontSize: 50,
  },
  btnText: {
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
