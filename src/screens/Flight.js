import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import FlightCard from '../components/FlightCard';
import FilterButtons from '../components/FilterButtons';
import FlightCards from '../components/FlightCards';

const Flight = ({navigation, route}) => {
  const {flightData} = route.params;

  // Ensure flightData has results
  if (!flightData || !flightData.Response || !flightData.Response.Results) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>No Flights Available</Text>
      </View>
    );
  }

  const flights = flightData.Response.Results[0]; // Get the list of flights

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <CustomHeader label="Change Flight" />
      <FlightCard />
      <FilterButtons />

      <ScrollView>
        {flights.map((flight, index) => {
          const segment = flight.Segments[0][0];
          const fare = flight.Fare;
          return (
            <FlightCards
              key={index}
              airline={flight.ValidatingAirline}
              classType="Economy Class"
              departureTime={segment.DepTime?.split('T')[1]}
              arrivalTime={segment.ArrTime?.split('T')[1]}
              duration={segment.Duration + ' min'}
              departureCity={segment.Origin.Airport.CityName}
              arrivalCity={segment.Destination.Airport.CityName}
              price={`₹${fare.BaseFare}`}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Flight;
