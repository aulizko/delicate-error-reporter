import React, { Component } from 'react';

export default class Content extends Component {
  static displayName = 'Content';

  render() {
    return <div>{this.props()}</div>;
  }
}
