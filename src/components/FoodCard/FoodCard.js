import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './FoodCard.style'
const FoodCard = ({food,goFoodDetail}) => {
    return(
        <TouchableOpacity 
        onPress={() =>goFoodDetail(food)}
        style={styles.container} >
           <View style={styles.image_container} >
           <Text
            style={styles.text}
            numberOfLines={1}
            >{food.food_name}</Text>
            <Image 
           source={{uri:food.photo.thumb}}
           style={styles.image}
           />
           </View>
           
           <View style={[styles.inner_container,{width:36}]} >
           <Text style={{fontWeight:"bold", fontSize:16}}>Qty</Text>
           <Text style={{maxWidth:100}} numberOfLines={1}
           >{food.serving_qty}</Text>
           </View>
                <View style={styles.inner_container} >
                <Text style={{fontWeight:"bold", fontSize:16}}>Calories</Text>
                <Text
                numberOfLines={1}
                style={{maxWidth:60}}
                >{food.nf_calories}</Text>
                </View>
                <View style={styles.inner_container}>
                <Text style={{fontWeight:"bold", fontSize:16}}>Brand</Text>
                <Text
                  numberOfLines={1}
                  style={{maxWidth:200}}
                >{food.brand_name}</Text>
                </View>
        </TouchableOpacity>
    )
}

export default FoodCard