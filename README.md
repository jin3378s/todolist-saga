# Getting Start

- npm install
- npm run server
- 다른 터미널 열어서
- npm start
- console.log  1번 2번 3번 4번 5번 따라가면서 흐름 파악

# Reference
- [https://medium.com/@han7096/redux-saga%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-5e39b72380af] HYJ님 블로그
- https://bitbucket.org/brainiac26/pinterest-clone.git : redux-saga example code. plz git clone this url

# redux-thunk

- action 함수를 dispatch를 인자로 받는 함수를 리턴 하게 함
- action 함수의 return 함수(dispatch를 인자로 받는) 내부에서 비동기 처리를 하고 완료되면 dispatch에 success함수에 완료된 데이터와 함께실행 
- reducer로 넘어가서 처리한 데이터를 바탕으로 set state(not setState function)

- 모든 함수에서 try catch 로 error catch시 failure 함수 실행
# redux-saga

- 일반적인 동기 action => 그냥 마찬가지로 진행
- 비동기 액션은 starter/success/failure 로 함수 구분해서 셋팅
- 비동기 액션에 대한 saga에는 watch(starter함수 실행 감지)/do(실제 비동기 요청)/origin(do 함수 실행하고,그 데이터로 success함수 실행) 함수로 구분해서 셋팅
- 최초 액션 실행시 start함수 실행
- saga에 설정한 watch함수가 start함수 실행 감지
- 위에 셋팅 해놓은 origin(내부에 do함수) 함수 실행
- success 함수 reducer로 반환
- reducer로 넘어가서 처리한 데이터를 바탕으로 set state(not setState function)

- 모든 함수에서 try catch 로 error catch시 failure 함수 실행
