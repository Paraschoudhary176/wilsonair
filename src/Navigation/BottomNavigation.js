import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import WishScreen from '../screens/WishScreen';
import FindScreen from '../screens/FindScreen';
import BooboAi from '../screens/BooboAi';
import Plan from '../screens/Plan';
import BookStackNavigator from './BookStackNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212', // Dark background
          height: 64, // Adjusted to match your design
          borderTopWidth: 0, // Remove top border line
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5, // Adjust for spacing
        },
      }}
    >
      <Tab.Screen
        name="Wish"
        component={WishScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/img/wish.png')}
              style={{
                tintColor: focused ? '#00E6E6' : '#808080',
                width: 24,
                height: 24,
                marginBottom: 4,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>WISH</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/img/Find.png')}
              style={{
                tintColor: focused ? '#00E6E6' : '#808080',
                width: 24,
                height: 24,
                marginBottom: 4,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>FIND</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bobo AI"
        component={BooboAi}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/img/Bobo.png')}
              style={{
                tintColor: focused ? '#00E6E6' : '#808080',
                width: 24,
                height: 24,
                marginBottom: 4,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>BOBO AI</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/img/Plan.png')}
              style={{
                tintColor: focused ? '#00E6E6' : '#808080',
                width: 24,
                height: 24,
                marginBottom: 4,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>PLAN</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/img/Book.png')}
              style={{
                tintColor: focused ? '#00E6E6' : '#808080',
                width: 24,
                height: 24,
                marginBottom: 4,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>BOOK</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
