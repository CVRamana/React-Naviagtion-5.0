import React,{useEffect} from 'react';
import { Text, View ,Button} from 'react-native';

const Details = ({
    params,navigation
}) => (
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

 
    </View>
);

export default Details;
