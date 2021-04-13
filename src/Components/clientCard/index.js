import React from 'react';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const ClientCard = () => {
    return (
        <>
            <tr className={"align-items-center bg-white"}>
                <td className={"align-middle"}><input type="checkbox" /></td>

                <td className={"align-middle"}><img src={user} alt="" className={"rounded border avatar"} /></td>

                <td className={"align-middle text-left"}>
                    <div>
                        <p>Silval Clothings</p>
                        <p>www.silvalclothings.com</p>
                    </div>
                </td>

                <td className={"align-middle"}>Public</td>
                <td className={"align-middle"}>Sewing</td>

                <td className={"align-middle"}>
                    <div>
                        <small>Commenced</small>
                        <p>1st Jan 2021</p>
                    </div>
                </td>

                <td className={"align-middle"}>-</td>

                <td className={"align-middle"}>
                    <div>
                        <small>completed</small>
                        <p>31st Jan 2022</p>
                    </div>
                </td>

                <td className={"align-middle"}>
                    <div className="dropleft">
                        <img src={elipses} className={"rounded-circle p-2 dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className="dropdown-item" data-toggle="modal" data-target={`#editModal${id}`} >Edit</p>
                            <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${id}`}>Remove</p>
                        </div>
                    </div>
                </td>
            </tr>

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

            {/* edit modal */}
            <div className="modal fade" id={`editModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body p-5 text-center">
                            <div className="row">
                                <div className="col-3">
                                    <div style={{ height: 120 }} className={"w-100 bg-secondary"}></div>
                                    <small>upload image</small>
                                </div>
                                <div className="col-5">
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Name"} />
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Occupation"} />
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Occupation"} />
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Occupation"} />
                                </div>
                                <div className="col-4">
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Name"} />
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Occupation"} />
                                    <input className={"mb-3 border greyBG p-2 rounded w-100"} placeholder={"Occupation"} />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-md px-5 btn-primary primaryBG">CHANGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
