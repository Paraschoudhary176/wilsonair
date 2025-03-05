import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import FlightCard from '../components/FlightCard';
import FilterButtons from '../components/FilterButtons';
import FlightCards from '../components/FlightCards';

const Flight = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <CustomHeader />

      <FlightCard />

      <FilterButtons />

      <ScrollView>
        <FlightCards
          airline="Air India"
          classType="Economy Class"
          departureTime="07:55"
          arrivalTime="10:20"
          duration="2H 55M"
          departureCity="New Delhi"
          arrivalCity="Goa (North)"
          price="2,340"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Flight;
