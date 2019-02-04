import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    console.log('Email and Password:', email, password);

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => this.onLoginSuccess())
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => this.onLoginSuccess())
              .catch((error) => {
                console.log('Error Authenticate: ', error);
                this.onLoginFail();
              });
        });
  }

  onLoginFail() {
    console.log('loginFailed called');
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    console.log('loginSuccess called');
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
        <Button data={{ openURL: () => this.onButtonPress(), text: 'Log in' }} />
    );
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
                placeholder="your-email@domain.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}
// <Button onPress={this.onButtonPress.bind(this)} title='Log in' />
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
