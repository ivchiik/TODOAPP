export enum ScreenRoutes {
  TASKS = "TASKS",
  HISTORY = "HISTORY",
}

export const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: "#E8F1FD" },
};

export interface RootStackParamList {
  TASKS: undefined;
  HISTORY: undefined;
}
