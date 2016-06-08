
import React from 'react';

export default class Sample extends React.Component {
  state = {
    magic: false,
  }

  render() {
    return (
      <div>
        <h3 className="magical" onClick={this.props.clickHandler}>hola</h3>
      </div>
    );
  }
}
