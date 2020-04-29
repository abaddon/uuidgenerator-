import React from 'react';
import {Helmet} from 'react-helmet'
import UUIDList from '../components/UUIDList';


export default function Home() {

  return (
      <>
        <Helmet>
          <title>Free online UUID generator</title>
          <meta name="description" content="This is a free online tool allow you to generate Universally unique identifier (UUID) version 4" />
        </Helmet>
        <main>   
          <UUIDList/>
        </main> 
      </>
  );
}