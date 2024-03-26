import React from 'react';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import {
  StatusBar,
  View,
} from 'react-native';
import { styles } from './config/theme/app-theme';

function App() {
  return (
    <View style={ styles.background }>
      <StatusBar
        barStyle={ 'light-content' }
        backgroundColor={ 'black' }
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
