import * as React from 'react';
import { Button, View, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';


export default class App extends React.Component {
  render() {
    return (
    <View>
    <WelcomeScreen/>
    </View>
       
    );
  }
}