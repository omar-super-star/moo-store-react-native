import React from 'react';
import { Text, View,Button,Image, Dimensions} from 'react-native';
import { StackActions } from '@react-navigation/native';
import url from "../constant"
const width=Math.round(Dimensions.get('window').width);
const height=Math.round(Dimensions.get('window').height);
function page2({navigation}) {
   const connect=()=>{
    fetch(url)
    .then(res=> res.json())
    .then(res=>{
          console.log("res",res)
         navigation
          .dispatch(StackActions.replace("page1",{data:res}))
               })
    .catch((e)=>{
      console.log(e)
     alert("error in connection")
    }) 
   }
    return (
      <View style={{
        height:height,
        width:width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View>
        <Image
        style={{
          height:250,
          width:350
        }}
        source={require("../images/unavailable-icon-0.jpg")}
        >

        </Image>
        </View>
        <View>
      <Text 
      style={{
           fontSize:28,
          }}> error in connection</Text>
      <Button title="retry" onPress={()=>connect()} />
      </View>
      </View>
    );
  }
  


export default page2