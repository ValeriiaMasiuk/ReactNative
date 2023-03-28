import { Text, View, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser } from '../../redux/auth/authOperations';
import { db } from '../../firebase/config';
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([])
  const { userId, login } = useSelector(state => state.auth);
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
  });

  useEffect(() => {
    getUserPosts()
  }, [])

  const getUserPosts = async () => {
    const q = query(
      collection(db, "posts"),
      where("userId", "==", `${userId}`)
    );

    onSnapshot(q, (data) => {
      setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
    });
  }

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
    
  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = () => {
    dispatch(authSignOutUser());
    navigation.navigate('Registration')
  }

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <ImageBackground style={styles.bgImage} source={require('../../images/background.jpg')}>
        <View style={styles.profileBox}>
          <View>
            <ImageBackground style={styles.avatar} source={require('../../images/avatar.jpg')}>
              <AntDesign style={styles.closeIcon} name="closecircleo" size={25} />
                <TouchableOpacity onPress={handleSubmit}>
                  <Ionicons style={styles.logoutIcon} name="md-log-in-outline" size={24} color="#BDBDBD" />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.profileTitle}>{login}</Text>
          </View>
          <View style={styles.post}>
            <FlatList
            data={userPosts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => (
              <View>
                <Image source={{ uri: item.item.photo }} style={styles.image} />
                <Text style={styles.imgTitle}>{item.item.title}</Text>
              </View>
              )} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 34,
        top: 130,
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
      height: 200,
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