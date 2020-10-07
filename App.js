import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home.js";
import Contact from "./screens/Contact.js";
import Location from "./screens/Location.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-wine";
            } else if (route.name === "Contact") {
              iconName = "ios-contact";
            } else {
              iconName = "ios-pin";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ac2ae8",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "#abe0b9",
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Location" component={Location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
