import React from 'react';
import { Explore, Home, Projects } from './Pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Router>

        
<Route exact path="/" render={props => (
  <React.Fragment>
    <Home/>
  </React.Fragment>
)} />
<Route path="/Explore" component={Explore} />
<Route path="/Projects" component={Projects} />
</Router>
    </>
  );
}

export default App;
