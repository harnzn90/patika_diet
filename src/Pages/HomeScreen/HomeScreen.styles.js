import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  info_container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor:"cornsilk",
    borderStyle:"dotted"
  },
  meals_container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"cornsilk",
    flexDirection:"row",
  },
  img_container: {
    flex: 1,
    borderColor:"cornsilk",
    alignItems:"center",
    justifyContent:"center",
  },
  info_text:{
    fontSize:30,
    fontWeight:"bold",
  },
  image :{
    width:150,
    height:150,
    borderRadius:190,
},
});
