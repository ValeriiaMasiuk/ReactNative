import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { db } from "../../firebase/config";
import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Home = ({ navigation }) => {
  const [post, setPost] = useState([]);

  const getAllPosts = async () => {
    try {
      const q = query(collection(db, "posts"));

      onSnapshot(q, (data) => {
        setPost([]);
        data.forEach((doc) => {
          setPost((prevState) => {
            const newComments = { ...doc.data(), id: doc.id };

            return [...prevState, newComments];
          });
        });
      });        
        } catch (error) {
            console.log('error')
        }
  }

  useEffect(() => {
    getAllPosts()  
  }, [])
    
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
          data={post}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) =>(
            <View>
              <Image source={{ uri: item.item.photo }} style={styles.image} />
              <Text style={styles.imgTitle}>{item.item.title}</Text>
              <Text style={styles.imgTitle}>{item.item.comment}</Text>
              <View style={styles.dataBox}>
                <TouchableOpacity style={styles.message} onPress={() => navigation.navigate("Comments", item)}>
                  <Feather name="message-circle" size={18} />
                  <Text style={styles.num}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.location} onPress={() => navigation.navigate("Map", item)}>
                  <MaterialCommunityIcons name="map-marker-outline" size={18} />
                  <Text style={styles.place}>{item.item.place}</Text>
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
        color: '#212121'
    },
    image: {
        width: 343,
        height: 200,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
    }
})
