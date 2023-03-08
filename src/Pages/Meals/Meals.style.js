import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'darksalmon'
        },
        search_icon: {
          marginRight: 10
        },
        inputcontainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingLeft: 10,
          elevation: 10,
          borderRadius: 8,
          margin: 10,
          backgroundColor: 'white',
        },
        lottie_container:{
          flex:1,
          
        },
        lottie_container_text:{
          alignSelf:'center',
          marginTop:80,
          fontSize:16,
          fontWeight:'bold',
          color:'#fc008b'
        },
        textinput:{
            
            width:Dimensions.get("window").width-80
        }
        
})