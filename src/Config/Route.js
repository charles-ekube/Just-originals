import React from 'react';
import { Home,
        Projects, 
        Explore, 
        ProjectDisplay, 
        Blog, 
        ExploreDisplay, 
        Dashboard, 
        HomeScreen, 
        AdminProjects, 
        Talents, 
        NewTalent, 
        EditTalent, 
        AdminBlog, 
        Client, 
        BlogPage, 
        PostRequest, 
        AddProjects, 
        AddTestimonies, 
        AddTeams, 
        Messages, 
        SignUp,
        Login} from '../Pages';

        

    const routes = [
        {
             path : '/',
            component : Home,
            isPrivate : false
        },
        {
            path : '/projects',
            component : Projects,
            isPrivate : false
        },
        {
            path : '/projectdisplay',
            component : ProjectDisplay,
            isPrivate : false
        },
        {
            path : '/explore',
            component : Explore,
            isPrivate : false
        },
        {
            path : '/exploredisplay/:id',
            component : ExploreDisplay,
            isPrivate : false
        },
        {
            path : '/blog',
            component : Blog,
            isPrivate : false
        },
        {
            path : '/blogpage',
            component : BlogPage,
            isPrivate : false
        },
        {
            path : '/postrequest',
            component : PostRequest,
            isPrivate : false
        },
        {
            path : '/adminus',
            component : SignUp,
            isPrivate : false
        },
        {
            path : '/admin',
            component : Login,
            isPrivate : false
        },
        {
            path : '/dashboard',
            component : Dashboard,
            isPrivate : true
        },
        {
            path : '/adminhome',
            component : HomeScreen,
            isPrivate : true
        },
        {
            path : '/adminProjects',
            component : AdminProjects,
            isPrivate : true
        },
        {
            path : '/talents',
            component : Talents,
            isPrivate : true
        },
        {
            path : '/new_talent',
            component : NewTalent,
            isPrivate : true
        },
        {
            path : '/edit_talent/:id',
            component : EditTalent,
            isPrivate : true
        },
        {
            path : '/add_projects/:id',
            component : AddProjects,
            isPrivate : true
        },
        {
            path : '/add_testimonies/:id',
            component : AddTestimonies,
            isPrivate : true
        },
        {
            path : '/add_teams/:id',
            component : AddTeams,
            isPrivate : true
        },
        {
            path : '/adminblog',
            component : AdminBlog,
            isPrivate : true
        },
        {
            path : '/clients',
            component : Client,
            isPrivate : true
        },
        {
            path : '/messages',
            component : Messages,
            isPrivate : true
        },
    ]

    export default routes