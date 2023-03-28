import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../secondary/Home";
import { MapScreen } from "../secondary/MapScreen";
import { CommentsScreen } from "../secondary/CommentsScreen";

const NestedScreen = createNativeStackNavigator();

export const PostsScreen = () => {
    return (<NestedScreen.Navigator>
        <NestedScreen.Screen name='Home' component={Home} />
        <NestedScreen.Screen name='Map' component={MapScreen} />
        <NestedScreen.Screen name='Comments' component={CommentsScreen} />
    </NestedScreen.Navigator>)
}

