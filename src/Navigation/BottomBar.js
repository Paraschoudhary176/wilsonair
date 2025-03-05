import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BottomBar = ({ state, descriptors, navigation }) => {
  const TabArr = [
    { route: 'Wish', label: 'WISH', img: require('../assets/img/wish.png') },
    { route: 'Find', label: 'FIND', img: require('../assets/img/Find.png') },
    { route: 'BoboAI', label: 'BOBO AI', img: require('../assets/img/Bobo.png') },
    { route: 'Plan', label: 'PLAN', img: require('../assets/img/Plan.png') },
    { route: 'Book', label: 'BOOK', img: require('../assets/img/Book.png') },
  ];

  return (
    <View style={styles.container}>
      {TabArr.map((tab, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tab.route)}
            style={styles.tabButton}
          >
            <Image
              source={tab.img}
              style={[
                styles.icon,
                { tintColor: isFocused ? '#00c6ff' : '#888' },
              ]}
            />
            <Text
              style={[
                styles.label,
                { color: isFocused ? '#00c6ff' : '#888' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#111',
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  tabButton: {
    alignItems: 'center',
  },
  icon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  label: {
    fontSize: wp(3),
    marginTop: 2,
  },
});

export default BottomBar;
