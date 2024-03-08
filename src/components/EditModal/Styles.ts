import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  insideContainer: {
    backgroundColor: colors.taskBackColor,
    position: "absolute",
    top: "40%",
    width: 340,
    height: 250,
    padding: 12,
    alignSelf: "center",
    borderRadius: 12,
  },

  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: "700",
    alignSelf: "center",
  },

  nameInputContainer: {
    backgroundColor: colors.searchBarWhite,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lineColor,
  },

  taskNameInput: {
    padding: 8,
  },

  detailTextWrapper: {
    backgroundColor: colors.backgroundBlue,
    flexWrap: "wrap",
    height: 100,
    marginVertical: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },

  taskDetailInput: {
    paddingBottom: 40,
    maxWidth: 280,
  },

  btn: {
    flex: 1,
    width: "100%",
  },
});
