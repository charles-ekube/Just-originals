import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const MessageCard = ({ Messages, setMessages }) => {
    const history = useHistory();
    const [show, setShow] = useState(false)


    return (

        <>
            {Messages && Messages.map(message => (
                <div>
                    <div className={"talentCard bg-white"}>
                        <input type="checkbox" />
                        {/* <img src={talent.avatar} alt="" className={"rounded border avatar"} /> */}

                        <div className={'d-flex align-items-center'}>
                            <p className={'mr-3 mt-3'}><b>{message.sender}</b></p>
                            <small>{message.email}</small>
                            
                        </div>

                        <small>{message.phone}</small>

                        <Link to={"#"} onClick={() => setShow(!show)}>See More</Link>

                        <div className="dropleft">
                            <img src={elipses} className={"rounded-circle p-2 dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* <p onClick={(props) =>
                                     history.push({
                                        pathname: `/edit_talent/${talent.id}`,
                                        state: { title : `${talent.name}`,
                                                 avatar : `${talent.avatar}`,
                                                 services : `${talent.services}`,
                                                talent_id : `${talent.id}`
                                        } })
                                } className="dropdown-item" >Edit</p>
                                <p onClick={(props) =>
                                     history.push({
                                        pathname: `/add_projects/${talent.id}`,
                                        state : {
                                            talent_id : `${talent.id}`,
                                        }

                                         })
                                } className="dropdown-item" >Add Projects</p>
                                <p onClick={(props) =>
                                     history.push({
                                        pathname: `/add_testimonies/${talent.id}`,
                                        state : {
                                            talent_id : `${talent.id}`,
                                        }

                                         })
                                } className="dropdown-item" >Add Testimonies</p>
                                <p onClick={(props) =>
                                     history.push({
                                        pathname: `/add_teams/${talent.id}`,
                                        state : {
                                            talent_id : `${talent.id}`,
                                        }

                                         })
                                } className="dropdown-item" >Add Team</p> */}
                                <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${id}`}>Remove</p>
                            </div>
                        </div>
                    </div>

                    {
                        show ?
                            <div className={"bg-white p-3"}>
                                <div className={"ml-5 w-75 pl-5"}>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Message</label>

                                        <div className={"w-50"}>
                                            <p>
                                                {message.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                    }

                    {/* delete modal */}
                    <div className="modal fade" id={`deleteModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-5 text-center">
                                    <p>Are you sure you want to remove Uju Okeke from the list?</p>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-md px-5 btn-secondary" data-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-md px-5 btn-primary primaryBG">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </>
    )
}

