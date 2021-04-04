import React, {createContext, useContext, useState} from 'react';

export const JustOriginalsContext = createContext();


const JustOriginalsContextProvider = (props) => {
    const [ spinner, setSpinner ] = useState(true);

    return (
        <JustOriginalsContext.Provider value={{
            spinner,
            setSpinner
        }}>
            {props.children}
        </JustOriginalsContext.Provider>
    )
}

export  const useGetSpinner = () => {
    const {spinner} = useContext(JustOriginalsContext);
    return spinner;
}


export  const useGetSetSpinner = () => {
    const {setSpinner} = useContext(JustOriginalsContext)
    return   React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
      }, [setSpinner]);
}

export default JustOriginalsContextProvider;