import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {fontFamily} from '../utils/Fonts';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Header = () => {
  const [selected, setSelected] = useState('flight');

  const options = [
    {key: 'stay', label: 'Stay', image: require('../assets/img/Stay.png')},
    {
      key: 'flight',
      label: 'Flight',
      image: require('../assets/img/Flight.png'),
    },
    {key: 'bus', label: 'Bus', image: require('../assets/img/bus.png')},
    {key: 'train', label: 'Train', image: require('../assets/img/train.png')},
  ];

  return (
    <View style={styles.header}>
      <View style={styles.locationContainer}>
        <Image
          source={require('../assets/img/Profile.png')}
          style={styles.profileIcon}
        />
        <Text style={styles.locationText}>Gaya, India</Text>
        <Image
          source={require('../assets/img/History.png')}
          style={styles.historyIcon}
        />
      </View>

      <View style={styles.optionsContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              selected === option.key && styles.selectedOption,
            ]}
            onPress={() => setSelected(option.key)}>
            <Image source={option.image} style={styles.optionImage} />
            <Text
              style={[
                styles.optionText,
                selected === option.key && styles.selectedText,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.GothamBlack,
    left: wp(-25),

  },
  historyIcon: {
    width: 25,
    height: 25,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    right: 3,
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    height: wp(18),
    width: wp(22),
    marginHorizontal: wp(1.4),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  selectedOption: {
    backgroundColor: '#007AFF',
  },
  optionImage: {
    width: 40,
    height: 35,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  optionText: {
    color: '#777',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
