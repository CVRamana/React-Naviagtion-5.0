import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Details from './src/Tab_1/Details'
import Home from './src/Tab_1/Home'
import CreatePost from './src/Tab_1/CreatePost'
import Setting from "./src/Tab_1/Setting";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/Tab2/Login';
import Signin from './src/Tab2/Signin';
import Profile from "./src/Tab_3/Profile";
import Drawer1 from "./src/Tab4/Drawer1";
import Drawer2 from "./src/Tab4/Drawer2";
import { Image, Button, Text, View } from "react-native";


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
//Drawer Content

const DrawerContent = ({
navigation
}) => (
    <View

    >
      <Image style={{ height: 100, width: 100, backgroundColor: "pink", borderRadius: 50 }} />
      <Text>Raman Verma</Text>
      <Button
        title="Drawer1 "
        onPress={() => navigation.navigate('Drawer1')}
      />
      <Button
        title="Drawer2"
        onPress={() => navigation.navigate('Drawer2')}
      />
    </View>
  );




//home Stack
function HomeStack({ navigation, route }) {
  navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode={"none"}
    >
      <Stack.Screen name="Home" component={Home}
        options={{

        }}
      />
      <Stack.Screen name="Details" component={Details}
      />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  )

}


//Auth stack
function AuthStack({ route, navigation }) {
  navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
  return (
    <Stack.Navigator initialRouteName="Signin" headerMode={"none"}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

//Drawer Navigation 
function DrawerStack({ route, navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Drawer1"

      drawerContent={(props) => <DrawerContent {...props} />}

      drawerStyle={{
        backgroundColor: "green",
        alignItems: "center",

        paddingTop: 100
      }}
    >
      {/* //it is must to define the screens here */}
      <Drawer.Screen name="Drawer1" component={Drawer1}
      />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
    </Drawer.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (

    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: "green",
          labelStyle: { fontSize: 20 },
          tabStyle: {
            backgroundColor: "pink",
            height: 90,
            //  marginTop:20,
            // alignItems:"center",
            justifyContent: "center"
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (focused ?
                <Image style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "green" }} /> :
                <Image style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "black" }} />)
            },
            tabBarLabel: 'Home',
            tabBarVisible: true,

          }}
        />
        <Tab.Screen name="Auth" component={AuthStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Drawer" component={DrawerStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
