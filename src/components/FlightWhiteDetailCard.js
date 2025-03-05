import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FlightWhiteDetailCard = ({
  airline,
  flightNumber,
  route,
  travelClass,
  price,
  logo,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.airline}>{airline}</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.flightNumber}>{flightNumber}</Text>
      <View style={styles.routeContainer}>
        <Image
          source={require('../assets/img/location.png')}
          style={styles.icon}
        />
        <Text style={styles.route}>{route}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tag}>
          <Image
            source={require('../assets/img/chartup.png')}
            style={[
              styles.flightIcon,
              {
                height: 15,
                width: 15,
                tintColor: '#000',
                top: 2,
                right: 3,
              },
            ]}
          />
          <Text style={styles.tagText}>{travelClass}</Text>
        </View>
        <View style={styles.priceTag}>
          <Text style={styles.price}>+ ₹{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: wp(90),
    alignSelf: 'center',
    marginVertical: 10,
    top: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  airline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  flightNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  route: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  tagText: {
    fontSize: 14,
    color: '#000',
  },
  priceTag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default FlightWhiteDetailCard;
