import React, {Component} from 'react';
import {Text} from 'react-native';
import style from './Style';

export default class Ghibli extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const list =
      this.props.species && this.props.species.length ? (
        this.props.species.map((specie, i) => {
          return (
            <Text style={style.normalText} key={i}>
              {specie.name}
            </Text>
          );
        })
      ) : (
        <Text />
      );

    const mex =
      this.props.species && this.props.species.length ? (
        <Text style={style.success}>Success</Text>
      ) : (
        <Text style={style.normalText}>Fetching...</Text>
      );

    return (
      <>
        <Text style={style.title}> Ghibli Species: </Text>
        {mex}
        {list}
      </>
    );
  }
}
