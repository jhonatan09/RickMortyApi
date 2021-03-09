import React from 'react';
import './style/imports.scss';
import {DataContextProvider} from './store'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './pages/main'

function App() {
  
     
      
  return (
    <DataContextProvider>
        <Router>
         <Main />
      </Router>
    </DataContextProvider>
  );
}

export default App;
