import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap:"wrap",
      fontSize: 20,
      fontWeight: "bold",
      backgroundColor: '#fff',
     
    },
    startlogo:{
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoimage:{
      width: 300,
      height: 150,
    },
    sectionitemview:{
      height:250,
      flex:2,
      borderRightWidth:5,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth:5,
      borderRightWidth:2.5,
      borderLeftWidth:2.5,
      flexDirection:"column",
      borderBottomWidth:0
    },
    sectionitemview2:{
      height:150,
      flex:1,
      borderWidth:5,
      borderTopWidth:0,
      
      borderLeftWidth:2.5,
      borderRightWidth:2.5,
      backgroundColor: '#fff',
      fontSize:25,
      alignItems: 'center',
    },
    sectionheader:{
      backgroundColor: '#58DFEB',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default styles;
