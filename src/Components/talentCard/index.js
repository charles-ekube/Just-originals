import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const TalentCard = ({ Talents, setTalents }) => {
    const history = useHistory();
    const [show, setShow] = useState(false)

    

    // () =>history.push(`/edit_talent/${id}`)

    return (

        <>
            {Talents && Talents.map(talent => (
                <div>
                    <div className={"talentCard bg-white"}>
                        <input type="checkbox" />
                        <img src={talent.avatar} alt="" className={"rounded border avatar"} />

                        <div>
                            <p><b>{talent.name}</b></p>
                            <small>{talent.services}</small>
                        </div>

                        <p>2 pending requests</p>

                        <Link to={"#"} onClick={() => setShow(!show)}>See More</Link>

                        <div className="dropleft">
                            <img src={elipses} className={"rounded-circle p-2 dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p onClick={() =>
                                     history.push({
                                        pathname: `/edit_talent/${talent.id}`,
                                        state: { title : `${talent.name}`,
                                                 avatar : `${talent.avatar}`,
                                                 services : `${talent.services}`,
                                                talent_id : `${talent.id}`
                                        } })
                                } className="dropdown-item" >Edit</p>
                                <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${id}`}>Remove</p>
                            </div>
                        </div>
                    </div>

                    {
                        show ?
                            <div className={"bg-white p-3"}>
                                <div className={"ml-5 w-75 pl-5"}>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Services:</label>

                                        <div className={"w-50"}>
                                            <small className={"m-0"}>Interior Painting</small><br />
                                            <small className={"m-0"}> Exterior Painting</small>
                                        </div>

                                    </div>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Teams:</label>

                                        <div className={"w-50"}>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Interior Painting</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Interior Painting</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Interior Painting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Previous Clients:</label>

                                        <div className={"w-50"}>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Richie Ohare</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>William Macel</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Donald McDils</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Previous Projects:</label>

                                        <div className={"w-50"}>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Testimonials:</label>

                                        <div className={"w-50"}>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Richie Ohare</p>
                                                    <p>Esse eu exercitation anim mollit magna in nostrud irure consequat cupidatat ullamco cupidatat laborum quis. Ad consectetur eiusmod minim qui exercitation.</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Richie Ohare</p>
                                                    <p>Esse eu exercitation anim mollit magna in nostrud irure consequat cupidatat ullamco cupidatat laborum quis. Ad consectetur eiusmod minim qui exercitation.</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-3"}>
                                                <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Richie Ohare</p>
                                                    <p>Esse eu exercitation anim mollit magna in nostrud irure consequat cupidatat ullamco cupidatat laborum quis. Ad consectetur eiusmod minim qui exercitation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"d-flex my-3"}>
                                        <label className={"small w-25 font-weight-bold"}>Request:</label>

                                        <div className={"w-50"}>
                                            <div className={"d-flex mb-3"}>
                                                <div className={"w-100"}>
                                                    <p className={"m-0 small"}>Richie Ohare</p>
                                                    <p>Esse eu exercitation anim mollit magna in nostrud irure consequat cupidatat ullamco cupidatat laborum quis. Ad consectetur eiusmod minim qui exercitation.</p>
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <small className={"font-weight-bold"}>Days: &nbsp;&nbsp;</small><br />
                                                <small>3 Days </small>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <small className={"font-weight-bold"}>Budget: &nbsp;&nbsp;</small><br />
                                                <small>N50, 000 </small>
                                            </div>
                                            <Link to="#"><small>View Upload</small></Link>
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

