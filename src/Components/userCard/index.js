import React from 'react';
import user from "../../Assets/ex1.png";

export const UserCard = () => {
    return (
        <div className="d-flex align-items-center">
            <img src={user} alt="" className={"w-25 rounded border mr-2"} />
            <div>
                <h6 className={"mb-0 primaryText"}>Ebenezer Alloy</h6>
                <small>95% most visited</small>
            </div>
        </div>
    )
}
