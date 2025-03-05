import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import FlightCard from '../components/FlightCard';
import FilterButtons from '../components/FilterButtons';

const Flight = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <CustomHeader />

      <FlightCard />

      <FilterButtons />
    </View>
  );
};

export default Flight;
