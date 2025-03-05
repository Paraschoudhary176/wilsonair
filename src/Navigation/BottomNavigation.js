import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomBar from './BottomBar';
import WishScreen from '../screens/WishScreen';
import FindScreen from '../screens/FindScreen';
import BooboAi from '../screens/BooboAi';
import Plan from '../screens/Plan';
import Booking from '../screens/Booking';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Wish" component={WishScreen} />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="BoboAI" component={BooboAi} />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Book" component={Booking} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
