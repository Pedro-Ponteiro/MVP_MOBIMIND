import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPause: {
    aspectRatio: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 500,
    backgroundColor: "orange",
  },

  btnCancel: {
    color: "blue",
  },
});
