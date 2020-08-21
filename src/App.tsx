import React from 'react';
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import '@fortawesome/fontawesome-free/css/all.min.css';

import AuthContext from './contexts/AuthContext'
import Routes from './routes'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <AuthContext>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Routes/>
          </Switch>
        </Router>
      <GlobalStyles/>
    </AuthContext>
  );
}

export default App;
