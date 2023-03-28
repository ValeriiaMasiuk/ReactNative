import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = ({ route }) => {
  // console.log(route.params.item.location)
  const {longitude, latitude} = route.params.item.location;
  return (
    <View style={styles.container}>
            <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="You are here"
        />
      </MapView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})