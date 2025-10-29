import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TAB_SCREENS } from '../const/tabConfig';

export default function TabBarIcon({ route, focused, color, size }) {
  const tab = TAB_SCREENS.find(t => t.name === route.name);
  if (!tab) return <Icon name="help-circle-outline" size={size} color={color} />;

  const iconName = focused ? tab.icons.focused : tab.icons.unfocused;
  return <Icon name={iconName} size={size} color={color} />;
}