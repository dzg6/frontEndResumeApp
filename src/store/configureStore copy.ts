/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import { createReducer } from './reducers';


//PERSISTANT STORAGE
import { createMigrate, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const migrations = {
  0: (state) => {
    // migration clear out device state
    return {
      ...state,
      device: undefined   
    }
  },
  1: (state) => {
    // migration to keep only device state
    return {
      device: state.device
    }
  }
};

//PSTATE
// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 0,
//   stateReconciler: autoMergeLevel1,
//   migrate: createMigrate(migrations, { debug: true })
// }


export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
 
  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  //  const persistedReducer = persistReducer(persistConfig, createReducer());

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  let persistor = persistStore(store)

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {

      //PSTATE
            // // This fetch the new state of the above reducers.
            // const nextRootReducer = require('./reducers').default
            // store.replaceReducer(
            //   persistReducer(persistConfig, nextRootReducer)
            // )

      forceReducerReload(store);
    });
  }

  return { store, persistor }
}
