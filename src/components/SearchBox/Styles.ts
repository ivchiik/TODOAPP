import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.searchBarWhite,
    marginTop: 20,
    borderRadius: 6,
  },

  input: {
    padding: 12,
  },

  icon: {
    marginRight: 12,
  },
});
