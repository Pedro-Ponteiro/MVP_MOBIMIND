import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerExternal: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textQuestion: {
    fontSize: 22,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textQuestionPor: {
    flex: 1,
  },

  containerBlock: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  btnIniciarMeditacao: {
    aspectRatio: 1,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 500,
    backgroundColor: "orange",
  },
  titulo: {
    fontSize: 24,
  },
  btnText: {
    textAlign: "center",
  },
});
