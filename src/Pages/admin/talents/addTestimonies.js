import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";


export const AddTestimonies = (props) => {

    const { state } = useLocation();
    let query = state?.talent_id;
    
    const [content, setContent] = useState("");
    const [project_id, setProject_id] = useState("");
    

    const handleAddTestimonies = async (e) => {
        e.preventDefault();
        console.log(content);
        const formData = new FormData();
        formData.append('content', content);
        formData.append('project_id', project_id);
    
        
        let result = await fetch(`https://just-original.herokuapp.com/api/v1/talents/${query}/testimonies`,{
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
  
    


    return (
        <div className="px-4 container pb-5">
            <h4 className="mt-5"><b>Add Testimonies</b></h4>

            <form onSubmit={handleAddTestimonies}>
            <div className={"my-5 row"}>
                
                <div className={"col-10"}>
                    <div className={"w-100"} style={{ height: 290 }}>
                        
                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Testimony:</label>
                            <input
                                type='text'
                                className={"w-50 border p-2 bg-white rounded small"} 
                                placeholder={"Testimony"} 
                                name='content'
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className={"d-flex my-3"}>
                            <label className={"small w-25"}>Choose Project</label>
                            <input
                                list='projects_list'
                                id='projects'
                                className={"w-50 border p-2 bg-white rounded small"} 
                                placeholder={"Choose a project"} 
                                name='project_id'
                                autoComplete='off'
                                onChange={(e) => setProject_id(e.target.value)}
                            />
                            <datalist id="projects_list">
                                {Projects && Projects.map((project) => (
                                    <option key={project.id} name='project_id' value={project.id} >
                                        {project.title}
                                    </option>

                                ))}
                            </datalist>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="submit" className="btn btn-md px-5 btn-primary primaryBG">CREATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}
