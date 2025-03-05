import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const DatePickerCard = ({ label, selectedDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
      });
      onDateChange(formattedDate);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropdownContainer} onPress={() => setShowPicker(true)}>
        <Text style={styles.selectedText}>{selectedDate}</Text>
        <Image source={require('../assets/img/calander.png')} style={styles.calendarIcon} />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={handleDateChange} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#444',
    paddingVertical: 10,
  },
  selectedText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: '#ccc',
    resizeMode: 'contain',
  },
});

export default DatePickerCard;
