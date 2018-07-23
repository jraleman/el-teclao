import React from 'react';
import KeyboardComponent from '../../components/KeyboardComponent';

class KeyboardScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <div>
        <KeyboardComponent />
      </div>
    );
  }
}

export default KeyboardScreen;
