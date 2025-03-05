import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import FlightWhiteDetailCard from '../components/FlightWhiteDetailCard';
import FlightDetailsCard from '../components/FlightDetailsCard';

const FlightDetails = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor={'#000'} />
      <CustomHeader label="Flight Details" />

      <FlightWhiteDetailCard
        airline="Indigo"
        flightNumber="QP - 1355"
        route="New Delhi to Bengaluru"
        travelClass="Economy"
        price="2,170"
        logo={require('../assets/img/airline.png')}></FlightWhiteDetailCard>

      <ScrollView style={{flex: 1, backgroundColor: '#121212', padding: 10}}>
        <FlightDetailsCard
          departureTime="07:55"
          arrivalTime="10:20"
          departureCity="DEL - New Delhi"
          arrivalCity="BOM - Mumbai"
          departureAirport="Indira Gandhi International Airport"
          arrivalAirport="Chhatrapati Shivaji International Airport"
          departureTerminal="1"
          arrivalTerminal="2"
          duration="2H 55M"
          cabinBag="1 Cabin bag - 7kg"
          checkInBag="2 Check-in Bags - 23kg"
        />
      </ScrollView>
    </View>
  );
};

export default FlightDetails;
