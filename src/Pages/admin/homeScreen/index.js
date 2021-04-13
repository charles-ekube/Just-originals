import React from 'react';
import { UserCardBig } from '../../../Components/userCardBig';

export const HomeScreen = () => {
    return (
        <div className="px-4 container">
            <h4 className="mt-5"><b>Homescreen</b></h4>

            <div className="mt-5 homeScreen_add rounded">
                <h3 className={"rounded"}>+</h3>
                <input className={"p-2 rounded"} placeholder={"Client's Name"} />
                <input className={"p-2 rounded"} placeholder={"Business Type"} />
                <input className={"p-2 rounded"} placeholder={"Write Up"} />

                <button className={"primaryBG border-0 h-100 px-5 text-white rounded"} >ADD</button>
            </div>
            <p className={"my-2 ml-2"}><small>Note: All images must be in Jpeg format</small></p>

            <div className={"homeScreen_search mt-5"}>

                <select >
                    <option>Show Active</option>
                    <option>Show Non Active</option>
                    <option>Show Rejected</option>
                </select>
                <input className={"p-2 rounded"} placeholder={"Search by Name, Business Type"} />
            </div>

            <div className={"my-5"}>
                <UserCardBig />
                <UserCardBig />
            </div>

        </div>
    )
}
