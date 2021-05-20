import React from 'react'
import { AdminNav, ClientCard, Sidebar, SidebarToggle } from '../../../Components';


const id = String(Math.random()).split(".").join("_");


export const Client = () => {

   

    return (
        <>
         <Sidebar/>
         <AdminNav/>
            <div className="px-4 page-container">
                <h4 className="mt-5"><b>Clients</b></h4>

                <div className="mt-5 talent_add rounded align-items-center">

                    <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />
                    <button data-toggle="modal" data-target={`#createModal${id}`} className={"primaryText border h-100 px-5 text-white rounded font-weight-bold"}>
                        NEW ClLIENT
                </button>
                </div>

                <div className={"my-5 table-responsive"}>
                    <table className={"table text-center table-hover"}>
                        <thead >
                            <tr className={"grey200"}>
                                <th><input type="checkbox" /></th>
                                <th>Image</th>
                                <th className={"text-left"}>Name/Url</th>
                                <th>Type</th>
                                <th>Service Required</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <ClientCard />
                            <ClientCard />
                            <ClientCard />
                        </tbody>
                    </table>
                </div>

            </div>

            {/* create modal */}
            <div className="modal fade" id={`createModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Client</h5>
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
                            <button type="button" className="btn btn-md px-5 btn-primary primaryBG">CREATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
