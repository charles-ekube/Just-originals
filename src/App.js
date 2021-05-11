import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppRoutes from './Components/AppRoutes';
import routes from './Config/Route';
import { AuthProvider } from './Context';
 
function App(props) {
  return (
    <AuthProvider >
    <Router>
      <Switch>
        {routes.map((route) => (
          <AppRoutes
            key={route.path}
            exact path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>
    </Router>
    </AuthProvider>
  );
}
 
export default App;