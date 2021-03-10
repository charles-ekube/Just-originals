import React from 'react';
import { GetInTouch, IntroCarousel } from './Components';
import { Home } from './Pages';
// import { Home } from './Pages/Home/Home';
// import { IntroCarousel } from './Components/Carousels/IntroCarousel/IntroCarousel';
import {Footer, Navbar} from './Widgets';

function App() {
  return (
    <>
     {/* <GetInTouch/>
     <Footer/> */}
     {/* <IntroCarousel/> */}
     <Navbar/>
     <Home/>
    </>
  );
}

export default App;
