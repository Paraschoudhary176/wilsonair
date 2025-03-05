import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CardDropdown = ({
  label = 'From',
  data = [
    { label: 'BLR - Bengaluru', value: 'BLR - Bengaluru' },
    { label: 'DEL - New Delhi', value: 'DEL - New Delhi' },
    { label: 'BOM - Mumbai', value: 'BOM - Mumbai' },
    { label: 'MAA - Chennai', value: 'MAA - Chennai' },
  ],
  defaultValue = 'BLR - Bengaluru',
  onSelect,
  cardStyle,
  labelStyle,
  selectedTextStyle,
  dropdownContainerStyle,
  fontFamily = 'System',
  fontSize = 16,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (value) => {
    if (value) {
      setSelectedValue(value);
      if (onSelect) onSelect(value); // Callback for parent
    }
  };

  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[styles.label, { fontFamily, fontSize: fontSize - 2 }, labelStyle]}>{label}</Text>
      
      <TouchableOpacity style={[styles.dropdownContainer, dropdownContainerStyle]}>
        {/* Selected Value Display */}
        <Text style={[styles.selectedText, { fontFamily, fontSize }, selectedTextStyle]}>
          {selectedValue}
        </Text>

        {/* Picker for Selection */}
        <RNPickerSelect
          onValueChange={handleChange}
          items={data}
          value={selectedValue}
          useNativeAndroidPickerStyle={false}
          style={{
            inputIOS: styles.hiddenInput,
            inputAndroid: styles.hiddenInput,
          }}
        />

        {/* Dropdown Arrow Image */}
        <Image
          source={require('../assets/img/down.png')}
          style={styles.arrowIcon}
        />
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
    opacity: 0, // Hide the picker input
  },
});

export default CardDropdown;
