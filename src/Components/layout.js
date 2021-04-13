import React from 'react';
import { Sidebar } from './sidebar';
import { Footer, Navbar } from '../Widgets';
import { Logo } from '../Assets';

const Layout = ({ children, isAdmin }) => {
    return (
        isAdmin ?
            <div className={"adminGrid"}>
                <img src={Logo} alt='poster' style={{position:'absolute', height:'50px', bottom:'10px'}}/>
                <Sidebar />
                <main>{children}</main>
                {/* <Footer/> */}
            </div>
            :

            <div>
                <div className={"d-flex"}>
                    <div>{children}</div>
                </div>
            </div>
    )
}

export { Layout }