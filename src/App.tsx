import React from 'react';
import './App.css';
import Form from './components/Form'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Page from './components/Page'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/signup' exact>
          <Form />
        </Route>

        <Route path='/page'>
          <Page />
        </Route>

        <Redirect from ='/' to='/signup'/>

      </div>
     </BrowserRouter>

  );
}

export default App;
