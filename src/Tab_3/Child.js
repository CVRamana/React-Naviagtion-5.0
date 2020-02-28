import React,{useEffect,useState} from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
let renderCount=1
// const data=[{},{},{},{},{},{},{},{}]

function  Child(){
   
    useEffect(()=>{renderCount= renderCount+1})
    return(
    <View>
        <Text>Child</Text>
    <Text> jhgds {renderCount}</Text>
    
    {/* <View style={{height:400,width:200}}>
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
        </View> */}
    </View>
    )
    }

export default Child;
