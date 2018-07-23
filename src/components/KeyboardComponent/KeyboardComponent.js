import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { extendedKeyboard } from 'react-material-ui-keyboard/layouts';

class KeyboardComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };
    this.onInput = this.handleInput.bind(this);
    return ;
  }
  handleInput (input) {
    this.setState({ value: input });
    return ;
  }
  render () {
    return (
      <Keyboard
        automatic
        onInput={this.onInput}
        layouts={[extendedKeyboard]}
        textField={
          <TextField
            id="text"
            value={this.state.value}
          />
        }
      />
    );
  }
};

export default KeyboardComponent;
