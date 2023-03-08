import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import styles from './SignScreen.styles';
import Btn from '../../components/Btn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const SignScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  
  const handleSignUp = async () => {
    
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log(Response)
      navigation.navigate('UserInfo');
    } catch (error) {
      
    }
  };

  const initialFormvalues = {
    usermail: '',
    password: '',
    repassword: '',
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Button title="<" onPress={()=>navigation.navigate("Home")}/>
      </View>
      <View style={styles.header_container}>
        <Text>SIGN UP</Text>
        <Icon name={'rocket'} size={200} color="black" />
      </View>
      <View style={styles.input_container}>
        <Input
          placeholder={'Eposta Adresinizi Giriniz...'}
          name={'account'}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder={'Şifre Giriniz...'}
          name={'key'}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder={'Şifre Giriniz...'}
          name={'key'}
          onChangeText={text => setRepassword(text)}
        />
        <View style={{flexDirection: 'row'}}>
          <Btn title={'Sign Up'} onPress={() => handleSignUp()} />
          <Btn title={'Info'} onPress={() => navigation.navigate("UserInfo")} />
        </View>
      </View>
    </View>
  );
};

export default SignScreen;
