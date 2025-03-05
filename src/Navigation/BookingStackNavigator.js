import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Booking from '../screens/Booking';

const Stack = createStackNavigator();

const BookingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Booking" component={Booking} />
{/* 
      <Stack.Screen
        name="QuickEnquiry"
        component={QuickEnquiry}
        options={{
          tabBarStyle: { display: 'none' }, // Hides the bottom tab bar
          headerShown: false, // Adjust this as per your header needs
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;
