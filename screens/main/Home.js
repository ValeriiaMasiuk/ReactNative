import { Text, View, StyleSheet, Image } from 'react-native';
import { PostsScreen } from './PostsScreen';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export const Home = () => {
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
            <View style={styles.profileBox}>
                <Image
                    source={require('../../images/profileAvatar.jpg')}
                    style={styles.avatar} />
                <View style={styles.text}>
                    <Text style={styles.profileName}>Valeriia Masiuk</Text>
                    <Text style={styles.profileEmail}>email@example.com</Text>
                </View>
            </View>
            <PostsScreen/>
        </View>
    )

}

const styles = StyleSheet.create({
    profileEmail: {
        fontStyle: 'Roboto-Regular',
        fontSize: 11,
        lineHeight: 13,
        color: '#212121',
    },
    profileName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
        color: '#212121'
    },
    profileBox: {
        flex: 1,
        maxHeight: 140,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    }
})
