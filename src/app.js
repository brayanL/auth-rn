/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlA8zy_vjCCL1cfAM-90YaEFCHMv0sArA',
      authDomain: 'auth-c4ced.firebaseapp.com',
      databaseURL: 'https://auth-c4ced.firebaseio.com',
      projectId: 'auth-c4ced',
      storageBucket: 'auth-c4ced.appspot.com',
      messagingSenderId: '105800616443'
    });

    // Check the login state
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <CardSection>
              <Button data={{ openURL: () => firebase.auth().signOut(), text: 'Log out' }} />
            </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
            <Spinner />
        );
    }
  }

  render() {
    return (
        <View>
          <Header headerText='Authentication' />
          {this.renderContent()}
        </View>
    );
  }
}

const styles = {
  centerElementsStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  }
};

export default App;
