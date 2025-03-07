import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ title, data, highlightIndex }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.row,
            index === highlightIndex ? styles.highlightRow : {},
          ]}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={[styles.value, index === highlightIndex && styles.highlightValue]}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    color: '#bbb',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 14,
  },
  highlightRow: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginTop: 5,
    paddingTop: 5,
  },
  highlightValue: {
    color: '#00E6E6',
    fontWeight: 'bold',
  },
});

export default InfoCard;