import React,{useState,useEffect} from 'react';
import { Text, View,Button,TextInput } from 'react-native';
import Child from './Child';
// import { TextInput } from 'react-native-gesture-handler';

let renderCount=0
function Memo(){
    const [i,setI]=useState(0)
    const [txt,setText]=useState('')
    useEffect(()=>{renderCount= renderCount+1})//agar is component ki kisi bhi 
    //state ya prop me change hoga to yah render hoga
return (
    <View>
        <Text>componentName</Text>
        <TextInput
        style={{height:40,width:200,backgroundColor:"grey"}}
        onChangeText={(t)=>setText(t)}
         />
       
        <Text>Memos I {renderCount}</Text>
        
    </View>
);
}

export default Memo;
