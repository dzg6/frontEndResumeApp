 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
 import { actions } from './slice';
 import { request } from 'utils/request';

 export function* createUser(user) {

  const userParsed = JSON.parse(user.payload)
  const username: string = userParsed.username;
  const password: string = userParsed.password;
  const email: string = userParsed.email;


  const requestURL = 'https://cors-anywhere.herokuapp.com/https://ou68ef4vrb.execute-api.us-east-1.amazonaws.com/prod/' + username;

  const bodyParse = {
    username:username,
    password:password,
    email:email
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
  //console.log(JSON.stringify(bodyParse));
  try {
   // Call our request helper (see 'utils/request')
   const repos = yield call(request, requestURL, options);
   console.log("HERE");
   console.log(repos);
   
   //if(repos.username === username){
    // yield put(actions.userLoggedIn(repos));
  // }
  }catch (err) {
   console.log(err);
   if (err.response?.status === 404) {
    // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
   }
  }

 }

export function* createUserSaga() {
   yield takeLatest(actions.createUser.type, createUser);
}
