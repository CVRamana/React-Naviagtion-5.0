import React from 'react';
import { Text, View,Button } from 'react-native';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillUnmount(){
      console.log(" unmount  of A called");  
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text> Home </Text>
     
        <Button
        title="Go to Details"
        onPress={()=>this.props.navigation.navigate('Details')}
       />
       <Button
        title="Create Post"
        onPress={()=>this.props.navigation.navigate('CreatePost')}
       / >
     
      </View>
    );
  }
}

export default Home;

