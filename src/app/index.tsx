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
import { AuthenicateUser } from './containers/AuthenicateUser';


export function App() {

  return (
    <BrowserRouter basename="/React">
      <Helmet
        titleTemplate="%s - Mark's React App"
        defaultTitle="Mark's React App"
      >
        <meta name="Mark built this nifty app to sharpen his programming knowledge." content="A React Boilerplate application built by Mark" />
      </Helmet>
      <NavBar />
      {/* <AuthenicateUser />  Used for debugging*/}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:user" component={HomePage} />
        <Route exact path="/createuser" component={CreateUser} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
