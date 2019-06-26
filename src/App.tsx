import React from 'react';
import { Header } from './header/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';
import { GenerateForm } from './generate-form/generate-form';
import Login from './login/login';
import { Registration } from './account/registration';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './shared/auth-context';
import { PrivateRoute } from './shared/private-route';


const App: React.FC = () => {

  return (
      <AuthProvider>
        <SnackbarProvider maxSnack={1} >
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Registration}/>
                    <>
                        <Header/>
                        <PrivateRoute path="/" exact component={Dashboard} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/settings" exact component={Settings} />
                        <PrivateRoute path="/generate-form" exact component={GenerateForm} />
                    </>
                </Switch>
            </Router>
        </SnackbarProvider>
      </AuthProvider>
  );
}

export default App;
