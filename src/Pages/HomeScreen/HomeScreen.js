import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Input from '../../components/Input';
import styles from './HomeScreen.styles';
import Btn2 from '../../components/Btn2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const HomeScreen = ({navigation, props}) => {
  const [userData, setUserData] = useState([]);
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    const currentUser = auth().currentUser.email.split('@', 1).toString();
    const newCurrent = currentUser.replace('.', '');

    database()
      .ref('users/' + newCurrent + '/' + 'userInfo/')
      .once('value')
      .then(snapshot => {
        setUserData(snapshot.val());
      });
  }, []);

  const bodyMassIndex = parseInt(
    userData.weight / ((userData.height * userData.height) / 10000),
  );

  const BMH = 10 * userData.weight + 6 * userData.height - 5 * userData.age + 5;

  const calorieNeeded = BMH * 1.55;

  return (
    <View style={{flex: 1, backgroundColor: 'darksalmon'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin: 10,
            textAlign: 'center',
          }}>
          Merhaba {userData.name}
        </Text>
        <Icon
          name="logout"
          color="black"
          size={50}
          onPress={() => {
            auth().signOut();
            navigation.navigate('Login2');
          }}
        />
      </View>
      <View style={styles.img_container}>
        <Image style={styles.image} source={{uri: userData.photo}} />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.info_text}>Age: {userData.age}</Text>
        <Text style={styles.info_text}>Height: {userData.height}</Text>
        <Text style={styles.info_text}>Weight: {userData.weight}</Text>
        <Text style={styles.info_text}>Body Mass Index: {bodyMassIndex}</Text>
        <Text style={{fontSize:30,fontStyle:"italic"}}>TOTAL CALORIE: {calorieNeeded}</Text>
      </View>
      <View style={styles.meals_container}>
        <Btn2 title="Add Meals" onPress={() => navigation.navigate('Meals')} />
        <Btn2
          title="Eaten Meals"
          onPress={() => navigation.navigate('Eaten')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Btn2
          title="Edit Profile"
          onPress={() => navigation.navigate('UserInfo')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
