import React, { Component, PropTypes } from 'react';
import ErrorStackParser from 'error-stack-parser';
import j2c from 'j2c';

const styles = j2c.scoped({
  'flag': {
    'position': 'fixed',
    'font-size': '16px',
    'bottom': '10px',
    'right': '10px',
    'display': 'inline-block',
    'width': '3em',
    'height': '2.5em',
    'cursor': 'pointer',
    'text-align': 'center',
    'padding-top': '0.5em',
    'border-radius': '0.2em',
    'background-color': '#CC0000',
    'color': '#FFCC99',

    ':hover': {
      'background-color': '#CC3300',
      'color': 'white'
    }
  },
  'flagContent': {
    'font-size': '2em'
  },
  'container': {
    'box-sizing': 'border-box',
    'font-family': 'sans-serif',
    'font-size': '16px',
    'position': 'fixed',
    'padding': '10px',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'width': '100%',
    'background': 'white',
    'color': '#333',
    'border': '10px solid #FF9966',
    'overflow-y': 'auto'
  },
  'hidden': {
    'display': 'none'
  },
  'message': {
    'font-weight': 'bold',
    'color': '#CC0000',
    'position': 'relative'
  },
  'line': {
    'border': '0',
    'background-color': '#CC0000',
    'height': '1px',
    'margin': '1em 0'
  },
  'stack': {
    'font-family': 'monospace'
  },
  'frame': {
    'margin-top': '1em'
  },
  'file': {
    'font-size': '0.8em',
    'color': '#aeaeae'
  },
  'fileLink': {
    'text-decoration': 'none',
    'color': '#aeaeae',

    ':hover': {
      'text-decoration': 'underline'
    }
  },
  'closeButton': {
    'position': 'absolute',
    'top': '0',
    'right': '0',
    'display': 'inline-block',
    'text-decoration': 'none',
    'color': '#CC0000',

    ':hover': {
      'text-decoration': 'none',
      'color': '#CC4400'
    }
  }
});

class DelicateErrorReporter extends Component {
  static displayName = 'DelicateErrorReporter';

  static propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      beQuiet: true // means to be small and not to disturb the user
    };
  }

  changeBehavior() {
    this.setState({
      beQuiet: !this.state.beQuiet
    });
  }

  render() {
    const { error } = this.props;

    const frames = ErrorStackParser.parse(error).map((f, key) => {
      const link = `${ f.fileName }:${ f.lineNumber }:${ f.columnNumber }`;

      return (
        <div className={ styles.frame } key={ key }>
          <div>{ f.functionName }</div>
          <div className={ styles.file }>
            <a href={ link } className={ styles.fileLink }>{ link }</a>
          </div>
        </div>
      )
    });

    return (
      <div>
        <style>{ styles.valueOf() }</style>
        <div
            className={ this.state.beQuiet ? styles.flag : styles.hidden }
            onClick={() => { this.changeBehavior() }}>

          <span className={ styles.flagContent }>!</span>
        </div>
        <div className={ this.state.beQuiet ? styles.hidden : styles.container }>
          <h1 className={ styles.message }>
            { error.name }: { error.message }
            <a
              href="#"
              onClick={ () => { this.changeBehavior() } }
              className={ styles.closeButton }
              dangerouslySetInnerHTML={ { __html: '&times;' } } />
          </h1>
          <hr className={ styles.line } />
          <div className={ styles.stack }>{ frames }</div>
        </div>
      </div>
    )
  }
}

export default DelicateErrorReporter;
