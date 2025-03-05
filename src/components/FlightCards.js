import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FlightCards = ({
  airline,
  classType,
  departureTime,
  arrivalTime,
  duration,
  departureCity,
  arrivalCity,
  price,
  navigation,
}) => {
  return (
    <View style={styles.card}>
      {/* Airline Info */}
      <View style={styles.header}>
        <Image source={require('../assets/img/airline.png')} style={styles.airlineLogo} />
        <View>
          <Text style={styles.airlineName}>{airline}</Text>
          <Text style={styles.classType}>{classType}</Text>
        </View>
        <TouchableOpacity style={styles.circleButton} />
      </View>

      {/* Flight Timing */}
      <View style={styles.flightInfo}>
        <Text style={styles.time}>{departureTime}</Text>
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>{duration}</Text>
          <Image source={require('../assets/img/flightIcon.png')} style={styles.flightIcon} />
        </View>
        <Text style={styles.time}>{arrivalTime}</Text>
      </View>

      {/* Locations */}
      <View style={styles.locationContainer}>
        <Text style={styles.city}>{departureCity}</Text>
        <Text style={styles.city}>{arrivalCity}</Text>
      </View>

      {/* Luggage Info */}
      <View style={styles.luggageContainer}>
        <View style={styles.luggageItem}>
          <Image source={require('../assets/img/chartup.png')} style={styles.bagIcon} />
          <Text style={styles.luggageText}>1 Cabin bag - 7kg</Text>
        </View>
        <View style={styles.luggageItem}>
          <Image source={require('../assets/img/chartdown.png')} style={styles.bagIcon} />
          <Text style={styles.luggageText}>2 Check-in Bags 23kg</Text>
        </View>
      </View>

      {/* Price & Details Button */}
      <View style={styles.footer}>
        <Text style={styles.price}>₹{price}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FlightDetails')}>
          <Text style={styles.detailsButton}>FLIGHT DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  airlineLogo: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  airlineName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  classType: {
    color: '#A1A1A1',
    fontSize: 14,
  },
  circleButton: {
    marginLeft: 'auto',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#666',
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  durationContainer: {
    alignItems: 'center',
  },
  duration: {
    color: '#A1A1A1',
    fontSize: 12,
    marginBottom: 2,
  },
  flightIcon: {
    width: 20,
    height: 20,
    tintColor: '#00E6E6',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  city: {
    color: '#A1A1A1',
    fontSize: 14,
  },
  luggageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  luggageItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    tintColor: '#A1A1A1',
  },
  luggageText: {
    color: '#A1A1A1',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsButton: {
    color: '#00E6E6',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FlightCards;
