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


// import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
// import { useFonts } from 'expo-font';
// import React, { useCallback, useEffect, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';

// import { Feather } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// export const PostsScreen = ({ route }) => {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         if (route.params) {
//             setPosts((prevState) => [...prevState, route.params])
//         }   
//     }, [route.params])
    
//     const [fontsLoaded] = useFonts({
//         'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
//         'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
//     })

//     const onFontsLoaded = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//     }, [fontsLoaded]);
    
//       if (!fontsLoaded) {
//     return null;
//     }
    
//     return (
//         <View style={styles.container} onLayout={onFontsLoaded}>
//             <View style={styles.post}>
//                 <FlatList
//                     data={posts}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={(item) => (
//                         <View>
//                             <Image source={{ uri: item.photo }} style={styles.image} />
//                             <Text style={styles.message}>
//                                 <Feather name="message-circle" size={18}/>
//                                 <Text style={styles.num}>0</Text>
//                             </Text>
//                             <Text style={styles.location}>
//                                 <MaterialCommunityIcons name="map-marker-outline" size={18}/>
//                                 <Text style={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
//                             </Text>
//                         </View>)} />
//                 {/* <Image style={styles.image} source={require('../../images/img1.jpg')}></Image>
//                 <Text style={styles.imgTitle}>Forest</Text>
//                 <View style={styles.box}>
//                     <Text style={styles.message}>
//                         <Feather name="message-circle" size={18}/>
//                         <Text style={styles.num}>0</Text>
//                 </Text>
//                 <Text style={styles.location}>
//                     <MaterialCommunityIcons name="map-marker-outline" size={18}/>
//                     <Text style={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
//                 </Text>
//                 </View> */}
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     post: {
//         marginBottom: 34,
//     },
//     place: {
//         fontSize: 16,
//         lineHeight: 19,
//         textAlign: 'right',
//         textDecorationLine: 'underline',
//         color: '#212121',
//         fontStyle: 'Roboto-Regular'
//     },
//     location: {
//         color: '#BDBDBD',
//         marginBottom: 10,
//     },
//     box: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         height: 19,
//         alignContent: 'center',
//     },
//     num: {
//         marginLeft: 9
//     },
//     message: {
//         height: 19,
//         fontSize: 16,
//         lineHeight: 19,
//         color: '#BDBDBD',
//     },
//     imgTitle: {
//         marginBottom: 11,
//         height: 19,
//         fontFamily: 'Roboto-Medium',
//         fontSize: 16,
//         lineHeight: 19,
//         color: '#212121',
//     },
//     image: {
//         width: 343,
//         height: 200,
//         marginBottom: 20,
//         borderWidth: 1,
//         borderColor: "black"
//     },
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: "center",
//     }
// })

