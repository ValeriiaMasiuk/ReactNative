import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableWithoutFeedback } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location'

export const CreatePostScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();
            
            if (status !== "granted") {
                setErrorMessage("Permission to access location was denied")
            }
        })
    })
            
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

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        setPhoto(photo.uri)
    }

    const handleTitleChange = (value) => {
        setTitle(value)
    }

    const handleLocationChange = (value) => {
        setPlace(value)
    }

    const reset = () => {
        setTitle('')
        setPhoto(null)
        setPlace('')
    }

    const sendPhoto = async () => {
        const location = await Location.getCurrentPositionAsync()
        // setPlace({
        //     latitude: location.coords.latitude,
        //     longitude: location.coords.longitude,
        // });
        console.log(location.coords.latitude)
        console.log(location.coords.longitude)
        navigation.navigate('Home', { photo, title, place })
        reset()
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <View onLayout={onFontsLoaded}>
                    <Camera style={styles.camera} ref={setCamera}>
                        <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
                            <Feather name="camera" size={45} color="white" />
                        </TouchableOpacity>

                        {photo && (
                            <View style={styles.smallImg}>
                                <Image source={{ uri: photo }} style={{ width: 343, height: 200 }} />
                            </View>
                        )}
                    </Camera>

                    <Text style={styles.uploadText}>Please, upload a photo</Text>
                    
                    <TextInput style={{ ...styles.input, marginBottom: 22 }} placeholder='Title...' value={title} onChangeText={handleTitleChange}></TextInput>
                    <View>
                    <TextInput style={{ ...styles.input, marginBottom: 122, paddingLeft: 20 }} placeholder='Place..' value={place} onChangeText={handleLocationChange}></TextInput>
                    <MaterialCommunityIcons style={{...styles.marker, marginRight: 8}} name="map-marker-outline" size={18}/>
                    </View>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn} onPress={sendPhoto}>
                            <Text style={styles.btnText}>Publish</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteBtn} onPress={reset}>
                            <AntDesign name="delete" size={20} color="#BDBDBD" />
                        </TouchableOpacity>
                    </View>    
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    marker: {
        position: "absolute",
        color: '#BDBDBD',
        top: 5
    },
    smallImg: {
        position: "absolute",
        height: 200,
        width: 343,
        backgroundColor: "green"
    },
    cameraBtn: {
        top: '30%',
        left: '35%',
        width: 80,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 16,
    },
    camera: {
        top: 32,
        width: 343,
        height: 200,
        borderRadius: 16,
        marginBottom: 44,
        backgroundColor: "black",
    },
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
        color: 'white',
    },
    btn: {
        minWidth: 343,
        marginBottom: 12,
        height: 51,
        paddingTop: 15,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center'
    },
    input: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    uploadText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        marginBottom: 18,
    },
    cameraImg: {
        position: 'relative',
        borderRadius: 50,
        top: 80,
        left: 140,
    },
    container: {
        flex: 1,
        textAlign: 'left',
        marginHorizontal: 24,
    }
})