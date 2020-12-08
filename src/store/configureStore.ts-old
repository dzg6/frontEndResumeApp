/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import hardSet from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createReducer } from './reducers';


//PERSISTANT STORAGE
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web



const persistConfig = {
  key: 'root',
  storage: storage,
  version: 0,
  whitelist: ['login']
}


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

  const persistedReducer = persistReducer(persistConfig, createReducer());

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  
  let persistor = persistStore(store);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(
              persistReducer(persistConfig, nextRootReducer)
            )

      //forceReducerReload(store);
    });
  }

  return { store, persistor }
}
