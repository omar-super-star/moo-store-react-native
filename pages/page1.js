import React from 'react';
import {  Text, View, SectionList,Dimensions,
  ToastAndroid,
  Button,Linking,
  ImageBackground,Image,TouchableHighlight} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from "../styles/styles.js";
import url from "../constant"
import { LinearGradient } from 'expo-linear-gradient';
const width=Math.round(Dimensions.get('window').width);
const height=Math.round(Dimensions.get('window').height);
class  page1 extends React.Component {
  
  constructor(props){
    super(props);
    var newdata=this.props.route.params.data.reduce((acc,obj,arr)=>{
      let type=obj.type;
      if (acc==1){
        let sections={}
        var finalsections={}
        sections[type]=[obj]
        return sections
      }else{
        
        if (acc[type] === undefined){
         acc[type]=[obj]
         return acc
        }else{
          acc[type].push(obj)
          return acc
        }
      }
    },1)
     console.log("newdata",newdata)
    this.state={
      newdata:newdata,
      data:"all",
      apidata:Object.keys(newdata).map(arr=>{
      return {'type':arr,'data':newdata[arr]}
    })
    }
    
    
  }
  openweb=(url)=>{
    console.log(url)
    Linking.openURL(url)
  }
  changedata=(value)=>{
    console.log([...Object.keys(this.state.newdata)].map(arr=>{
      return {'type':arr,'data':this.state.newdata[arr]}
    }))
    this.setState({data:value,
                    apidata:[...Object.keys(this.state.newdata)].map(arr=>{
                      return {'type':arr,'data':this.state.newdata[arr]}
                    }).filter((data)=>{
                      console.log("filter",this.state.data)
                      if (value === "all"){
                        return true
                      }else{
                        console.log("type",data.type)
                        return data.type===value
                      }
                    })})
    console.log("state",this.state.apidata)
    console.log("value",value),
    console.log("changestate",this.state.data)
    console.log("changestate",this.state.data)
  }
  componentDidUpdate(prevState) {
    if (this.state.data !== prevState.data) {
      console.log("updated",this.state)
      this.navgation();
    }
  }
  navgation=()=>{
    let data=this.state.newdata
    this.props.navigation.setOptions({
      headerRight: () => (
        <Picker
        mode="dropdown"
        style={{height: 50, width: 100}}
        selectedValue={this.state.data}
        onValueChange={(itemValue, itemIndex) =>  this.changedata(itemValue)} >
         
          {Object.keys(data).map(arr=>
            <Picker.Item label={arr} value={arr} key={{arr}}/> 
            )}
            <Picker.Item label="all" value="all" key="all"/> 
         </Picker>
      ),
      headerLeft:()=>(
        <TouchableHighlight onPress={ ()=> this.reload()}
        underlayColor="#58DFEB"
        >
         <Image 
          style={{
            height:25,
            width:25,
            marginLeft:25
          }}
          source={require("../images/reload-pngrepo-com.png")} />
         
        </TouchableHighlight>
      ),

      
    });
  }
  reload(){
    fetch(url)
    .then(res=> res.json())
    .then(res=>{
          console.log("res",res)
          let respond=res.reduce((acc,obj,arr)=>{
            let type=obj.type;
            if (acc==1){
              let sections={}
              var finalsections={}
              sections[type]=[obj]
              return sections
            }else{
              
              if (acc[type] === undefined){
               acc[type]=[obj]
               return acc
              }else{
                acc[type].push(obj)
                return acc
              }
            }
          },1)
          
          this.setState({newdata:respond,
          apidata:Object.keys(respond).map(arr=>{
            return {'type':arr,'data':respond[arr]}
          }).filter((data)=>{
            console.log("filter",this.state.data)
            if (this.state.data === "all"){
              return true
            }else{
              console.log("type",data.type)
              return data.type===this.state.data
            }
          })
          })
          ToastAndroid.showWithGravity(
            "get the newdata",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
               }) 
               .catch(()=>{
                 alert("error in get new data")
               })

  }

  componentDidMount(){
      
      this.navgation();
    console.log("willamount",this.state.data)
  }
  render(){
    return (
     
    
      <View style={styles.container}>
         
       <SectionList
        sections={this.state.apidata}
        renderItem={({item,index}) =>
        <View
        style={{
          flexDirection:"column",
          flex:1,
         
          
        }}
        >
        <View style={styles.sectionitemview} >
           <ImageBackground
           style={{
            resizeMode: "cover",
            flex: 1,
            width:250
           }}
          source={{uri: `${url}static/image/${item.image}`}}
        >
          </ImageBackground>
          </View>

          <View
          style={styles.sectionitemview2}>
             <Text style={{fontSize:20}}>name: {item.name}</Text>
             <Text style={{fontSize:20}}>price: {item.price}</Text>
             <Button title="buy" onPress={()=>this.openweb(item.url)}></Button>
          </View>
          </View>
          
        }


        renderSectionHeader={
          ({section}) => <Text 
          style={styles.sectionheader}>{section.type}</Text>
        }
        ItemSeparatorComponent={()=>
        <LinearGradient colors={["#fff",'#58DFEB']}
        style={{borderRightWidth:5,borderLeftWidth:5 }}>
          <Text>{" "}</Text>
          </LinearGradient>
        }
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => String(index)}

        ListEmptyComponent={()=>(
          <View
          style={{alignItems: 'center',flexDirection: 'column',height:height,}}>
          <View style={{flex:2,alignItems: 'center',}}>
            <Image
            style={{height:325,width:350,}}
            source={
              require("../images/sorry-icon-23.jpg")
            }
            />
            </View>
          <View style={{flex:1,alignItems: 'center',}}>
            <Text
            style={{fontSize:28,}}>
            no T-shirts avaliable
          </Text>
          <Button
          title="reload"
          style={{color:"#58DFEB",backgroundColor:"#58DFEB"}}
          onPress={()=>{this.reload()}}
          />
         </View>

          </View>
        )
        }
       />
      </View>
    );
  }
}


export default page1