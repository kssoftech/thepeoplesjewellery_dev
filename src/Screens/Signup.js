import { StyleSheet,Button, Text, View , Alert, SafeAreaView , ScrollView  , Fla} from 'react-native'
import React ,{ useState}from 'react'
import CustomInput from '../Components/CustomInput'
import Title from '../Components/Title';
import TitleContent from '../Components/TitleContent';
import CustomSelect from '../Components/CustomSelect';


export default function Signup() {
  const [text, setText] = useState(null);
  const companyTypes = [{id: 1, type: 'A', id: 2, type: 'B' , id: 3, type: 'C'}];
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Title style={styles.title} label="Sign Up" />
      <TitleContent
        style={styles.titleContent}
        content={`If you have not registered yet,\n sign up now...`}
      />
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
      <View >
       
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'First Name'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Last Name'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Mobile No.'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Whats App Mobile No.'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Email Id'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Company Name'}
          />
          {/* <CustomSelect
          style={styles.inputSelect}
        /> */}
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            keyboardType="phone-pad"
            placeholder={'Pincode'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'State'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'City'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'New Password'}
          />
          <CustomInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder={'Confirm Password'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 10,
    fontSize: 25,
  },
  titleContent:{
    textAlign:'center',
    marginBottom: 10,
    fontSize:20
  },
  input: {
    height: 45,
    margin: 10,
    borderWidth: 1,
    borderTopColor: '#fff',
    borderColor:"white",
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    padding: 10,
    fontSize: 20,
    elevation:3
  },
  inputSelect: {
    height: 45,
    margin:10
  }
})