import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import CardDropdown from '../components/CardDropdown';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ClassDropdown from '../components/ClassDropdown';
import DatePickerCard from '../components/DatePickerCard';
import GradientButton from '../components/GradientButton';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('13th Jun, 22');

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
        <GradientButton
          title="SEARCH NOW"
          onPress={() => console.log('Button Pressed')}
        />
      </View>
    </View>
  );
};

export default Booking;
