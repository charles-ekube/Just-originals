// import React from 'react';
// import { Sidebar } from './sidebar';
// import { Footer, Navbar } from '../Widgets';
// import { Logo } from '../Assets';
// import { MdMenu } from 'react-icons/md';

// const Layout = ({ children, isAdmin}) => {

//     const [showNav, setShowNav] = React.useState(false);
//     const handleShowNav = () => {
//         setShowNav(prev => !prev);
//     }
//     return (
//         isAdmin ?
//             <div className={"adminGrid"}>
//                 <img src={Logo} alt='poster' style={{position:'absolute', height:'50px', bottom:'10px'}}/>
//                 <Sidebar showNav={showNav} setShowNav={setShowNav} children={children}/>
//                 <main className='children-container'>
//                     <div>

//                     {children}
//                     </div>
//                     <button
//                         onClick={handleShowNav}
//                         className='open-menu'
//                     >
//                         <MdMenu/>
//                     </button>
//                 </main>
//                 {/* <Footer/> */}
//             </div>
//             :

//             <div>
//                 <div>
//                     <div>{children}</div>
//                 </div>
//             </div>
//     )
// }

// export { Layout }