import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const intialState = {
    email: "",
    password: "",
}

export const LoginScreen = () => {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false);
    const [state, setState] = useState(intialState);

    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf')
    })

    const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);
    
      if (!fontsLoaded) {
    return null;
  }
    
    const keyboardHide = () => {
        setKeyboardIsShown(false);
        Keyboard.dismiss();
        setState(intialState)
        console.log(state)
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View onLayout={onFontsLoaded}>
            <ImageBackground style={styles.image} source={require('../images/background.jpg')}>
                <View style={styles.form}>
                    <Text style={styles.title}>Log In</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={state.email}
                            onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}>
                        </TextInput>
                        
                        <View style={styles.passwordBox}>
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                secureTextEntry={true}
                                value={state.password}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}>
                            </TextInput>
                                <TouchableOpacity>
                                <Text
                                    style={styles.showPass}>Show</Text>
                                </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            onPress={keyboardHide}>
                            <Text
                                style={styles.registerText}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText}>Don't have an account? Register here</Text>
                </View>
                
            </ImageBackground>
         
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    passwordBox: {
        position: 'relative',
    },
    showPass: {
        bottom: 38,
        left: 280,
        position: 'absolute',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'right',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
    },
    loginText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
    },
    registerText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
    },
    button: {
        marginBottom: 16,
        marginTop: 27,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        height: 51,
        width: 343,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        fontFamily: 'Roboto-Regular',
    },
    addBtn: {
        position: 'absolute',
        width: 25,
        height: 25,
    },
    imgBox: {
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 263,
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
    },
    image: {
        position: 'relative',
        width: 400,
        height: 812,
    },
    registerImg: {
        position: 'absolute',
        borderRadius: 16,
        top: 203,
    },
    input: {
        borderWidth: 1,
        fontFamily: 'Roboto-Regular',
        backgroundColor: '#F6F6F6',
        borderType: 'solid',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        padding: 16,
        width: 343,
        marginBottom: 16,
        fontSize: 16,
        color: '#212121',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 33,
        fontFamily: 'Roboto-Medium',
    },
});