import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';


import GrilaScreen from '../screens/Grila';
import SelectieGrileScreen from '../screens/SelectieGrile';
import GrilaRaresScreen from '../screens/GrilaRares';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BanculZilei from '../screens/BanculZilei';


const Stack = createStackNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Rezi 950', headerTitleAlign: 'center' }}
        />
        <Stack.Screen name="Selecteaza Grile" component={SelectieGrileScreen} />
        <Stack.Screen name="Rezolva Grile" component={GrilaRaresScreen} />
        <Stack.Screen name="Bancul zilei" component={BanculZilei} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
