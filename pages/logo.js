import React from 'react';
import { View, Image } from 'react-native';
import styles from "../styles/styles.js";
import { StackActions } from '@react-navigation/native';
import url from "../constant"
class Logo extends React.Component {
  constructor (props){
    super(props);

  }
  componentDidMount(){
      fetch(url)
      .then(res=> res.json())
      .then(res=>{
            console.log("resfirst",res)
            setTimeout( ()=>{this.props.navigation
            .dispatch(StackActions.replace("page1",{data:res}))},1000)
                 })
      .catch((e)=>{
        this.props.navigation
        .dispatch(StackActions.replace("page2"))
      }) 
  }
  render(){
    return (
      <View style={styles.startlogo}>
        <Image style ={styles.logoimage} source={require('../images/logo3.jpeg')} />
      </View>
    );
  }
}

export default Logo;