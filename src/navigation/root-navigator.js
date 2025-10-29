// src/navigation/RootNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './tab-bar-icon';
import { TAB_SCREENS } from '../const/tabConfig';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7dabf6',
        tabBarInactiveTintColor: '#8f8e93',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarItemStyle: { padding: 4 },
      }}
    >
      {TAB_SCREENS.map(({ name, component, label, badge }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: label,
            tabBarIcon: (props) => <TabBarIcon route={{ name }} {...props} />,
            tabBarBadge: badge,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}