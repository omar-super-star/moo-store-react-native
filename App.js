import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import page1 from './pages/page1';
import page2 from './pages/page2';
import logo from './pages/logo';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();
export default function App(props) {
  let [fontsLoaded] = useFonts({
    'comicRelief': require('./assets/fonts/ComicRelief.ttf'),
  });
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="logo" 
           screenOptions={{
            headerStyle: {
              backgroundColor: '#58DFEB',
              elevation: 0
            }, 
            headerTitleStyle: { 
              alignSelf: 'center',
              fontFamily:"comicRelief"
            },

           }}
        
        >
          <Stack.Screen name="logo" component={logo} options={{ headerShown: false}}/>
          <Stack.Screen name="page1" component={page1} 

          options={{ 
            title: "T-shirt",
        }}/>

        
          <Stack.Screen name="page2" component={page2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }





