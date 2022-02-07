import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './views/Home';
import Loading from './components/Loading';
import './App.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
    </Switch>
  )
}

export default App;
