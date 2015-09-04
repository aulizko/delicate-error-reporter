import React, { Component, PropTypes } from 'react';
import ErrorStackParser from 'error-stack-parser';
import j2c from 'j2c';

const styles = j2c.scoped({
  container: {
    'box-sizing': 'border-box',
    'font-family': 'sans-serif',
    'font-size': '1em',
    'position': 'fixed',
    'padding': '10px',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'width': '100%',
    'background': 'rgb(0 0 204)',
    'color': 'white'
  },
  message: {
    'font-weight': 'bold'
  },
  stack: {
    'font-family': 'monospace',
    'margin-top': '2em'
  },
  'frame': {
    'margin-top': '1em'
  },
  'file': {
    'font-size': '0.8em',
    'color': 'rgba(255, 255, 255, 0.7)'
  },
  fileLink: {
    'text-decoration': 'none',
    'color': 'rgba(255, 255, 255, 0.7)'
  }
});

class DelicateErrorReporter extends Component {
  static displayName = 'DelicateErrorReporter';

  static propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
  };

  render() {
    const { error } = this.props;

    const frames = ErrorStackParser.parse(error).map((f, key) => {
      const link = `${f.fileName}:${f.lineNumber}:${f.columnNumber}`;

      return (
        <div className="frame" key={ key }>
          <div>{ f.functionName }</div>
          <div className={ styles.file }>
            <a href={ link } className={ styles.fileLink }>{ link }</a>
          </div>
        </div>
      )
    });

    return (
      <div>
        <style>{styles.valueOf()}</style>
        <div className={ styles.container }>
          <div className={ styles.message }>{ error.name }: { error.message }</div>
          <div className={ styles.stack }>{ frames }</div>
        </div>
      </div>
    )
  }
}

export default DelicateErrorReporter;
