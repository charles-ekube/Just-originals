import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Projects, Explore, ProjectDisplay, Blog, ExploreDisplay} from './Pages';

function App(props) {
  return (
    <>
    
      <Router>


        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route path="/Explore/:id" component={Explore} />
        <Route path="/ExploreDisplay" component={ExploreDisplay} />
        <Route path="/Projects" component={Projects} />
        <Route path="/ProjectDisplay/:id" component={ProjectDisplay} />
        <Route path="/Blog" component={Blog} />
            
      </Router>
    </>
  );
}

export default App;
