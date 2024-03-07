import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {History, Tasks} from '../screens';
import {
  RootStackParamList,
  ScreenRoutes,
  screenOptions,
} from './Navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();
export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={ScreenRoutes.TASKS}
          component={Tasks}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          name={ScreenRoutes.HISTORY}
          component={History}
          options={{animation: 'fade'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
