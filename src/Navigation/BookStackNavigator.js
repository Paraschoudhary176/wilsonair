import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Booking from '../screens/Booking';
import Flight from '../screens/Flight';
import FlightDetails from '../screens/FlightDetails';

const Stack = createStackNavigator();

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Flight" component={Flight} />
      <Stack.Screen name="FlightDetails" component={FlightDetails} />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;
