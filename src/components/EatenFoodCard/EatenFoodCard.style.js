import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
       paddingLeft:10,
       paddingBottom:10,
        marginHorizontal:10,
        borderRadius:8,
        borderBottomWidth:1,
        backgroundColor:'cornsilk',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        margin:5,
        elevation:10
        
    },
    image:{
        height:50,
        width:100,
        backgroundColor:'white',
        alignSelf:'flex-start'
    },
    text:{
    color:'black',
    fontSize:12,
    alignSelf:'center',
    marginBottom:5,
    fontWeight:'bold'
    
    },
   inner_container:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       width:80,
       padding:5
       
   },
   image_container:{
       justifyContent:'space-between',
       alignItems:'center',
       width:100,
       
   }
})