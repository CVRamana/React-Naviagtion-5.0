import React from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';
// custom import
// import {vh, vw} from '../constansts';
 const CommonTextInput = React.forwardRef((props, ref) => {
  const {
    placeHolder,
    extraStyle,
    keyboardType,
    defaultValue,
    returnKeyType,
    onSubmitEditing,
    secureTextEntry,
    onChangeTextAction,
  } = props;
  return (
    <View style={extraStyle}>
      <Text style={styles.placeHolderText}>{placeHolder}</Text>
      <View style={styles.container}>
        <TextInput
          ref={ref}
          placeholder={props.placeholder}
          style={styles.textInput}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={props.onSubmitEditing}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
});

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    height: (50),
    width: (300),
    borderWidth: (1),
    borderRadius: (25),
    justifyContent: 'center',
  },
  placeHolderText: {
    fontSize: (20),
    marginLeft: (10),
    marginBottom: (5),
  },
  textInput: {
    fontSize: (15),
    paddingLeft: (30),
    paddingRight: (30),
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    paddingBottom: Platform.OS === 'android' ? 0 : 0,
  },
});