import React, { useCallback, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, StyleSheet, TextInput, Keyboard, TouchableOpacity, TouchableWithoutFeedback, FlatList } from "react-native";

export const CommentsScreen = ({ route }) => {
    const [comment, setComment] = useState('')

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
    
    const commentId = Date.now();

    const handleChange = (value) => {
        setComment((prevState) => (
            { ...prevState, comment: value }
        ))
    }

    const addComment = () => {
        const commentItem = {
            id: commentId,
            comment
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        const newComment = {comment}
        addComment(newComment)
        console.log("submitted")
        reset()
    }

    const reset = () => {
        setComment('')
    }

    return (     
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container} onLayout={onFontsLoaded}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange}
                    value={comment}
                    placeholder="Please, enter your comment">
                </TextInput>
                <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit}>
                    <AntDesign name="arrowup" size={24} color="white" />
                </TouchableOpacity>

            </View>
            </TouchableWithoutFeedback>
        )

}

const styles = StyleSheet.create({
    sendBtn: {
        position: "absolute",
        bottom: 24,
        left: 290,
        backgroundColor: "#FF6C00",
        padding: 10,
        borderRadius: 50,
    },
    input: {
        borderColor: "#E8E8E8",
        borderWidth: 1,
        width: 343,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        borderRadius: 50,
        color: "#BDBDBD",
        fontSize: 16,
        marginBottom: 16
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginHorizontal: 16
    }
})