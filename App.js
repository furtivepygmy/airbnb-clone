import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Trips from './src/screens/Trips';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-empty" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/airbnb.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(TabNavigator);
