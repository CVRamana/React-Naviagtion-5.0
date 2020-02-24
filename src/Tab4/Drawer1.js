import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';

class Drawer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{marginTop: 100,}}>
        <Text> Drawer1 </Text>
        <Button
        style={{marginTop: 100,}}
        title="Open Drawer"
        onPress={()=>this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}

export default Drawer1;
