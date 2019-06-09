import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Pull from './pages/Pull';

function App() {
  return (
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/pull' component={Pull} />
    </div>
  );
}

export default App;
