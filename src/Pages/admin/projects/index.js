import React, {useEffect, useState} from 'react';
import axios from 'axios';
import user from "../../../Assets/ex1.png";
import elipses from "../../../Assets/elipses.svg";
import { ProjectCard } from '../../../Components';

const id = String(Math.random()).split(".").join("_");

export const AdminProjects = () => {


    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [created_at, setCreated_at] = useState("");
    const [updated_at, setUpdated_at] = useState("");
    const [client, setClient] = useState("");
    const [avatar, setAvatar] = useState("");
   

    const handleProjectUpdate = async (e) => {
        e.preventDefault();
        console.log(title, url, created_at, updated_at, client, avatar);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('url', url);
        formData.append('created_at', created_at);
        formData.append('updated_at', updated_at);
        formData.append('client', client);
        formData.append('avatar', avatar);

        
        let result = await fetch(`https://just-original.herokuapp.com/api/v1/projects`,{
            method : 'POST',
            body : formData
        }) ;
        alert('updated');
        console.log(result);
    }


    const [Projects, setProjects] = React.useState([]);

        useEffect(() => {
    
            const fetchProjects = async () => {
     
            
                const response = await fetch(`https://just-original.herokuapp.com/api/v1/projects`);
                const data = await response.json()
                const item = data.data ;
                const lists = Object.values(item);
                setProjects(lists);
            }
            fetchProjects();
        }, []);
    // (async () => {
    //     const result = await axios.get(
    //         "http://example.com/api/v1/categories/"
    //     );
    //     setData(result.data);
    // })();



    // const data = new URLSearchParams();
    // for (const pair of new FormData(formElement)) {
    //     data.append(pair[0], pair[1]);
    // }
    
    // fetch(`https://just-original.herokuapp.com/api/v1/projects`, {
    //     method: 'post',
    //     body: data,
    // })
    

    return (
        <>
            <div className="px-4 container">
                <h4 className="mt-5"><b>Projects</b></h4>

                <div className="mt-5 projects_filter rounded align-items-center">

                    <p className={"border-right pr-2"}>Filter</p>

                    <select className={"border-0 border-right rounded greyBG p-2"}>
                        <option>Category</option>
                        <option>Show Non Active</option>
                        <option>Show Rejected</option>
                    </select>

                    <select className={"border-0 border-right rounded greyBG p-2"}>
                        <option>Status</option>
                        <option>Show Non Active</option>
                        <option>Show Rejected</option>
                    </select>

                    <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />

                    <button className={"primaryText border h-100 px-5 text-white rounded fint-weight-bold"} data-toggle="modal" data-target={`#createModal${id}`}>NEW PROJECT</button>

                </div>

                <div className={"my-5 table-responsive"}>
                    <table className={"table text-center table-hover"}>
                        <thead >
                            <tr className={"grey200"}>
                                <th><input type="checkbox" /></th>
                                <th>Image</th>
                                <th className={"text-left"}>Name/Url</th>
                                <th>Client</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <ProjectCard Projects={Projects} setProjects={setProjects}/>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* create modal */}
            <div className="modal fade" id={`createModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
            <form onSubmit={handleProjectUpdate} id='formElement'>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Project</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    
                        <div className="modal-body p-5 text-center">
                            <div className="row">
                                <div className="col-4">
                                <input 
                                style={{background:'#eee', height:'120px', width:'120px'}}
                                    type="file" 
                                    name="avatar" 
                                    placeholder="Upload Image"
                                    onChange={(e) => setAvatar(e.target.files[0])}
                                />
                                </div>
                                <div className="col-8">
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='title' 
                                    placeholder={"Title"} 
                                    onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='client' 
                                    placeholder={"Client"} 
                                    onChange={(e) => setClient(e.target.value)}
                                    />
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='url' 
                                    placeholder={"Url"} 
                                    onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <input 
                                    type='date'
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='created_at' 
                                    placeholder={"Created"} 
                                    onChange={(e) => setCreated_at(e.target.value)}
                                    />
                                    <input 
                                    type='date'
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='updated_at' 
                                    placeholder={"Update"} 
                                    onChange={(e) => setUpdated_at(e.target.value)}
                                    />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="submit" className="btn btn-md px-5 btn-primary primaryBG">CREATE</button>
                        </div>
                   
                    </div>                     
                </div>
                </form>
            </div>
        </>
    )
}
