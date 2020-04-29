import React from 'react';
import {Helmet} from 'react-helmet'
import { RedocStandalone } from 'redoc';


export default function ApisDocs() {

  return (
      <>
        <Helmet>
          <title>Free online UUID generator API</title>
          <meta name="description" content="Public API used to generate the Universally unique identifier (UUID) version 4" />
        </Helmet>
        <main>   
          <RedocStandalone specUrl="/openApi3.yml"/>
        </main> 
      </>
  );
}