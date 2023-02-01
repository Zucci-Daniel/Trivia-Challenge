import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { routes } from '../constants/routes';
import { QuestionScreen, SummaryScreen, WelcomeScreen } from '../screens';
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
        initialRouteName={routes.welcomeScreen}>

        <Stack.Screen name={routes.welcomeScreen} component={WelcomeScreen} options={animation} />
        <Stack.Screen name={routes.questionScreen} component={QuestionScreen} options={animation} />
        <Stack.Screen name={routes.summaryScreen} component={SummaryScreen} options={animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator
