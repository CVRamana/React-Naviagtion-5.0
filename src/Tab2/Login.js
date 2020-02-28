import React, { Component,useState } from 'react';
import { View, Text } from 'react-native';
import CommonTextInput from "./CommonTextInput";

const first = React.createRef();
const second = React.createRef();
const third = React.createRef();
const fourth = React.createRef();
const fifth = React.createRef();


function Login (props){

  const [txt,setName]=useState('')
  const [email,setEmail]=useState('')
    return (
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Text> Login </Text>
        <CommonTextInput
          ref={first}
          onChangeText={(val)=>setName(val)}
          placeholder={"hello"}
          onSubmitEditing={() => second.current.focus()}
        />
        <CommonTextInput
          ref={second}
          onChangeText={(val)=>setEmail(val)}
          placeholder={"Email"}
        />
        <Text>{txt} </Text>
        <Text>{email} </Text>
      </View>
    );
  }


export default Login;
