import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WishScreen from '../screens/WishScreen';
import FindScreen from '../screens/FindScreen';
import BooboAi from '../screens/BooboAi';
import Plan from '../screens/Plan';
import BookStackNavigator from './BookStackNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Automatically navigate to the "Book" tab on app load
    navigation.navigate('Book');
  }, []);

  // Function to show an alert when clicking on disabled tabs
  const showComingSoonAlert = () => {
    Alert.alert('Coming Soon', 'This feature will be available in future updates.');
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          height: 64,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        },
      }}
    >
      {/* Disabled Tabs with Alert */}
      {[
        { name: 'Wish', component: WishScreen, icon: require('../assets/img/wish.png') },
        { name: 'Find', component: FindScreen, icon: require('../assets/img/Find.png') },
        { name: 'Bobo AI', component: BooboAi, icon: require('../assets/img/Bobo.png') },
        { name: 'Plan', component: Plan, icon: require('../assets/img/Plan.png') },
      ].map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={() => null} // Prevent navigation
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); // Prevent default navigation
              showComingSoonAlert();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={tab.icon}
                style={{
                  tintColor: focused ? '#00E6E6' : '#808080',
                  width: 24,
                  height: 24,
                  marginBottom: 4,
                }}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#00E6E6' : '#808080', fontSize: 12 }}>{tab.name.toUpperCase()}</Text>
            ),
          }}
        />
      ))}

      {/* Enabled "Book" Tab */}
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
