import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const FilterButtons = () => {
  return (
    <View style={styles.container}>
      {/* Filter Text Buttons */}
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.buttonText}>cheapest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.buttonText}>fastest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.buttonText}>non stop</Text>
      </TouchableOpacity>

      {/* Sort & Filter Icons */}
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/img/fione.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/img/fitwo.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: widthPercentageToDP(10),
    marginHorizontal: widthPercentageToDP(3),
  },
  filterButton: {
    backgroundColor: '#1C1C1E', // Dark button background
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    // borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: '#FFF',
    resizeMode: 'contain',
  },
});

export default FilterButtons;
