import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.taskBackColor,
    width: "100%",
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },

  headText: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: "500",
  },

  headWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  row: {
    flexDirection: "row",
    gap: 7,
  },

  textWrapper: {
    backgroundColor: colors.backgroundBlue,
    padding: 12,
    marginTop: 12,
  },

  text: {
    color: colors.taskTextColor,
    fontSize: 10,
    fontWeight: "600",
  },

  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  markText: {
    color: colors.taskTextColor,
    fontSize: 10,
    fontWeight: "500",
  },
});
