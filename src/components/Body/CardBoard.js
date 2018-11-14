import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card'
import { getCards } from '../../actions/index'
class CardBoard extends Component {
  render() {
    return (
      <div 
        style={{
        display:'grid',
        gridTemplateColumns : 'auto auto auto auto',
        backgroundColor: '#000',
        margin: 5
      }}>
        {this.props.data.length>0?
          this.props.data.map((item,index)=>(
            <Card key={index} data={item}/>
          )) 
        :
          <button style={{position:'absolute'}} onClick={this.props.getCards}>카드 받아오기</button>
        }
      </div>
    );
  }
}

let mapStateToProps = (state)=>{
  return{
    data: state.data
  }
} 
let mapDispatchToProps = (dispatch)=>{
  return {
    getCards : ()=>{
      dispatch(getCards())
    }
  }
}
CardBoard = connect(mapStateToProps, mapDispatchToProps)(CardBoard);

export default CardBoard;