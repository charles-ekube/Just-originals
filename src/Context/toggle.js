import React, {useState, createContext} from 'react';

export const ToggleContext = createContext();


const ToggleContextProvider = (props) => {

    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () => {
        setShowNav(prev => !prev);
   }


   return (

    <ToggleContext.Provider value={{ showNav, setShowNav, handleShowNav}}>
            {props.children}
    </ToggleContext.Provider>
   )

}

export default ToggleContextProvider;