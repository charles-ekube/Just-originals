import React, {useState, useEffect} from 'react'
import { BlogCard, Sidebar } from '../../../Components';

const id = String(Math.random()).split(".").join("_");

export const AdminBlog = () => {

    const [title, setTitle] = useState("");
    const [avatar, setAvatar] = useState("");
    const [url, setUrl] = useState("");
    const [writer, setWriter] = useState("");
    const [category_url, setCategory_url] = useState("");
    const [description, setDescription] = useState("");
    

    const handleBlogUpdate = async (e) => {
        e.preventDefault();
        console.log(title, url, writer, category_url, avatar, description);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('url', url);
        formData.append('writer', writer);
        formData.append('category_url', category_url);
        formData.append('avatar', avatar);
        formData.append('description', description);

        
        let result = await fetch(`https://just-original.herokuapp.com/api/v1/blogs`,{
            method : 'POST',
            body : formData
        }) ;
        alert('updated');
        console.log(result);
    }


    const [Blogs, setBlogs] = React.useState([]);

        useEffect(() => {
    
            const fetchBlogs = async () => {
     
            
                const response = await fetch(`https://just-original.herokuapp.com/api/v1/projects`);
                const data = await response.json()
                const item = data.data ;
                const lists = Object.values(item);
                setBlogs(lists);
            }
            fetchBlogs();
        }, []);

        const [showNav, setShowNav] = React.useState(false);
        const handleShowNav = () => {
            setShowNav(prev => !prev);
       }
    

    return (


        <>
        
         <Sidebar showNav={showNav} setShowNav={setShowNav}/>
         <button
        onClick={handleShowNav}
        className='open-menu'
    ></button>
        <div className="px-4 container">
            <h4 className="mt-5"><b>Blog</b></h4>

            <div className="mt-5 blog_add rounded align-items-center">
                <p className={"border-right pr-2"}>Filter</p>

                <select className={"border-0 border-right rounded greyBG p-2"}>
                    <option>Category</option>
                    <option>Show Non Active</option>
                    <option>Show Rejected</option>
                </select>
                <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />
                <button data-toggle="modal" data-target={`#createModal${id}`} className={"primaryText border h-100 px-5 text-white rounded font-weight-bold"}>NEW BLOG</button>

            </div>

            <div className={"my-5 table-responsive"}>
                <table className={"table text-center table-hover"}>
                    <thead >
                        
                        <tr className={"grey200"} style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)'}}>
                                <th><input type="checkbox" /></th>
                                <th>Image</th>
                                <th className={"text-left"}>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Writer</th>     
                                <th>Action</th>
                            </tr>
                           
                        
                    </thead>

                    <tbody>
                        <BlogCard  Blogs={Blogs} setBlogs={setBlogs}/>
                    </tbody>
                </table>
            </div>

            {/* create modal */}
            <div className="modal fade" id={`createModal${id}`} tabindex="-1" role="dialog" aria-hidden="true">
                <form onSubmit={handleBlogUpdate}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Blog</h5>
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
                                     placeholder={"Title"} 
                                     name='title'
                                     onChange={(e) => setTitle(e.target.value)}
                                     />
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='url' 
                                    placeholder={"Tagline"} 
                                    onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='category_url' 
                                    placeholder={"Category"} 
                                    onChange={(e) => setCategory_url(e.target.value)}
                                    />
                                    
                                    <input 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    name='writer' 
                                    placeholder={"Author"} 
                                    onChange={(e) => setWriter(e.target.value)}
                                    />
                                    
                                    <textarea 
                                    className={"mb-3 border greyBG rounded w-100"} 
                                    placeholder={"Description"}
                                    name='content'
                                    onChange={(e) => setDescription(e.target.value)}
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

        </div>
        </>
    )
}
