import {StyleSheet, Text, View,Alert} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Pages/HomeScreen';
import SignScreen from './src/Pages/SignScreen';
import UserInfoScreen from './src/Pages/UserInfoScreen';
import MealsScreen from './src/Pages/Meals';
import MealDetail from "./src/Pages/MealDetail"
import LoginScreen from "./src/Pages/LoginScreen"
import auth from '@react-native-firebase/auth';
import EatenScreen from "./src/Pages/Eaten"

const App = () => {
  const Stack = createNativeStackNavigator();
  
  const currentUser = auth().currentUser

  const [userSession, setUserSession] = React.useState();
  React.useEffect(() => {
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  }, [])


  if (currentUser == null) {
    console.log("Kullanıcı Yok");
  }
  else{
    console.log("Kullanıcı Var "+currentUser)
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ?
        
        <Stack.Screen name="Login" component={LoginScreen}/>
        
        : 
        
        <Stack.Screen name="Home" component={HomeScreen} />
      }

      <Stack.Screen name="Login2" component={LoginScreen}/>
      <Stack.Screen name="Home2" component={HomeScreen} />
      <Stack.Screen name="Meals" component={MealsScreen}/>

      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      <Stack.Screen name="SignUpPage" component={SignScreen} />
        <Stack.Screen name="MealDetail" component={MealDetail} />
        <Stack.Screen name="Eaten" component={EatenScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'firebrick',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
