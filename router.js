import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RegistrationScreen } from './screens/auth/RegistartionScreen';
import { LoginScreen } from './screens/auth/LoginScreen';
import { Home } from './screens/secondary/Home';
import { PostsScreen } from './screens/main/PostsScreen';
import { ProfileScreen } from './screens/main/ProfileScreen';
import { CreatePostScreen } from './screens/main/CreatePostsScreen';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoutePath = (isAuth) => {
  if (!isAuth) {
    return (
            <AuthStack.Navigator>
        <AuthStack.Screen 
          options={{headerShown: false}} 
          name="Registration" 
          component={RegistrationScreen} />
        <AuthStack.Screen 
          options={{headerShown: false}} 
          name="Login" 
          component={LoginScreen} />
        <AuthStack.Screen 
          options={{headerTitleAlign: "center"}}
          name="Posts" 
          component={Home} />
        </AuthStack.Navigator>
    )
  }
  return (    
    <MainTab.Navigator >
      <MainTab.Screen
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="grid-outline" size={24} color="#212121" />
           )
        }}
        name='Posts'
        component={PostsScreen} />
      <MainTab.Screen
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="add-circle" size={40} color="#FF6C00" />
          )
        }}
        name='Create a Post'
        component={CreatePostScreen} />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="#212121" />
          )
        }}
        name='Profile' component={ProfileScreen} />
    </MainTab.Navigator>
  )
}