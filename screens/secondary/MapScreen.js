import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, {Marker} from 'react-native-maps';


export const MapScreen = () => {
    const markers = [
  {
    latitude: 45.65,
    longitude: -78.90,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

    return (<View style={styles.container}>
        <MapView style={styles.map}
            // region={...}
            annotations={markers}
        >
            <Marker coordinate={{
                latitude: 45.65,
                longtitude: -78.90
            }} />
        </MapView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
      map: {
    width: '100%',
    height: '100%',
  },

})