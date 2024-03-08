import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 45,
    marginBottom: 10,
  },

  btnRow: {
    flexDirection: "row",
    gap: 15,
  },

  btnContainer: {
    alignItems: "center",
    gap: 5,
  },

  btnText: {
    color: colors.textColor,
    fontSize: 10,
    fontWeight: "500",
  },

  clearTasksText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: "500",
    textDecorationLine: "underline",
  },

  line: {
    backgroundColor: colors.lineColor,
    height: 0.5,
    marginTop: 20,
  },

  footerView: {
    height: 30,
  },
});
