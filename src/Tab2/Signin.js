import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{marginTop:40}}>
        <Text> Signin </Text>
        <Button
        title="Login"
        onPress={()=>this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default Signin;
