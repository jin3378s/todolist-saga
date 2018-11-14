import axios from 'axios';

export const MAKE_CARD = 'MAKE_CARD';
export const GET_CARD = 'GET_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';
export const GET_CARD_FAILURE = 'GET_CARD_FAILURE';

export function makeCard (data){
  return { 
    type : MAKE_CARD,
    data : data
  }
}

export function getCards (){
  console.log('1번')
  return {
    type: GET_CARD
  }
}

export function getCardsSuccess (data){
  //get cards가 성공적으로 진행 되었으므로 인자로 data를 받아서 action에 셋팅
  console.log('4번')
  return {
    type: GET_CARD_SUCCESS,
    data
  }
}

export function getCardsFailure (){
  return {
    type: GET_CARD_FAILURE
  }
}