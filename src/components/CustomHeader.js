import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../utils/Fonts';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image
          source={require('../assets/img/backArrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Change flight</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Dark background
    height: 50, // Adjust height if needed
    paddingHorizontal: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#D3D3D3'
  },
  backButton: {
    padding: 8,
    borderColor: '#FFF', // White border
    alignItems: 'center',
    justifyContent: 'center',
    // width: 30,
    // height: 30,
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: '#FFF', // White arrow
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
    textTransform: 'capitalize', // Ensure text format matches the image
    fontFamily: fontFamily.GothamBold,
  },
});

export default CustomHeader;
