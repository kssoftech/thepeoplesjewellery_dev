import { StyleSheet, Text, View , Image , SafeAreaView} from 'react-native'
import React ,{useEffect}from 'react'
import Signup from '../src/Screens/Signup.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import LinearGradient from 'react-native-linear-gradient';

export default function Main({navigation}) {

  // useEffect(()=>{
  //   setTimeout(() => {
  //     navigation.navigate('Login')
  //   }, 4000);
  // },[])

  return (
    <LinearGradient colors={['#C489FF', '#B2D7F9']}>
      <View style={{width: '100%', height: '100%'}}>
        <View>
          <Image
            style={{width: 300, height: 300}}
            source={require('../src/Constants/Images/gif3.gif')}
          />
        </View>
        <View>
          <Image
            style={styles.tpj}
            source={require('../src/Constants/Images/tpjlogo.png')}
          />
        </View>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  stretch: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%%',
    height: '100%',
    
  },
  tpj:{
    width: '100%',
    height: 50
  },
  bgColor:{
    backgroundColor: '#C489FF'
  }
});