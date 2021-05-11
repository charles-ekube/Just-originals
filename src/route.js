// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Home, Projects, Explore, ProjectDisplay, Blog, ExploreDisplay, Dashboard, HomeScreen, AdminProjects, Talents, NewTalent, EditTalent, AdminBlog, Client, BlogPage, PostRequest, AddProjects, AddTestimonies, AddTeams, Messages} from './Pages';
// import { Layout } from './Components';
// import SignUp from './Pages/Auth/SignUp';
// import Login from './Pages/Auth/Login';



// const LayoutWrapper = props => {
 
//     return (
//             <Layout isAdmin={props.auth}>
//                 <props.Component {...props} />
//             </Layout>
         
      
      
//     )
// }

// const MyRoutes = ({ Component, path, exact, auth, ...rest }) => {
//     return (
//         <Route
//             exact={exact || true}
//             path={path}
//             render={props => {
//                 return <LayoutWrapper {...props} {...rest} Component={Component} isdmins={auth} />
//             }}
//         />
//     )
// }

// const Routes = (props) => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <MyRoutes path='/' Component={Home} exact {...props} />
//                 <MyRoutes path='/projects' Component={Projects} exact {...props} />
//                 <MyRoutes path='/projectdisplay' Component={ProjectDisplay} exact {...props} />
//                 <MyRoutes path='/explore' Component={Explore} exact {...props} />
//                 <MyRoutes path='/exploredisplay/:id' Component={ExploreDisplay} exact {...props} />
//                 <MyRoutes path='/blog' Component={Blog} exact {...props} />
//                 <MyRoutes path='/blogpage' Component={BlogPage} exact {...props} />
//                 <MyRoutes path='/postrequest' Component={PostRequest} exact {...props} />
//                 <MyRoutes path='/admin' Component={SignUp} exact {...props} />
//                 <MyRoutes path='/adminlogin' Component={Login} exact {...props} />
//                 <MyRoutes path='/dashboard' Component={Dashboard} exact {...props} isdmin />
//                 <MyRoutes path='/adminhome' Component={HomeScreen} exact {...props} isdmin />
//                 <MyRoutes path='/adminProjects' Component={AdminProjects} exact {...props} isdmin />
//                 <MyRoutes path='/talents' Component={Talents} exact {...props} isdmin />
//                 <MyRoutes path='/new_talent' Component={NewTalent} exact {...props} isdmin />
//                 <MyRoutes path='/edit_talent/:id' Component={EditTalent} exact {...props} isdmin />
//                 <MyRoutes path='/add_projects/:id' Component={AddProjects} exact {...props} isdmin />
//                 <MyRoutes path='/add_testimonies/:id' Component={AddTestimonies} exact {...props} isdmin />
//                 <MyRoutes path='/add_teams/:id' Component={AddTeams} exact {...props} isdmin />
//                 <MyRoutes path='/adminblog' Component={AdminBlog} exact {...props} isdmin />
//                 <MyRoutes path='/clients' Component={Client} exact {...props} isdmin />
//                 <MyRoutes path='/messages' Component={Messages} exact {...props} isdmin />
               
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default Routes;