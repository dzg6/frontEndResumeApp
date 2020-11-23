  /**
 *
 * Create User Saga
 *
 */
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { request } from 'utils/request';

interface User {
  payload:{
    username:string,
    password:string,
    email:string
  };
}

 export function* createUser(user:User) {

  const userParsed = JSON.parse(user.payload);
  
  const username: string = userParsed.username;
  const password: string = userParsed.password;
  const email: string = userParsed.email;

  console.log(username);

  // TODO Encrypt PASSWORD

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

  try {
    // Call our request helper (see 'utils/request')
    //fetches and returns JSON response
   const repos = yield call(request, requestURL, options);

   //TODO Pass on success or Collect Error message
   // yield put(actions.userLoggedIn(user));


  }catch (err) {

   if (err.response?.status === 404) {
    // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
   }

  }
 }

export function* createUserSaga() {
   yield takeLatest(actions.createUser.type, createUser);
}
