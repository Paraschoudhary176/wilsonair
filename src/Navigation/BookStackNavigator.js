import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Booking from '../screens/Booking';

const Stack = createStackNavigator();

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;
