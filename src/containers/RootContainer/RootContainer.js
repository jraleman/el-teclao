import React from 'react';
import KeyboardScreen from '../../screens/KeyboardScreen';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <KeyboardScreen />
      </React.Fragment>
    );
  }
}

export default RootContainer;
