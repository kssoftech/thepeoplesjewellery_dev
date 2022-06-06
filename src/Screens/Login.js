import { StyleSheet, Text, View , SafeAreaView , TouchableOpacity ,Alert } from 'react-native'
import React , {useState} from 'react'
import Title from '../Components/Title'
import CustomInput from '../Components/CustomInput'
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
const globalStyle = require('../Constants/Style/Style.js')


export default function Login({navigation}) {
  const [text, setText] = useState(null);
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.title} label="Sign In" />
      </View>
      <View style={styles.container}>
        <CustomInput
          style={globalStyle.customInput}
          value={text}
          onChangeText={setText}
          placeholder={'Enter Email Id or Mobile Number'}
        />
        <CustomInput
          style={globalStyle.customInput}
          value={text}
          onChangeText={setText}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Login with OTP</Text>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#B2D7F9', '#663297']}
            style={styles.linearGradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Text style={styles.signIn}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomCenter}>
        <View style={styles.bottomContent1}>
          <Text style={styles.accountText}>Don't have an account ?</Text>
        </View>
        <View style={styles.bottomContent2}>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: '30%',
  },
  container: {
    marginTop: '5%',
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 15,
    right: 10,
    fontSize: 16,
    color: '#333333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: '#333333',
  },
  signIn:{
    color:'white',
    fontSize: 18
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    marginTop: 20,
    height: 50,
  },
  bottomCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    fontSize: 20,
  },
  bottomContent1: {
    marginLeft: '5%',
    alignItems: 'flex-end',
    width: '60%',
  },
  bottomContent2: {
    width: '40%',
  },
  accountText: {
    fontSize: 20,
  },
  signUpText: {
    color: '#663297',
    fontSize: 20,
  },
});