import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/Navigation/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
