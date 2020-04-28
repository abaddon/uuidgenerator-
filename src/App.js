import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

ReactGA.initialize('UA-164605660-1');

ReactGA.pageview(window.location.pathname + window.location.search);


export default function App() {

  return (
    <React.Fragment>
        <CssBaseline />
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
  );
}