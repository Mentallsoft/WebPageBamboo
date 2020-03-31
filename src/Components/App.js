import React from 'react';
import PropTypes from 'prop-types';
import Content from "./Content"

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
        <Content body={children} />
    )
  }
}

export default App;
