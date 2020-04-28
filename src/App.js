import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApisDocs from './pages/ApisDocs';

//ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {

  return (
    <BrowserRouter>
        <Analytics id="UA-164605660-1">
        <React.Fragment>
          <CssBaseline />
          <Header/>
          <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/dev/api' component={ApisDocs}></Route>
          </Switch>
          <Footer/>
        </React.Fragment>
        </Analytics>
    </BrowserRouter>

  );
}