import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FlightDetailsCard = ({
  departureTime,
  arrivalTime,
  departureCity,
  arrivalCity,
  departureAirport,
  arrivalAirport,
  departureTerminal,
  arrivalTerminal,
  duration,
  cabinBag,
  checkInBag,
}) => {
  return (
    <View style={styles.card}>
      {/* Flight Details Section */}
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.dateText}>Mon, 20 May</Text>
          <Text style={styles.timeText}>{departureTime}</Text>
          <Text style={styles.cityText}>{departureCity}</Text>
          <Text style={styles.airportText}>{departureAirport}</Text>
          <Text style={styles.terminalText}>Terminal {departureTerminal}</Text>
        </View>

        <View style={styles.middleColumn}>
          <Text style={styles.durationText}>{duration}</Text>
          <Image
            source={require('../assets/img/flightIcon.png')}
            style={styles.planeIcon}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.dateText}>Mon, 20 May</Text>
          <Text style={styles.timeText}>{arrivalTime}</Text>
          <Text style={styles.cityText}>{arrivalCity}</Text>
          <Text style={styles.airportText}>{arrivalAirport}</Text>
          <Text style={styles.terminalText}>Terminal {arrivalTerminal}</Text>
        </View>
      </View>

      {/* Baggage Section */}
      <View style={styles.baggageContainer}>
        <View style={styles.baggageItem}>
          <Image
            source={require('../assets/img/chartup.png')}
            style={styles.bagIcon}
          />
          <Text style={styles.baggageText}>{cabinBag}</Text>
        </View>
        <View style={styles.baggageItem}>
          <Image
            source={require('../assets/img/chartdown.png')}
            style={styles.bagIcon}
          />
          <Text style={styles.baggageText}>{checkInBag}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: wp('90%'),
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
    flex: 1,
  },
  middleColumn: {
    alignItems: 'center',
    flex: 1,
  },
  dateText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cityText: {
    color: '#00A8E8',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  airportText: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  terminalText: {
    color: '#888888',
    fontSize: 12,
  },
  durationText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 5,
  },
  planeIcon: {
    width: 24,
    height: 24,
    tintColor: '#00A8E8',
  },
  baggageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
  },
  baggageItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 5,
  },
  baggageText: {
    color: 'white',
    fontSize: 14,
  },
});

export default FlightDetailsCard;
