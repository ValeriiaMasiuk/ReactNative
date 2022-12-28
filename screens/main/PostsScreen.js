import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const PostsScreen = () => {
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
                <Image style={styles.image} source={require('../../images/img1.jpg')}></Image>
                <Text style={styles.imgTitle}>Forest</Text>
                <View style={styles.box}>
                    <Text style={styles.message}>
                        <Feather name="message-circle" size={18}/>
                        <Text style={styles.num}>0</Text>
                </Text>
                <Text style={styles.location}>
                    <MaterialCommunityIcons name="map-marker-outline" size={18}/>
                    <Text style={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
                </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 34,
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
        color: '#BDBDBD'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 19,
        alignContent: 'center',
    },
    num: {
        marginLeft: 9
    },
    message: {
        height: 19,
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
    },
    image: {
        width: 343,
        marginBottom: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
    }
})

