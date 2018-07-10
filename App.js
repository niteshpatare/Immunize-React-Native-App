import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container} className='container'>
        <Header/>
        <Body>
          <Text>Hi! body6
            <Icon
              name='arrow-right'
              size={15}
              color='red'
            />
          </Text>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 25,
  },
});
AppRegistry.registerComponent('App', () => App);
