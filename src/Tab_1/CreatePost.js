import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> CreatePost </Text>
        <TextInput
                placeholder="What's on your mind?"
                style={{
                    height: 200,
                    padding: 10,
                    backgroundColor: 'white'
                }}
               
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    this.props.navigation.navigate('Home', { post: this.state.postText });
                }}
            />
      </View>
    );
  }
}

export default CreatePost;
