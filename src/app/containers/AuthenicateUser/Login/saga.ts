 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
 import { actions} from '../slice';
 import { request } from 'utils/request';


 export function* checkLogin(loginForm) {
   console.log(loginForm.payload);
       const username: string = loginForm.payload.username;
       const password: string = loginForm.payload.password;
       

       let requestURL = 'https://cors-anywhere.herokuapp.com/https://ou68ef4vrb.execute-api.us-east-1.amazonaws.com/prod/' + username + '/login';

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
       try {
        // Call our request helper (see 'utils/request')
        const repos = yield call(request, requestURL, options);
        if(repos.username === username.toLocaleLowerCase()){
          yield put(actions.userLoggedIn(repos));
        }
        console.log(JSON.stringify(repos.status));
       }catch (err) {
        console.log(err);
        if (err.response?.status === 404) {
         // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
        }
}


 }

export function* loginSaga() {
   yield takeLatest(actions.submitLogin.type, checkLogin);
}
