import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ClassDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('Economy & 2 Adults');

  const options = [
    { label: 'Economy & 1 Adult', value: 'Economy & 1 Adult' },
    { label: 'Economy & 2 Adults', value: 'Economy & 2 Adults' },
    { label: 'Business & 1 Adult', value: 'Business & 1 Adult' },
    { label: 'Business & 2 Adults', value: 'Business & 2 Adults' },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Class & Travellers</Text>
      <TouchableOpacity style={styles.dropdownContainer}>
        <Text style={styles.selectedText}>{selectedValue}</Text>
        <RNPickerSelect
          onValueChange={(value) => value && setSelectedValue(value)}
          items={options}
          value={selectedValue}
          useNativeAndroidPickerStyle={false}
          style={{ inputIOS: styles.hiddenInput, inputAndroid: styles.hiddenInput }}
        />
        <Image source={require('../assets/img/down.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
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
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#ccc',
    resizeMode: 'contain',
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0, 
  },
});

export default ClassDropdown;
