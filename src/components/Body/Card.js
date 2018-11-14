import React, { Component } from 'react';

class Card extends Component {

  state = {}
  
  render() {
    const { title, work, assignTo, assignBy } = this.props.data
    return (
      <div style={{
        padding: 5,
        backgroundColor: 'grey',

        }}>
        <h2>제목 :{title}</h2>
        <h3>할일 :{work}</h3>
        <div>{assignBy}가 {assignTo}에게 할당함</div>
      </div>
    );
  }
}

export default Card;