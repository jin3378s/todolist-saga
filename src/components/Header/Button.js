import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeCard } from '../../actions/index'
class Button extends Component {
  state={
    title:'',
    work:'',
    assignBy:'',
    assignTo:'',
  }
  render() {
    return (
      <div>
        <div>
          <span>제목:</span>
          <input placeholder='제목' onChange={(e)=>{
            this.setState({title: e.target.value})}} />
        </div>
        <span>
          <span>할일:</span>
          <textarea placeholder='할일' onChange={(e)=>{this.setState({work:e.target.value})}} />
        </span>
        <span>
          <span>할당자:</span>
          <input placeholder='할당자' onChange={(e)=>{this.setState({assignBy:e.target.value})}} />
        </span>
        <span>
          <span>피할당자:</span>
          <input placeholder='피할당자' onChange={(e)=>{this.setState({assignTo:e.target.value})}} />
        </span>
        <button  onClick={()=>{this.props.makeCard(this.state)}}>추가</button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    makeCard: (value)=>{dispatch(makeCard(value))}
  }
}
Button = connect(null, mapDispatchToProps)(Button);
export default Button;