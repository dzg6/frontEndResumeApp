 /**
 *
 * Login Form Saga
 *
 */
 import { call, put, takeLatest } from 'redux-saga/effects';
 import { request } from 'utils/request';
 import { actions} from '../slice';

 interface Login {
  payload:{
    username:string,
    password:string
  };
}

 export function* checkLogin(loginForm:Login) {

  const username = loginForm.payload.username;
  const password = loginForm.payload.password;
       
  //TODO Encrypt password

  const requestURL = 'https://cors-anywhere.herokuapp.com/https://ou68ef4vrb.execute-api.us-east-1.amazonaws.com/prod/' + username + '/login';

  const requestBody = {
    username:username,
    password:password
  };

  const options = {
    method: 'POST',
    mode: 'cors',
    cache:'reload',
    credentials: 'same-origin',
    header:{
      'Content-Type':'application/json',
      },
    redirect:'follow',
    body:JSON.stringify(requestBody),
  };

  try {
    // Call our request helper (see 'utils/request')
    //fetches and returns JSON response
    const user = yield call(request, requestURL, options);

    //Checks if local and server username match
    if(user.username === username.toLocaleLowerCase()){
      //Authenicated User Slice
      //If users match add user to react App
      yield put(actions.userLoggedIn(user));
    }
    yield put(actions.userLoginError(user));
  }catch (err) {
    
    if (err.response?.status === 404) {
      //TODO Create error Messages OUTPUT
      // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    }

  }
}

export function* loginSaga() {
  // yield takeLatest(actions.submitLogin.type, checkLogin);
   yield takeLatest(actions.submitLogin, checkLogin);
}
