import {View, Text, StatusBar, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import CardDropdown from '../components/CardDropdown';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ClassDropdown from '../components/ClassDropdown';
import DatePickerCard from '../components/DatePickerCard';
import GradientButton from '../components/GradientButton';

const Booking = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearchFlights = async () => {
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a departure date');
      return;
    }

    // Format date to match API format "YYYY-MM-DDT00:00:00"
    const formattedDate = `${selectedDate}T00:00:00`;


    console.log(formattedDate ,'formattedDate =>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    const requestBody = {
      EndUserIp: '192.168.5.56',
      TokenId: '45a8f38d-f200-46aa-875b-c9866b6619cb',
      AdultCount: 2,
      ChildCount: 1,
      InfantCount: 0,
      DirectFlight: false,
      OneStopFlight: false,
      JourneyType: '1',
      PreferredAirlines: null,
      Segments: [
        {
          Origin: 'BOM',
          Destination: 'DXB',
          FlightCabinClass: '1',
          PreferredDepartureTime: formattedDate,
          PreferredArrivalTime: formattedDate,
        },
      ],
      Sources: null,
    };

    console.log('Sending API request:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(
        'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        },
      );

      const data = await response.json();
      console.log('API Response:', data);

      if (data) {
        Alert.alert('Success', 'Flights fetched successfully!');
        navigation.navigate('Flight', {flightData: data});
      } else {
        Alert.alert('Error', 'No flights found.');
      }
    } catch (error) {
      console.error('Error fetching flights:', error);
      Alert.alert('Error', 'Failed to fetch flights.');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingHorizontal: wp(0)}}>
      <StatusBar backgroundColor={'#000'} />
      <Header />

      {/* From Dropdown */}
      <View style={{marginTop: wp(5)}}>
        <CardDropdown label="From" defaultValue="BLR - Bengaluru" />
      </View>

      {/* To Dropdown */}
      <View style={{marginTop: wp(5)}}>
        <CardDropdown label="To" defaultValue="DEL - New Delhi" />
      </View>

      {/* Class & Travelers Dropdown */}
      <View style={{marginTop: wp(5)}}>
        <ClassDropdown />
      </View>

      {/* Departure Date Picker */}
      <View style={{marginTop: wp(5)}}>
        <DatePickerCard
          label="Departure"
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </View>

      <View style={{marginTop: 40}}>
        <GradientButton title="SEARCH NOW" onPress={handleSearchFlights} />
      </View>
    </View>
  );
};

export default Booking;
