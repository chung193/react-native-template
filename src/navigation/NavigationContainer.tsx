import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Setting from '../screens/setting/Setting';

// const RootTabs = createBottomTabNavigator({
//   screens: {
//     Home: Home,
//     Settings: Setting,
//   },
// });

// const Navigation = createStaticNavigation(RootTabs);

export default function NavigationContainer() {
  return (
    // <Navigation />
    <>
      <Home />
      <Setting />
    </>
  );
}
