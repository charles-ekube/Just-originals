import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCard} from '../../../Components';

export const Messages = () => {

    const [Messages, setMessages] = React.useState([]);

    useEffect(() => {

        const fetchMessages = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/messages`);
            const data = await response.json()
            const item = data.data;
            const list = Object.values(item);

            console.log(list);
            setMessages(list);
        }
        fetchMessages();
    }, []);
    return (
        <div className="px-4 container">
            <h4 className="mt-5"><b>Messages</b></h4>

            {/* <div className="mt-5 talent_add rounded align-items-center">

                <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />
                <Link to={"/new_talent"} className={"primaryText border h-100 px-5 text-white rounded font-weight-bold"}>NEW TALENT</Link>

            </div> */}

            <div className={"my-5"}>
                <MessageCard Messages={Messages} setMessages={setMessages} />
            </div>

        </div>
    )
}
