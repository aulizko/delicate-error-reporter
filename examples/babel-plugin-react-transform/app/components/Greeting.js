import React, { Component, PropTypes } from 'react';

export default class Greeting extends Component {
  static displayName = 'Greeting';
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <h1>Hello, { this.props.name }!</h1>
    );
  }
}
