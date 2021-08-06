
import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './phoneEcmrs/Index'

import { MainContextProvider } from './phoneEcmrs/context/Context';

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Index/>
      </MainContextProvider>
    </div>
  );
}

export default App;
