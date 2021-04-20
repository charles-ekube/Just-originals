import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className={"h-100"}>
            <ul className={"list-unstyled mt-3 text-white"}>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/admin">Dashboard</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/adminhome">Homescreen</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/adminProjects">Projects</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/talents">Talents</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/clients">Clients</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/adminblog">Blog</NavLink></li>
                <li className="p-0"><NavLink activeClassName={"activeNavLink"} className={"pl-2 py-2 w-100 d-flex mb-1"} to="/messages">Messages</NavLink></li>
            </ul>
        </div>
    )
}
