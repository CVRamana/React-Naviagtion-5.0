import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';

class Drawer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  style={{marginTop: 100,}}>
        <Text> Drawer2 </Text>
        <Button
       
        title="Open Drawer"
        onPress={()=>this.props.navigation.openDrawer()}
        />
        
      </View>
    );
  }
}

export default Drawer2;
