import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
const data=[{},{},{},{},{},{},{},{}]
function CommonFlatList (){
     return(
    <View style={styles.cont}>
         <FlatList
        data={data}
        renderItem={({item})=>{
            console.warn("rendering");
            return(
                <View style={{height:50,width:100,margin:10,backgroundColor:"yellow"}}> 
                    </View>
            )
        }}
        />
       
    </View>
);
     }

export default CommonFlatList;
const styles=StyleSheet.create({
cont:{
    height:200,width:200
}
})
