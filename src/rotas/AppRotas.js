import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions= {{ headerShown:false }}>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}