import React, { Component } from 'react';
import Button from './Button'
class Header extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Button />
      </div>
    );
  }
}

export default Header;