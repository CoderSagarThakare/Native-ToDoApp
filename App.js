// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootNavigator from './src/navigation/root-navigator'
import HomeScreen from './src/screens/task-screen';
import SettingsScreen from './src/screens/setting-screen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8e8e93',
          tabBarStyle: { height: 60, paddingBottom: 8 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'help-circle-outline'; // fallback

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator> */}

      <RootNavigator />
    </NavigationContainer>
  );
}