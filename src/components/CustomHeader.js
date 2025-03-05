import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fontFamily } from '../utils/Fonts';

const CustomHeader = ({ label = 'Header' }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/img/backArrow.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Dark background
    height: 50,
    paddingHorizontal: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#D3D3D3',
  },
  backButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: '#FFF',
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
    textTransform: 'capitalize',
    fontFamily: fontFamily.GothamBold,
  },
});

export default CustomHeader;
