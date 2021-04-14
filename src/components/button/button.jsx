import React from 'react';

class Button extends React.Component {
  render() {
    return <button className="button button--cart">{this.props.text}</button>;
  }
}

export default Button;
