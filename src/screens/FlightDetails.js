import {View, Text, StatusBar, ScrollView, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import FlightWhiteDetailCard from '../components/FlightWhiteDetailCard';
import FlightDetailsCard from '../components/FlightDetailsCard';

const FlightDetails = ({route}) => {
  const {flightDetails} = route.params || {};

  // Extracting necessary details safely using optional chaining
  const airline = flightDetails?.ValidatingAirline || 'Unknown Airline';
  const flightNumber = `${flightDetails?.AirlineCode || 'N/A'} - ${
    flightDetails?.ResultIndex || 'N/A'
  }`;

  const firstSegment = flightDetails?.Segments?.[0]?.[0] || {}; // Avoids accessing undefined indexes
  const departureCity =
    firstSegment?.Origin?.Airport?.CityName || 'Unknown City';
  const arrivalCity =
    firstSegment?.Destination?.Airport?.CityName || 'Unknown City';
  const departureTime = firstSegment?.DepTime?.split('T')?.[1] || '00:00';
  const arrivalTime = firstSegment?.ArrTime?.split('T')?.[1] || '00:00';
  const departureAirport =
    firstSegment?.Origin?.Airport?.AirportName || 'Unknown Airport';
  const arrivalAirport =
    firstSegment?.Destination?.Airport?.AirportName || 'Unknown Airport';
  const departureTerminal = firstSegment?.Origin?.Airport?.Terminal || 'N/A';
  const arrivalTerminal = firstSegment?.Destination?.Airport?.Terminal || 'N/A';
  const duration = firstSegment?.Duration
    ? `${firstSegment.Duration} min`
    : 'N/A';

  const price = `₹${flightDetails?.Fare?.BaseFare || 'N/A'}`;

  const departureCode = firstSegment?.Origin?.Airport?.AirportCode || 'N/A';
  const arrivalCode = firstSegment?.Destination?.Airport?.AirportCode || 'N/A';

  const cabinBag = '1 Cabin bag - 7kg';
  const checkInBag = '2 Check-in Bags - 23kg';

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor={'#000'} />
      <CustomHeader label="Flight Details" />

      {/* Flight Info Card */}
      <FlightWhiteDetailCard
        airline={airline}
        flightNumber={flightNumber}
        route={`${departureCity} to ${arrivalCity}`}
        travelClass="Economy"
        price={price}
        logo={require('../assets/img/airline.png')} // Replace with dynamic airline logos if available
      />

      {/* Flight Detailed Info */}
      <ScrollView style={{flex: 1, backgroundColor: '#121212', padding: 10}}>
        <FlightDetailsCard
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          departureCity={`${departureCity} (${departureCode})`}
          arrivalCity={`${arrivalCity} (${arrivalCode})`}
          departureAirport={departureAirport}
          arrivalAirport={arrivalAirport}
          departureTerminal={departureTerminal}
          arrivalTerminal={arrivalTerminal}
          duration={duration}
          cabinBag={cabinBag}
          checkInBag={checkInBag}
        />
      </ScrollView>
    </View>
  );
};

export default FlightDetails;
