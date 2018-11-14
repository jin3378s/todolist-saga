import { all } from 'redux-saga/effects';
import { takeLatest,  call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CARD, getCardsSuccess, getCardsFailure } from '../actions'

function* getCards () {
  try{
    //비동기 처리 해서 데이터 받아와서 넘겨주는거 담당
    console.log('2번')
    const res = yield call(doGetCards);
    //문제가 없다면 action에 정의한 getCardsSuccess 실행
    yield put(getCardsSuccess(res.data));
  } catch {
    yield put(getCardsFailure('err'));
  }
}
function doGetCards (){
  //getCards의 비동기 부분 담당
  console.log('3번');
  return axios.get('http://localhost:5000/card')
}
function* watchGetCards(){
  //GET_CARD 라는 type의 action 이 이루어 지는 것을 계속해서 감시
  yield takeLatest(GET_CARD,getCards)
}
export default function* rootSaga() {
    yield all([
      watchGetCards()
    ]);
}
