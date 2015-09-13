import React, { Component, PropTypes } from 'react';
import ErrorStackParser from 'error-stack-parser';

import styles from './styles';

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

  renderFrames() {
    console.log('error', this.props.error);
    console.log('parsed error', ErrorStackParser.parse(this.props.error));
    return ErrorStackParser.parse(this.props.error).map((f) => {
      const link = `${ f.fileName }:${ f.lineNumber }:${ f.columnNumber }`;

      return (
        <div className={ styles.frame }>
          <div>{ f.functionName }</div>
          <div className={ styles.file }>
            <a href={ link } className={ styles.fileLink }>{ link }</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <style>{ styles.valueOf() }</style>
        <div
            className={ this.state.beQuiet ? styles.flag : styles.hidden }
            onClick={ ::this.changeBehavior }>

          <span className={ styles.flagContent }>!</span>
        </div>
        <div className={ this.state.beQuiet ?
					styles.hidden :
					styles.container }>
          <a
            href="#"
            onClick={ ::this.changeBehavior }
            className={ styles.closeButton }
            dangerouslySetInnerHTML={ { __html: '&times;' } } />
          <h1 className={ styles.message }>
            { this.props.error.name }: { this.props.error.message }
          </h1>
          <hr className={ styles.line } />
          <div className={ styles.stack }>{ this.renderFrames() }</div>
        </div>
      </div>
    );
  }
}

export default DelicateErrorReporter;
