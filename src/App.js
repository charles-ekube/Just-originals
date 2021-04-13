import React from 'react';
import Routes from './route';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Home, Projects, Explore, ProjectDisplay, Blog, ExploreDisplay, Dashboard, HomeScreen, AdminProjects, Talents, NewTalent, EditTalent, AdminBlog, Client} from './Pages';

function App(props) {
  return (
    <>
    <Routes/>
{/*     
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
            
      </Router> */}
    </>
  );
}

export default App;
