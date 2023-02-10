import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Home = ({ route, navigation }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }   
    }, [route.params])
    
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
    })

    const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);
    
      if (!fontsLoaded) {
    return null;
    }
    
    return (
        <View style={styles.container} onLayout={onFontsLoaded}>
            <View style={styles.post}>
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => (   
                        <View>
                            <Image source={{ uri: item.photo }} style={styles.image} />
                            <Text style={styles.imgTitle}>{item.title}</Text>
                                <View style={styles.dataBox}>
                                    <TouchableOpacity style={styles.message} onPress={() => navigation.navigate("Comments")}>
                                        <Feather name="message-circle" size={18}/>
                                        <Text style={styles.num}>0</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.location} onPress={() => navigation.navigate("Map")}>
                                        <MaterialCommunityIcons name="map-marker-outline" size={18}/>
                                    <Text style={styles.place}>{item.place}</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>)
                    } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataBox: {
        flex: 1,
        flexDirection: "row"
    },
    post: {
        marginTop: 34,
    },
    place: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'right',
        textDecorationLine: 'underline',
        color: '#212121',
        fontStyle: 'Roboto-Regular'
    },
    location: {
        color: '#BDBDBD',
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        width: 300,
        height: "auto",
        borderWidth: 1,
        borderColor: "black"
    },
    num: {
        marginLeft: 9
    },
    message: {
        flex: 1,
        flexDirection: "row",
        width: 20,
        height: 30,
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    imgTitle: {
        marginBottom: 11,
        height: 19,
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        borderWidth: 1,
        borderColor: "black"
    },
    image: {
        width: 343,
        height: 200,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "black"
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
    }
})
