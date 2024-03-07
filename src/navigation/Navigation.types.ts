export enum ScreenRoutes {
  TASKS = 'TASKS',
  HISTORY = 'HISTORY',
}

export const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  contentStyle: {backgroundColor: '#E8F1FD'},
};

export interface RootStackParamList {
  TASKS: undefined;
  HISTORY: undefined;
}
