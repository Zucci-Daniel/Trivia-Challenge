import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { routes } from '../constants/routes';
import { GamePlayScreen, ResultScreen, StartQuizScreen } from '../screens';
import navigationService from '../utilities/navigationService';

const Stack = createStackNavigator();

const animation = { cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigationRef: any) => {
        navigationService.setTopLevelNavigator(navigationRef);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routes.StartQuizScreen}>

        <Stack.Screen name={routes.StartQuizScreen} component={StartQuizScreen} options={animation} />
        <Stack.Screen name={routes.GamePlayScreen} component={GamePlayScreen} options={animation} />
        <Stack.Screen name={routes.ResultScreen} component={ResultScreen} options={animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator
