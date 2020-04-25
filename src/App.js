import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import UUIDList from './components/UUIDList';
import Footer from './components/Footer';

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