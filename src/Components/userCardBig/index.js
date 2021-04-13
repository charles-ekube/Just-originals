import React from 'react';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const UserCardBig = () => {
    return (
        <>
            <div className="bg-white border p-4 align-items-center bigUserCard mb-2">
                <img src={user} alt={""} className={""} width={48} height={48} style={{ objectFit: "cover" }} />

                <div>
                    <h6>Uju Okeke</h6>
                    <p>CEO Ju’s Fashion</p>
                </div>

                <p>
                    We bring fashion to life through you
                    </p>

                <div className="dropleft">
                    <img src={elipses} className={"rounded-circle p-2 dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p className="dropdown-item" data-toggle="modal" data-target={`#editModal${id}`} >Edit</p>
                        <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${id}`}>Remove</p>
                    </div>
                </div>

            </div>

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

            <div className="modal fade" id={`editModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-5 text-center">
                            <div className="row">
                                <div className="col-4">
                                    <div style={{ height: 120 }} className={"w-100 bg-secondary"}></div>
                                    <small>upload image</small>
                                </div>
                                <div className="col-8">
                                    <input className={"mb-3 border greyBG rounded w-100"} placeholder={"Name"} />
                                    <input className={"mb-3 border greyBG rounded w-100"} placeholder={"Occupation"} />
                                    <textarea className={"mb-3 border greyBG rounded w-100"} placeholder={"Tagline"} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-md px-5 btn-primary primaryBG">CHANGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
