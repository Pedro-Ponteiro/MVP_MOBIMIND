import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InitialMeditateController from "../stacks/Meditate/InitialScreen/Controller/InitialMeditateController";
import InitialProfileController from "../stacks/Profile/InitialScreen/Controller/InitialProfileController";
import CustomizationController from "../stacks/Meditate/CustomizationScreen/Controller/CustomizationController";
import PlayerController from "../stacks/Meditate/PlayerScreen/Controller/PlayerController";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import LogoComponent from "../components/LogoComponent";

const Tab = createBottomTabNavigator();
const MeditateStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function MeditateStackNav() {
  return (
    <MeditateStack.Navigator
      screenOptions={{
        headerLeft: () => <LogoComponent />,
        title: null,
      }}
      initialRouteName="InitialMeditateScreen"
    >
      <MeditateStack.Screen
        name="InitialMeditateScreen"
        component={InitialMeditateController}
      />
      <MeditateStack.Screen
        name="CustomizationScreen"
        component={CustomizationController}
      />
      <MeditateStack.Screen name="PlayerScreen" component={PlayerController} />
    </MeditateStack.Navigator>
  );
}

function ProfileStackNav() {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerLeft: () => <LogoComponent />, title: null }}
      initialRouteName="InitialProfileScreen"
    >
      <ProfileStack.Screen
        name="InitialProfileScreen"
        component={InitialProfileController}
      />
    </ProfileStack.Navigator>
  );
}

function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Meditate"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Meditate") {
              iconName = "smileo";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Meditate" component={MeditateStackNav} />
        <Tab.Screen name="Profile" component={ProfileStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
