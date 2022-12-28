import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const ProfileScreen = ({navigation}) => {
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
            <ImageBackground style={styles.bgImage} source={require('../../images/background.jpg')}>
                <View style={styles.profileBox}>
                <ImageBackground style={styles.avatar} source={require('../../images/avatar.jpg')}>
                        <AntDesign style={styles.closeIcon} name="closecircleo" size={25} />
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Ionicons style={styles.logoutIcon} name="md-log-in-outline" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                </ImageBackground>
                    <Text style={styles.profileTitle}>Valeriia Masiuk</Text>

                            <View style={styles.container} onLayout={onFontsLoaded}>
            <View style={styles.post}>
                <Image style={styles.image} source={require('../../images/img1.jpg')}></Image>
                <Text style={styles.imgTitle}>Forest</Text>
                <View style={styles.box}>
                <View style={styles.message}>
                    <View style={styles.smallBox}>
                        <Feather name="message-circle" size={18} color="#FF6C00"/>
                        <Text style={styles.num}>8</Text>
                    </View>
                    <View style={styles.smallBox}>
                        <AntDesign name="like2" size={18} color="#FF6C00" />
                        <Text style={styles.num}>153</Text>
                    </View>
                </View>
                <Text style={styles.location}>
                    <MaterialCommunityIcons name="map-marker-outline" size={18}/>
                    <Text style={styles.place}>Ukraine</Text>
                </Text>
                </View>
            </View>
        </View>
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    smallBox: {
        flex: 1,
        flexDirection: 'row',
    },
    post: {
        marginBottom: 34,
        top: 130,
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
        marginLeft: 9,
    },
    message: {
        flex: 1,
        height: 19,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        flexDirection: 'row',
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
    profileTitle: {
        fontStyle: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        color: '#212121',
        top: 92,
        textAlign: 'center',
    },
    logoutIcon: {
        left: 230,
        top: 60,
    },
    closeIcon: {
        width: 25,
        backgroundColor: '#FFFFFF',
        color: '#E8E8E8',
        borderRadius: 50,
        left: 105,
        top: 80,
    },
    avatar: {
        height: 120,
        width: 120,
        position: 'absolute',
        borderRadius: 16,
        top: -50,
        left: 128,
        marginBottom: 32,
    },
    profileBox: {
        height: 665,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        top: 147,
        paddingLeft: 16,
        paddingRight: 16,
    },
    bgImage: {
        position: 'relative',
        width: 400,
        height: 812,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})