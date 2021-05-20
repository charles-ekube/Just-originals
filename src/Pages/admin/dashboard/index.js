import React from 'react';
import project from "../../../Assets/project_2.svg";
import talent from "../../../Assets/talent_2.svg"
import request from "../../../Assets/request.svg"
import withdrawal from "../../../Assets/withdrawal.svg"
import { UserCard, RequestCard, Sidebar, SidebarToggle, AdminNav } from '../../../Components';
import { FaRProject } from 'react-icons/fa';


export const Dashboard = () => {
    
   
    return (
    <>
    <Sidebar/>
    <AdminNav/>
         <div className="px-4 page-container">
            <h2 className="mt-5">Dashboard</h2>

            <div className="row mt-5">
                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3"}>
                    <div className={"w-100 h-100 bg-white border rounded d-flex justify-content-between align-items-center p-3"}>
                        <div className="iconBG rounded p-2">
                            <FaRProject/>
                        </div>
                        <div className={"rounded"}>
                            <h4 className={"secondaryText text-right mb-n1"}>20</h4>
                            <h5 className={"mb-0"}>Projects</h5>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3 "}>
                    <div className={"w-100 h-100 bg-white border rounded d-flex justify-content-between align-items-center p-3"}>
                        <div className="iconBG rounded p-2">
                            <img src={talent} style={{ width: 16 }} alt='poster' />
                        </div>
                        <div className={"rounded"}>
                            <h4 className={"secondaryText text-right mb-n1"}>20</h4>
                            <h5 className={"mb-0"}>Talents</h5>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3"}>
                    <div className={"w-100 h-100 bg-white border rounded d-flex justify-content-between align-items-center p-3"}>
                        <div className="iconBG rounded p-2">
                            <img src={request} style={{ width: 16 }} alt='poster'/>
                        </div>
                        <div className={"rounded"}>
                            <h4 className={"secondaryText text-right mb-n1"}>20</h4>
                            <h5 className={"mb-0"}>Requests</h5>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3"}>
                    <div className={"w-100 h-100 bg-white border rounded d-flex justify-content-between align-items-center p-3"}>
                        <div className="iconBG rounded p-2">
                            <img src={withdrawal} style={{ width: 16 }}  alt='poster'/>
                        </div>
                        <div className={"rounded"}>
                            <h4 className={"secondaryText text-right mb-n1"}>20</h4>
                            <h5 className={"mb-0"}>Withdrawal</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"row mt-5"}>
                <div className={"col-12 col-md-12 col-lg-6 mt-3 mb-3"}>
                    <div className={"card h-100 p-3"}>
                        <h6>Weekly Activity</h6>

                        <div className={"mt-auto d-flex justify-content-center font-weight-bold"}>
                            <h5 className={"mr-3"}><span className={"primaryText"}>10</span> New Users</h5>
                            <h5><span className={"primaryText"}>25</span> Weekly Visits</h5>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3"}>
                    <div className={"card h-100 p-3"}>
                        <h6 className={"mb-3"}>Most tracked projects</h6>

                        <div className={"py-3"}>
                            <label className={"pb-4"}>Sewing</label>
                            <UserCard />
                        </div>

                        <div className={"py-3"}>
                            <label className={"pb-4"}>Painting</label>
                            <UserCard />
                        </div>
                    </div>
                </div>

                <div className={"col-12 col-md-12 col-lg-3 mt-3 mb-3"}>
                    <div className={"card h-100 p-3"}>
                        <h6 className={"mb-3"}>Most requested talents</h6>

                        <div className={"py-2"}>
                            <UserCard />
                        </div>
                        <div className={"py-2"}>
                            <UserCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className={"my-5"}>
                <h6>New Requests</h6>
                <RequestCard />
                <RequestCard />
            </div>

        </div >
        
     </>
      
    )
}
