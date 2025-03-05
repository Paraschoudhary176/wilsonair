import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FlightCard = () => {
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Departure Flight</Text>
        <TouchableOpacity style={styles.cancelButton}>
          <Image
            source={require('../assets/img/cancel.png')}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Location Info */}
      <View style={styles.locationContainer}>
        <Image
          source={require('../assets/img/location.png')}
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>New Delhi To Goa North</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Date Buttons */}
      <View style={styles.dateContainer}>
        <View style={styles.dateButton}>
          <Image
            source={require('../assets/img/chartdown.png')}
            style={styles.flightIcon}
          />
          <Text style={styles.dateText}>3rd October</Text>
        </View>
        <View
          style={[
            styles.dateButton,
            {
              left: wp(5),
            },
          ]}>
          <Image
            source={require('../assets/img/chartdown.png')}
            style={styles.flightIcon}
          />
          <Text style={styles.dateText}>Thursday</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
    top: wp(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cancelButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: '#FF0080', // Pink border
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelIcon: {
    width: 50,
    height: 50,
    tintColor: '#FF0080', // Pink cancel icon
    resizeMode: 'cover',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationIcon: {
    width: 25,
    height: 25,
    // tintColor: '#007AFF', // Blue location icon
    marginRight: 6,
    resizeMode: 'contain',
  },
  locationText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: '#F8F8F8',
  },
  flightIcon: {
    width: 16,
    height: 16,
    tintColor: '#000',
    marginRight: 6,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

export default FlightCard;
