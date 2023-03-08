import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './EatenFoodCard.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const EatenFoodCard = ({food,goFoodDetail,removeSpecificFood}) => {
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
           <Text>Qty</Text>
           <Text style={{maxWidth:100}} numberOfLines={1}
           >{food.serving_qty}</Text>
           </View>
                <View style={styles.inner_container} >
                <Text>Calories</Text>
                <Text
                numberOfLines={1}
                style={{maxWidth:60}}
                >{food.nf_calories}</Text>
                </View>
                <Icon name="delete" color={'red'} size={30} style={{alignSelf:'center'}} 
                onPress={() =>removeSpecificFood(food?.nix_brand_id)} />
        </TouchableOpacity>
    )
}

export default EatenFoodCard