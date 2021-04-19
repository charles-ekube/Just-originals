import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Projects, Explore, ProjectDisplay, Blog, ExploreDisplay, Dashboard, HomeScreen, AdminProjects, Talents, NewTalent, EditTalent, AdminBlog, Client, BlogPage, PostRequest} from './Pages';
import { Layout } from './Components';

const LayoutWrapper = props => {
    return (
        <Layout isAdmin={props.isdmin}>
            <props.Component {...props} />
        </Layout>
    )
}

const MyRoutes = ({ Component, path, exact, isdmin, ...rest }) => {
    return (
        <Route
            exact={exact || true}
            path={path}
            render={props => {
                return <LayoutWrapper {...props} {...rest} Component={Component} isdmin={isdmin} />
            }}
        />
    )
}

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <MyRoutes path='/' Component={Home} exact {...props} />
                <MyRoutes path='/projects' Component={Projects} exact {...props} />
                <MyRoutes path='/projectdisplay' Component={ProjectDisplay} exact {...props} />
                <MyRoutes path='/explore' Component={Explore} exact {...props} />
                <MyRoutes path='/exploredisplay' Component={ExploreDisplay} exact {...props} />
                <MyRoutes path='/blog' Component={Blog} exact {...props} />
                <MyRoutes path='/blogpage' Component={BlogPage} exact {...props} />
                <MyRoutes path='/postrequest' Component={PostRequest} exact {...props} />
                <MyRoutes path='/admin' Component={Dashboard} exact {...props} isdmin />
                <MyRoutes path='/adminhome' Component={HomeScreen} exact {...props} isdmin />
                <MyRoutes path='/adminProjects' Component={AdminProjects} exact {...props} isdmin />
                <MyRoutes path='/talents' Component={Talents} exact {...props} isdmin />
                <MyRoutes path='/new_talent' Component={NewTalent} exact {...props} isdmin />
                <MyRoutes path='/edit_talent/:id' Component={EditTalent} exact {...props} isdmin />
                <MyRoutes path='/adminblog' Component={AdminBlog} exact {...props} isdmin />
                <MyRoutes path='/clients' Component={Client} exact {...props} isdmin />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;