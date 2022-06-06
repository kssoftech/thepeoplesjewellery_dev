/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useEffect}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/Screens/Signup';
import Login from './src/Screens/Login';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <LinearGradient colors={['#C489FF', '#B2D7F9']}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          component={Main}
          options={{headerShown: false}}
          name="main"
        />
        <Stack.Screen
          component={Login}
          options={{headerShown: false}}
          name="Login"
        />
        <Stack.Screen
          component={Signup}
          options={{headerShown: false}}
          name="Signup"
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </LinearGradient>
  );
};

const MainComponent =() =>{
  return(
    <View>

    </View>
  )
}

const styles = StyleSheet.create({
  stretch: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  bgColor: {
    backgroundColor : '#C489FF'
  },
});

export default App;
