import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { db } from "../../firebase/config";

import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { View, StyleSheet, TextInput, Text, Keyboard, TouchableOpacity, TouchableWithoutFeedback, FlatList, SafeAreaView } from "react-native";

export const CommentsScreen = ({ route }) => {
  const { id } = route.params.item;
  const [comments, setComments] = useState('');
  const [allComments, setAllComments] = useState([]);
  const { login } = useSelector(state => state.auth);

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    const docRef = await doc(db, "posts", id);

    const q = await query(collection(docRef, "comments"));

    onSnapshot(q, (data) => {
        setAllComments(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
      });
  }
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

  const handleChange = (value) => {
    setComments(value)
  }

  const createPost = async () => {
    const postsDocRef = doc(db, "posts", id);

    const ref = await addDoc(collection(postsDocRef, "comments"), {
      comments,
      login
    })
    setComments('')
  }

  return (     
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container} onLayout={onFontsLoaded}>
            <SafeAreaView style={styles.container}>
      <FlatList
        data={allComments}
            renderItem={({ item }) => (
              <View style={styles.input}>
              <Text style={styles.login}>{item.login}</Text>
                <Text style={styles.comment}>{item.comments}</Text>
              </View>
            )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={comments}
          placeholder="Please, enter your comment">
        </TextInput>
        <TouchableOpacity style={styles.sendBtn} onPress={createPost}>
          <AntDesign name="arrowup" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  login: {
    color: "#FF6C00",
    fontSize: 14,
  },
  comment: {
    color: 'black',
    fontSize: 18
  },
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
    marginHorizontal: 16
  }
})