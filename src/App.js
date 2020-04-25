import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import UUIDList from './components/UUIDList';
import Footer from './components/Footer';

ReactGA.initialize('UA-164605660-1');

export default function App() {

  return (
    <React.Fragment>
        <CssBaseline />
        <Header/>
        <main>   
          <UUIDList/>
        </main> 
          <Footer/>
      </React.Fragment>
  );
}