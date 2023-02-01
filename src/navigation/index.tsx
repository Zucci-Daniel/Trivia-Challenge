import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '../constants/routes';
import { QuestionScreen, SummaryScreen, WelcomeScreen } from '../screens';
import navigationService from '../utilities/navigationService';

const Stack = createStackNavigator();

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

        <Stack.Screen name={routes.welcomeScreen} component={WelcomeScreen} />
        <Stack.Screen name={routes.questionScreen} component={QuestionScreen} />
        <Stack.Screen name={routes.summaryScreen} component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator
