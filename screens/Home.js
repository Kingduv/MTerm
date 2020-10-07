// React Native Full Screen Background Image
// https://aboutreact.com/react-native-full-screen-background-image/

// import React in our code
import React from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";

const App = () => {
  return (
    
      <ImageBackground
        style={styles.backgroundImg}
        source={{
          uri:
            "https://i1.wp.com/foodandpleasure.com/wp-content/uploads/2018/08/mexico-wallpaper-22.png?w=750&ssl=1",
        }}
      >
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Bienvenidos a El Fest, la primera aplicación para tus fiestas
          </Text>
          <View style={styles.centerContentStyle}>
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/originals/68/d1/06/68d1068adf6a7430509fca0b61b36bc6.jpg",
              }}
              style={{ width: 120, height: 120, marginTop: 80 }}
            />
            <Text style={styles.textStyle}>List@ para las Spooky Partys?</Text>
          </View>
        </View>
      </ImageBackground>
    
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white",
    marginTop:20
  },
  centerContentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#3ae868",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  backgroundImg:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  }
});
