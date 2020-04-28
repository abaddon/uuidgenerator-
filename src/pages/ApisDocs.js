import React from 'react';
import { RedocStandalone } from 'redoc';


export default function ApisDocs() {

  return (
        <main>   
          <RedocStandalone specUrl="/openApi3.yml"/>
        </main> 
  );
}