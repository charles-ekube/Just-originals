import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import user from "../../../Assets/ex1.png";

export const EditTalent = (props) => {


    const { state } = useLocation();


    return (
        <div className="px-4 container pb-5">
            <h4 className="mt-5"><b>Edit Talent</b></h4>

            <div className={"my-5 row"}>
                <div className={"col-4 text-center"}>
                    <div className={"w-100 bg-info"} style={{ height:'300px', width:'200px' }}>
                        <img src={state?.avatar} alt='poster' width='100%' height='100%'/>    
                    </div>
                    <Link className={"text-center small"}>Upload Image</Link>
                </div>

                <div className={"col-8"}>
                    <div className={"w-100"} style={{ height: 290 }}>

                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Name:</label>
                            <input
                             className={"w-50 border p-2 bg-white rounded small"} 
                            placeholder={"Enter name"}
                            value={state?.title} 
                            />
                        </div>
                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Category:</label>
                            <input 
                            className={"w-50 border p-2 bg-white rounded small"} 
                            placeholder={"Enter Category name"} 
                            value={state?.talent_id}
                            />
                        </div>
                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Services:</label>
                            <input 
                            className={"w-50 border p-2 bg-white rounded small"} 
                            placeholder={"Services"} 
                            value={state?.services}
                            />
                        </div>
                        
                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Team:</label>

                            <div className={"w-50"}>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex mt-4"}>
                                    <img alt={""} style={{ width: 32, height: 32 }} className={"mr-2 bg-secondary"} />
                                    <input className={"border bg-white rounded p-2 small w-100"} placeholder={"New name"} />
                                </div>
                            </div>

                        </div>

                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Previous Clients:</label>

                            <div className={"w-50"}>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex mt-4"}>
                                    <img alt={""} style={{ width: 32, height: 32 }} className={"mr-2 bg-secondary"} />
                                    <input className={"border bg-white rounded p-2 small w-100"} placeholder={"New name"} />
                                </div>
                            </div>

                        </div>

                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Previous Projects:</label>

                            <div className={"w-50"}>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />
                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>
                                <div className={"d-flex mt-4"}>
                                    <img alt={""} style={{ width: 32, height: 32 }} className={"mr-2 bg-secondary"} />
                                    <input className={"border bg-white rounded p-2 small w-100"} placeholder={"New name"} />
                                </div>
                            </div>

                        </div>

                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Testimonials:</label>

                            <div className={"w-50 mb-5"}>
                                <div className={"d-flex my-3"}>
                                    <img src={user} alt={""} style={{ width: 32, height: 32 }} className={"mr-2"} />

                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <textarea className={"border bg-white rounded p-2 small w-100 mt-2"} placeholder={"Enter Category name"} />
                                        <Link className={"mt-2 small"}>Remove</Link>
                                    </div>
                                </div>

                                <div className={"d-flex mt-4"}>
                                    <img alt={""} style={{ width: 32, height: 32 }} className={"mr-2 bg-secondary"} />

                                    <div className={"w-100"}>
                                        <input className={"border bg-white rounded p-2 small w-100"} placeholder={"Enter Category name"} />
                                        <textarea className={"border bg-white rounded p-2 small w-100 mt-2"} placeholder={"Enter Category name"} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
