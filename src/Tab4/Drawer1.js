import React, { Component } from 'react';
import { View, Text ,Button,LayoutAnimation,Image,UIManager,Platform} from 'react-native';

class Drawer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        animateHeight:300,
        toggle:true
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
         <View style={{height:this.state.animateHeight,width:300,backgroundColor:"yellow"}}>
        <Text> The default component to add a header,footer, or other content to the drawer. 
        The default content component is exported as DrawerContent.
         It renders a DrawerItemList component inside a ScrollView.
         </Text>
         <Image
         style={{height:100,width:100,backgroundColor:"green"}}/>
      </View>
      <Button
      title="collapse"
      onPress={()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.state.toggle?
        this.setState({animateHeight:300,
        toggle:!this.state.toggle}) :
        this.setState({animateHeight:100,
            toggle:!this.state.toggle})
      }}
      />
      </View>
    );
  }
}

export default Drawer1;
