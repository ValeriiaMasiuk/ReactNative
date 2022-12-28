import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableWithoutFeedback } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export const CreatePostScreen = () => {
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
        <TouchableWithoutFeedback onLayout={onFontsLoaded} onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image style={styles.cameraImg} source={require('../../images/camera.jpg')} />
            </View>
            <Text style={styles.uploadText}>Please, upload a photo</Text>
            <TextInput style={{ ...styles.input, marginBottom: 32 }} >Title...</TextInput>
                <TextInput style={{ ...styles.input, marginBottom: 32 }}>
                    <MaterialCommunityIcons style={{marginRight: 8}} name="map-marker-outline" size={18}/>
                    Place...
                </TextInput>
                <View style={styles.btns}>
                <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                    Publish
                </Text>        
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn}>
                    <AntDesign name="delete" size={20} color="#BDBDBD" />
                    </TouchableOpacity>
                </View>
                </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    btns: {
        alignItems: 'center',
    },
    deleteBtn: {
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        width: 100,
        paddingTop: 10,
        paddingLeft: 28,
        paddingBottom: 10,
        paddingRight: 28,
    },
    btnText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    btn: {
        minWidth: 343,
        marginBottom: 12,
        height: 51,
        paddingTop: 15,
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    uploadText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        marginBottom: 48,
    },
    cameraImg: {
        position: 'relative',
        borderRadius: 50,
        top: 80,
        left: 140,
    },
    imgBox: {
        top: 32,
        width: 343,
        height: 240,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        marginBottom: 38,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        textAlign: 'left',
        marginHorizontal: 24,
    }
})