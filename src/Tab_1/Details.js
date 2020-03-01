import React,{useEffect} from 'react';
import { Text, View ,Button} from 'react-native';
import Courasel from "./Courasel";
import { useFocusEffect } from '@react-navigation/native';
function Details  ({route,navigation}){
    const id = route.params.id;
    const name = route.params.name;
    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
    console.warn("detail focused", route);
    
          return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functio
            console.warn("deatils unfocused");
            
          };
        }, [])
      );
  return(
    <View>
        <Text>Details</Text>
        <Button
        title="Go to Details"
        onPress={()=>navigation.navigate('Details')}
       / >
            <Button
        title="Go to Details again....."
        onPress={()=>navigation.push('Details')}
       / >
           <Button
        title="Go back"
        onPress={() => navigation.goBack()}/>

            <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}/>
<Text> id : {id}</Text>
<Text> name : {name}</Text>
        <Text> Lets make Courasel</Text>
<View style={{height:500,width:"100%",backgroundColor:"yellow"}}>
      <Courasel/>
      </View>

 
    </View>
);
}

export default Details;
