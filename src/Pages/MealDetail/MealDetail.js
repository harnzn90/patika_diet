import React from "react";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity,Button } from 'react-native'
import styles from './MealDetail.style'
import axios from 'axios'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
const FoodDetail = ({ route ,navigation}) => {
    const { item } = route.params;

    const currentUser = auth().currentUser.email.split('@', 1).toString()
    const newCurrent = currentUser.replace('.', '')
    const sendFoodNut = () => {
        try {
            database().ref('users/'+newCurrent+'/eats/'+item.nix_brand_id).set(item)
        } catch (error) {
          console.log(error)  
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container} >
            <View style={styles.image_container} >
                <Image
                    style={styles.image}
                    source={{ uri: item.photo.thumb }}
                    resizeMode='contain'
                />
            </View>

            <Text style={styles.food_name} >{item.food_name}</Text>
            <ScrollView>
                <View style={styles.nut_container} >
                    <Text>protein : </Text>
                    <Text>{item.full_nutrients[0].value} gr</Text>
                </View>
                <View style={styles.nut_container} >
                    <Text>fat : </Text>
                    <Text>{item.full_nutrients[1].value} gr</Text>
                </View>
                {item.full_nutrients[2] && (
                    <View style={styles.nut_container} >
                        <Text>Carbohydrate : </Text>
                        <Text>{item.full_nutrients[2].value} gr</Text>
                    </View>)}
                {item.full_nutrients[3] && (
                    <View style={styles.nut_container} >
                        <Text>Energy : </Text>
                        <Text>{item.full_nutrients[3].value} kcal</Text>
                    </View>)}
                {item.full_nutrients[4] && (
                    <View style={styles.nut_container} >
                        <Text>Sugar : </Text>
                        <Text>{item.full_nutrients[4].value} gr</Text>
                    </View>)}
                {item.full_nutrients[5] && (
                    <View style={styles.nut_container} >
                        <Text>Sugar Added : </Text>
                        <Text>{item.full_nutrients[5].value} gr</Text>
                    </View>)}
                {item.full_nutrients[6] && (
                    <View style={styles.nut_container} >
                        <Text>Fiber : </Text>
                        <Text>{item.full_nutrients[6].value} gr</Text>
                    </View>)}
                {item.full_nutrients[7] && (
                    <View style={styles.nut_container} >
                        <Text>Calcium : </Text>
                        <Text>{item.full_nutrients[7].value} mg</Text>
                    </View>)}
                {item.full_nutrients[8] && (
                    <View style={styles.nut_container} >
                        <Text>Iron : </Text>
                        <Text>{item.full_nutrients[8].value} mg</Text>
                    </View>)}
                {item.full_nutrients[9] && (
                    <View style={styles.nut_container} >
                        <Text>Potassium : </Text>
                        <Text>{item.full_nutrients[9].value} mg</Text>
                    </View>)}
                {item.full_nutrients[10] && (
                    <View style={styles.nut_container} >
                        <Text>Sodium : </Text>
                        <Text>{item.full_nutrients[10].value} mg</Text>
                    </View>)}
                {item.full_nutrients[11] && (
                    <View style={styles.nut_container} >
                        <Text>Vitamin D : </Text>
                        <Text>{item.full_nutrients[11].value} IU</Text>
                    </View>)}
                {item.full_nutrients[12] && (
                    <View style={styles.nut_container} >
                        <Text>Vitamin D (D2 , D3)  : </Text>
                        <Text>{item.full_nutrients[12].value} Âµg</Text>
                    </View>)}
                {item.full_nutrients[13] && (
                    <View style={styles.nut_container} >
                        <Text>Cholesterol : </Text>
                        <Text>{item.full_nutrients[13].value} mg</Text>
                    </View>)}
                {item.full_nutrients[14] && (
                    <View style={styles.nut_container} >
                        <Text>Fatty acids : </Text>
                        <Text>{item.full_nutrients[14].value} mg</Text>
                    </View>)}
                {item.full_nutrients[15] && (<View style={styles.nut_container}>
                    <Text>Fatty acids , total satuared :  </Text>
                    <Text>{item.full_nutrients[15].value} g</Text>
                </View>)}
                {item.full_nutrients[16] && (<View style={styles.nut_container} >
                    <Text>Fatty acids, total monounsaturated : </Text>
                    <Text>{item.full_nutrients[16].value} g</Text>
                </View>)}
                {item.full_nutrients[17] && (
                    <View style={styles.nut_container} >
                        <Text>Fatty acids, total polyunsaturated : </Text>
                        <Text>{item.full_nutrients[17].value} g</Text>
                    </View>)}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={sendFoodNut} >
                <Text style={styles.button_text}>I eat It </Text>
            </TouchableOpacity>
            <Button title="Back" onPress={()=>navigation.goBack()} />
        </View>
    )
}
export default FoodDetail