import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  view: {
    width: "80%",
  },
  errorMsg: {
    marginLeft: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    },
    btnLogin: {
        margin: 10,
        height: 50,
        justifyContent: 'center'
  },
  switchScreenText: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  switchBtn: {
    margin: 10,
  },
});
