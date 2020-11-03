import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

export function* getAllUsers() {
  const requestURL = `https://cors-anywhere.herokuapp.com/https://66pwlgu668.execute-api.us-east-1.amazonaws.com/prod/`;
  const options = {
     method: 'GET',
     mode: 'cors',
     cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
     credentials: 'same-origin', // include, *same-origin, omit
     headers: {
       'Content-Type': 'application/json'
     },
     redirect: 'follow',
     };
     try {
      // Call our request helper (see 'utils/request')
      const repos: Repo[] = yield call(request, requestURL, options);
      console.log(repos.widgets);
      if (repos?.length > 0) {
  
          yield put(actions.reposLoaded(repos.widgets));
  
      }
              console.log("GetIDs Over");
     } catch (err) {
              console.log(err);
      if (err.response?.status === 404) {
        yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
      }
     }
  }
  export function* getUser() {
    const requestURL = `https://cors-anywhere.herokuapp.com/https://66pwlgu668.execute-api.us-east-1.amazonaws.com/prod/`;
    const options = {
       method: 'GET',
       mode: 'cors',
       cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
       credentials: 'same-origin', // include, *same-origin, omit
       headers: {
         'Content-Type': 'application/json'
       },
       redirect: 'follow',
       };
       try {
        // Call our request helper (see 'utils/request')
        const repos: Repo[] = yield call(request, requestURL, options);
        console.log(repos.widgets);
        if (repos?.length > 0) {
    
            yield put(actions.reposLoaded(repos.widgets));
    
        }
                console.log("GetIDs Over");
       } catch (err) {
                console.log(err);
        if (err.response?.status === 404) {
          yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
        }
       }
    }

export function* usersSaga() {
  yield takeLatest(actions.someAction.type, getAllUsers);
  yield takeLatest(actions.someAction.type, getUser);
}
