import React from 'react';
import { Header } from './header/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';
import { GenerateForm } from './generate-form/generate-form';
import { Login } from './login/login';
import { Registration } from './account/registration';
import { SnackbarProvider } from 'notistack';

const App: React.FC = () => {

  return (
    <SnackbarProvider maxSnack={1} >
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Registration} />
                <>
                    <Header/>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/generate-form" exact component={GenerateForm} />
                </>
            </Switch>
        </Router>
    </SnackbarProvider>
  );
}

export default App;
