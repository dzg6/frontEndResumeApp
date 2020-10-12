 import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
 import { actions } from './slice';
 import { request } from 'utils/request';
 import { selectUsername } from './selectors';

export function* doSomething() {

      yield delay(1000);
    const username: string = yield select(selectUsername);


const requestURL = `http://127.0.0.1:3000/prod/`;
//const requestURL = `https://cors-anywhere.herokuapp.com/https://ko5v8nf5si.execute-api.us-east-1.amazonaws.com/prod/`;
const bodyParse = {
    id:username
};

 const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    //  'Content-Type': 'application/json'
       'Content-Type': 'text/plain',
    },
    redirect: 'follow',
    body: JSON.stringify(bodyParse),
    };
   try {
    // Call our request helper (see 'utils/request')
    const repos: Repo[] = yield call(request, requestURL, options);
    console.log(repos.event);
 // const { id, name } = JSON.parse(repos.event.body);
 //     console.log(id);
 //     console.log(name);
    if (repos?.length > 0) {
        console.log("made it");
      console.log(repos);
    }
            console.log("POST IDS OVER");
   } catch (err) {
            console.log(err);
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    }
   }
}

export function* getAllIDs() {
const requestURL = `http://127.0.0.1:3000/prod/`;
//const requestURL = `https://cors-anywhere.herokuapp.com/https://ko5v8nf5si.execute-api.us-east-1.amazonaws.com/prod/`;
const options = {
   method: 'GET',
   mode: 'no-cors',
   cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
   credentials: 'same-origin', // include, *same-origin, omit
   headers: {
     //'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   redirect: 'follow',
   };
   try {
    // Call our request helper (see 'utils/request')
    const repos: Repo[] = yield call(request, requestURL, options);
    if (repos?.length > 0) {
        yield put(actions.reposLoaded(repos));

    }
            console.log("GetIDs Over");
   } catch (err) {
            console.log(err);
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    }
   }
}

export function* lambdaSaga() {
   yield takeLatest(actions.loadRepos.type, doSomething);
    yield takeLatest(actions.getIDs.type, getAllIDs);
}
