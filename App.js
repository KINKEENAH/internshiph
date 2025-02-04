import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstNavigation from './screens/FirstNavigation';
import SecondNavigation from './screens/SecondNavigation'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FirstNavigation} 
        options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={SecondNavigation}
        options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
     
    

