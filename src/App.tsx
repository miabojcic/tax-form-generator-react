import React from 'react';
import './App.css';
import { Header } from './header/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';
import { GenerateForm } from './generate-form/generate-form';
import { Login } from './login/login';
import { Registration } from './account/registration';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/generate-form" exact component={GenerateForm} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registration} />
      </Router>
    </div>
  );
}

export default App;
