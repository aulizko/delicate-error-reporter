import React, { Component, PropTypes } from 'react';
import ErrorStackParser from 'error-stack-parser';
import Classy from 'react-classy';

@Classy
class DelicateErrorReporter extends Component {
  static displayName = 'DelicateErrorReporter';

  static propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
  };

  static style = `
    .redbox {
      box-sizing: border-box;
      font-family: sans-serif;
      font-size: 1em;
      position: fixed;
      padding: 10px;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgb(0 0 204);
      color: white;
    }

    .message {
      font-weight: bold;
    }

    .stack {
      font-family: monospace;
      margin-top: 2em;
    }

    .frame {
      margin-top: 1em;
    }

    .file {
      font-size: 0.8em;
      color: #ffffff;
      color: rgba(255, 255, 255, 0.7);
    }

    .fileLink {
      text-decoration: none;
      color: #ffffff;
      color: rgba(255, 255, 255, 0.7);
    }
  `;

  render() {
    const { error } = this.props;

    const frames = ErrorStackParser.parse(error).map((f, key) => {
      const link = `${f.fileName}:${f.lineNumber}:${f.columnNumber}`;

      return (
        <div className="frame" key={ key }>
          <div>{ f.functionName }</div>
          <div className="file">
            <a href={ link } className="fileLink">{ link }</a>
          </div>
        </div>
      )
    });

    return (
      <div className="redbox">
        <div className="message">{ error.name }: { error.message }</div>
        <div className="stack">{ frames }</div>
      </div>
    )
  }
}

export default DelicateErrorReporter;
