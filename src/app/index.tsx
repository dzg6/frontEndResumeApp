/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';


//Pages -- Containers
import { HomePage } from './containers/HomePage/Loadable';
import { CreateUser } from './containers/CreateUser';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { NavBar } from './containers/NavBar';
import { Users } from './containers/Users'

//Authenicated User State
import { selectUsername, selectAuthenicated, selectStatus } from './containers/AuthenicateUser/selectors';
import { useInjectReducer} from 'utils/redux-injectors';
import { reducer, sliceKey} from './containers/AuthenicateUser/slice';
import { useSelector} from 'react-redux';



export function App() {


  //To Delete Later--------------------------------------
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const username = useSelector(selectUsername);
  const status = useSelector(selectStatus);
  const isAuthenicated = useSelector(selectAuthenicated);
  console.log(isAuthenicated)
//--------------------------------------------------------

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavBar />

        {/* //To Delete Later-------------------------------------- */}
              Username: {username} <br />
              Status: {status.msg} <br />
              Authenicated: {isAuthenicated.toString()}
        {/* ------------------------------------------------------- */}

      <Switch>
      <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:user" component={HomePage} />
        <Route exact path="/users" component={Users} />

        <Route exact path="/createuser" component={CreateUser} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
