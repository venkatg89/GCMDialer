import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./src/Components/HomeScreen";
import ContactsScreen from "./src/Components/ContactsScreen";
import CallLogScreen from "./src/Components/CallLogScreen";
import SettingsScreen from "./src/Components/SettingsScreen";


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ContctsStack = createStackNavigator();

function ContactsStackScreen() {
  return (
    <ContctsStack.Navigator>
      <ContctsStack.Screen name="Contacts" component={ContactsScreen} />
    </ContctsStack.Navigator>
  );
}

const CallLogStack = createStackNavigator();

function CallLogStackScreen() {
  return (
    <CallLogStack.Navigator>
      <CallLogStack.Screen name="CallLog" component={CallLogScreen} />
    </CallLogStack.Navigator>
  );
}


const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Contacts"
          component={ContactsStackScreen} 
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen
          name="CallLog"
          component={CallLogStackScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="history" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-settings" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}