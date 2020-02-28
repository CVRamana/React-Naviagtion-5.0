import React,{useState,useMemo,useEffect} from 'react';
import { Text, View,Button,FlatList } from 'react-native';
import Child from './Child';
import Memo from './Memo';
import CommonFlatList from './CommonFlatList';


// const data=[{},{},{},{},{},{},{},{}]

function Profile  (){
  const [i,setI]=useState(0)
  useEffect(() => {
   // console.warn("Nirvana achieved")
}, //means run only when the count value changes
)

  
  const memoChild=useMemo(()=>{
    return <Child/>
  },[])
  const memoFlatList=useMemo(()=>{
    return <CommonFlatList/>
  },[])
  return(
    <View style={{marginTop:100}}>
        <Text>componentName</Text>
        <Button
        title="Inrement"
        onPress={()=>{setI(i+1)}}
        />
       <Text> {i}</Text>
        {/* <Child /> */}
        <Memo/>
        <Text> Memo child</Text>
        {memoChild}
        
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
        {/* //memo child for the FlatList CompositionEvent */}
        {memoFlatList}
    </View>
    )
}

export default Profile;
