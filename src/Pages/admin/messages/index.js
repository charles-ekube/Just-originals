import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCard, Sidebar} from '../../../Components';

export const Messages = () => {

    const [Messages, setMessages] = useState([]);
    


    useEffect(() => {

        const fetchMessages = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/messages`);
            const data = await response.json()
            const item = data.data;
            if(item) {
                const lists = Object.values(item);
                setMessages(lists);
                
              }
              else {
                  return <div>No projects found</div>
              }
            // const list = Object.values(item);


            // console.log(list);
            
        }
        fetchMessages();
    }, []);

    const [showNav, setShowNav] = React.useState(false);
    const handleShowNav = () => {
        setShowNav(prev => !prev);
   }
    
    return (
        <>
         <Sidebar showNav={showNav} setShowNav={setShowNav}/>
        <button
       onClick={handleShowNav}
       className='open-menu'
   ></button>
        <div className="px-4 container">
                <h4 className="mt-5"><b>Messages</b></h4>
                <div className={"my-5 table-responsive"}>
                    <table className={"table text-center table-hover"}>
                        <thead >
                            <tr className={"grey200"}  style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)'}}>
                                <th><input type="checkbox" /></th>
                                <th></th>
                                <th className={"text-left"}></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        <MessageCard Messages={Messages} setMessages={setMessages}  />                    
                        </tbody>
                    </table>
                    
                </div>
            </div>
       
        </>
    )
}
