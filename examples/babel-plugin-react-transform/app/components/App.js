import React, { Component } from 'react';

import Greeting from './Greeting';
import Content from './Content';

export default class App extends Component {
  render () {
    return (
      <div>
        <Greeting name={ 'React Transform' }/>
        <Content />
      </div>
    );
  }
}
