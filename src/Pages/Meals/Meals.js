import {View, Text, TextInput, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './Meals.style';
import Input from '../../components/Input/Input';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import FoodCard from '../../components/FoodCard/FoodCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Meals = ({navigation,props}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const API_URL = ' https://trackapi.nutritionix.com/v2/search/instant';


  const signOut=()=>{
    
    navigation.navigate("Home");
}


  const fetch = async () => {
    try {
      await axios
        .get(`${API_URL}?query=${search}&common=true&detailed=true`, {
          headers: {
            'x-app-id': 'b5846f08',
            'x-app-key': '3ee19ab341a7fae7b2af8c23554673eb',
            'x-remote-user-id': '0',
          },
        })
        .then(response => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
          return response.data;
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else if (error.message) {
        console.log(error.message);
      }
    }
  };

  const goMealDetail = item => {
    navigation.navigate('MealDetail', {item});
  };
  const renderItem = ({item}) => (
    <FoodCard food={item} goFoodDetail={() => goMealDetail(item)} />
  );



  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.textinput}
          placeholder="Search food..."
          onChangeText={text => setSearch(text)}
        />
        <Icon
          name="magnify"
          color={'gray'}
          size={30}
          onPress={fetch}
        />
      </View>
      <View style={{flex:8}}>
        <FlatList data={data.branded} renderItem={renderItem} />
      </View>
      <View style={{justifyContent:"center", flex:1}}>
        <Button onPress={()=>signOut()} title='Back'/>
        
      </View>
    </View>
  );
};

export default Meals;
