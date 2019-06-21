import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            secureTextEntry={false}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder={'password'}
            label={'password'}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export { LoginForm };
