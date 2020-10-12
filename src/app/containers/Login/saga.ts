 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
 import { actions } from './slice';
 import { selectUsername, selectPassword } from './selectors';
 export function* checkLogin() {
       const username: string = yield select(selectUsername);
       const password: string = yield select(selectPassword);

       console.log(username);
       console.log(password);

       const requestURL = 'https://cors-anywhere.herokuapp.com/https://ko5v8nf5si.execute-api.us-east-1.amazonaws.com/prod/';

       const bodyParse = {
         username:username,
         password:password
       };

       const options = {
         method: 'POST',
         mode: 'cors',
         cache:'reload',
         header:{
           'Content-Type':'application/json'
         },
         redirect:'follow',
         body:JSON.stringify(bodyParse),
       };


 }

export function* loginSaga() {
   yield takeLatest(actions.submitLogin.type, checkLogin);
}
