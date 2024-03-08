import { Dimensions, Platform } from "react-native";

export const colors = {
  backgroundBlue: "#E8F1FD",
  nameColor: "#545871",
  searchBarWhite: "#FFFEFC",
  textColor: "#30507D",
  lineColor: "#6A6CE0",
  taskBackColor: "#F6FAFF",
  taskTextColor: "#6C86A8",
};

export const IS_IOS = Platform.OS === "ios";
export const WIDTH = Dimensions.get("screen").width;
