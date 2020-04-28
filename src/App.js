import React,{Suspense} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';
import Header from './components/Header';
import Footer from './components/Footer';


const HomePage = React.lazy(() => import('./pages/Home'));

const ApiDocsPage = React.lazy(() => import( './pages/ApisDocs'));

export default function App() {

  return (
    <BrowserRouter>
        <Analytics id="UA-164605660-1">
        <React.Fragment>
          <CssBaseline />
          <Header/>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path='/' component={HomePage} ></Route>
              <Route exact path='/api' component={ApiDocsPage}></Route>
            </Suspense>
          </Switch>
          <Footer/>
        </React.Fragment>
        </Analytics>
    </BrowserRouter>

  );
}