import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Story from './component/Story';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={props => <Story {...props} />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
