import React from 'react';
import {useHistory} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

const BackToggle = () => {

    const history = useHistory();

return (
    <> 
        <div className='back-btn-container'>
            <button className='back-btn'
                onClick={() => 
                    history.push('/talents')
                }
            >
             <FaArrowLeft/>   
            </button>
        </div>
    </>
)


}

export {BackToggle}