
import { GET_CARD, MAKE_CARD, GET_CARD_SUCCESS } from '../actions/index';

const initialState = {
  data : [],
}

const toDoList =  (state = initialState, action) =>{
  switch(action.type){
    case MAKE_CARD : 
      const makeCard = state.data.concat([action.data]);
      return Object.assign({},state,{
        data: makeCard
      });
    case GET_CARD_SUCCESS :
      // action에서 넣어준 data를 가지고 state setting
      console.log('5번');
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
};

export default toDoList;