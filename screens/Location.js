import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.estiloMapa}
        initialRegion={{
          latitude: 19.48,
          longitude: -99.17,
          latitudeDelta: 35,
          longitudeDelta: 35,
        }}
      >
        <Marker
          coordinate={{
            latitude: 19.5508539,
            longitude: -99.2986088,
          }}
          description="Dia de muertos Fiesta"
          title="House:Day 1"
        />
        <Marker
          coordinate={{
            latitude: 19.5307091,
            longitude: -99.3071135,
          }}
          description="Fiesta Halloween"
          title="House:Day 2"
        />
        <Marker
          coordinate={{
            latitude: 19.5721384,
            longitude: -99.3201537,
          }}
          description="Fiesta Cruda"
          title="House:Day 3"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  estiloMapa: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
