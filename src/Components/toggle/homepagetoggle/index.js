import React from 'react';
import {useHistory} from 'react-router-dom';

const HomePageToggle = () => {

    const history = useHistory();

return (
    <> 
        <div className='homepage-btn-container'>
            <button className='homepage-btn'
                onClick={() => 
                    history.push('/')
                }
            >
                Home
            </button>
        </div>
    </>
)


}

export {HomePageToggle}