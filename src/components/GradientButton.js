import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonContainer, style]}>
      <LinearGradient colors={['#1caedc', '#10e0f9']} style={styles.button}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton;
