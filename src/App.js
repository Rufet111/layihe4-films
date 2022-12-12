import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import List from './pages/List/List';

import './reset.css';
import './common.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={List} />
      </div>
    );
  }
}

export default App;
