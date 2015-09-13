import j2c from 'j2c';

export default j2c.scoped({
  'flag': {
    'z-index': '9999',
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
    'overflow-y': 'auto',
    'z-index': '9999'
  },
  'hidden': {
    'display': 'none'
  },
  'message': {
    'font-weight': 'bold',
    'color': '#CC0000'
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
    'position': 'fixed',
    'top': '1em',
    'right': '1em',
    'display': 'inline-block',
    'text-decoration': 'none',
    'color': '#CC0000',
    'font-size': '2em',
    'font-weight': 'bold',

    ':hover': {
      'text-decoration': 'none',
      'color': '#CC4400'
    }
  }
}, [
  'moz',
  'webkit',
  'o',
  'ms'
]);
