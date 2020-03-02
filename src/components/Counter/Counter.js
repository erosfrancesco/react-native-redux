import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import style from './Style';

export default class Counter extends Component {
  increment() {
    this.props.increment();
  }
  decrement() {
    this.props.decrement();
  }

  render() {
    return (
      <>
        <Button title="+" onPress={() => this.increment()} />
        <Text style={style.normalText}> {this.props.count} </Text>
        <Button title="_" onPress={() => this.decrement()} />
      </>
    );
  }
}
