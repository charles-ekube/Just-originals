import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";
import Swal from "sweetalert2";

// const id = String(Math.random()).split(".").join("_");

export const MessageCard = ({ Messages, setMessages }) => {
    const Swal = require("sweetalert2");
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
                                <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${message.id}`}>Remove</p>
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
                    <div className="modal fade" id={`deleteModal${message.id}`} tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-5 text-center">
                                    <p>Are you sure you want to remove {message.sender} from the list?</p>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-md px-5 btn-secondary" data-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-md px-5 btn-primary primaryBG"
                                        onClick= {
                                             async () => {
                                                let getToken = JSON.parse(
                                                    localStorage.getItem("currentUser")
                                                  );
                                                  let token = getToken.token;
                                                  const deleteFunction = await fetch(`https://just-original.herokuapp.com/api/v1/messages/${message.id}`, {
                                                       method: 'DELETE',
                                                       headers: {
                                                        Accept: "application/json",
                                                        Authorization: "Bearer " + token,
                                                        "Content-Type": "application/json",
                                                      },
                                                    
                                                    });
                                                    if (deleteFunction.status === 200) {
                                                        Swal.fire({
                                                          title: "Successful!",
                                                          text: "Message Deleted",
                                                          icon: "success",
                                                          confirmButtonText: "Continue",
                                                        }).then(function () {
                                                          window.location.reload();
                                                        });
                                                      }
                                            }   
                                        }
                                    >Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
           
        </>
    )
}

