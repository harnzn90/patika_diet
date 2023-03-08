import {View, Text, Image} from 'react-native';
import React ,{useState}from 'react';
import Input from '../../components/Input';
import styles from './LoginScreen.style';
import Btn from '../../components/Btn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth'


const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const currentUser = auth().currentUser?.email;




  const handleSignIn = async () => {
    try {
        await auth().signInWithEmailAndPassword(email,password);
        navigation.navigate("Home")
    } catch (error) {
        console.log(error)
    }
}



  return (
    <View style={{flex: 1, backgroundColor: 'darksalmon'}}>
      <View style={styles.header_container}>
        <Text>MyDiet</Text>
        <Icon name={'rocket'} color={'black'} size={200} />
      </View>
      <View style={styles.input_container}>
        <Input placeholder={'Kullanıcı Adını Giriniz...'} name={'account'} onChangeText={text=>setEmail(text)}/>
        <Input placeholder={'Şifre Giriniz...'} name={'key'} onChangeText={text=>setPassword(text)}/>
        <View style={{flexDirection: 'row'}}>
          <Btn title={'Login'} onPress={handleSignIn}/>
            <Btn
              title={'Sign Up'}
              onPress={() => navigation.navigate('SignUpPage')}
            />
        </View>
          <View style={{flex:1,alignSelf:"flex-end",justifyContent:"flex-end"}}>
            
            <Btn onPress={()=>auth().signOut()} title={"Sign Out"}/>
          </View>
        <Text></Text>
      </View>
    </View>
  );
};

export default LoginScreen;
