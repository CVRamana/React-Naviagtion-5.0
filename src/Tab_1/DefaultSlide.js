import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
// import { vw } from '../ResponsiveScreen';

export default class DefaultSlide extends React.PureComponent {
  render() {
    const { item, dimensions, bottomButton } = this.props;
    const style = {
      flex: 1,
      backgroundColor: item.backgroundColor,
      width: dimensions.width,
      paddingBottom: bottomButton ? 132 : 64,
    };
    return (
      <View style={[styles.mainContent]}>
          <Text style={styles.skip}>Skip </Text>
        <Image
        resizeMethod="resize"
        resizeMode="contain"
         source={item.image} style={{height:278,width:283,marginTop:40}}  />
         <View style={styles.txt}>
        <Text style={[styles.text,]}>{item.text}</Text>
          <Text> {item.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems:"center",
   // marginTop:91,
  },
  skip:{marginLeft:303,marginTop:40},
  text: {
   // color: 'rgba(255, 255, 255, .7)',
    fontSize: (16),
    fontWeight:"bold",
    textAlign: 'center',
   
    paddingHorizontal: (16),
  },txt:{
      justifyContent:"center",alignItems:"center",
    marginTop:60},
  title: {
    fontSize: (26),
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: '300',
    paddingHorizontal: (16),
  },
});