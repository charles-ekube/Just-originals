import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const BlogCard = ({Blogs, setBlogs}) => {
    return (
        <>
        {Blogs && Blogs.map(blog => (   
        
        <main>
            <tr className={"align-items-center bg-white"}>
                <td className={"align-middle"}><input type="checkbox" /></td>

                <td className={"align-middle"}><img src={blog.avatar} alt="" className={"rounded border avatar"}  width='50px' height='50px'/></td>

                <td className={"align-middle text-left text-wrap"}>
                    <p>{blog.title}</p>
                </td>

                <td className={"align-middle text-nowrap"}>
                    <p>{blog.category_url}</p>
                </td>

                <td className={"align-middle text-nowrap"}>
                    <p>{blog.created_at}</p>
                </td>

                <td className={"align-middle text-nowrap"}>{blog.writer}</td>

                <td className={"align-middle text-nowrap text-right"}>
                    <Link to="#"><small>See more</small></Link>
                </td>

                <td className={"align-middle"}>
                    <div className="dropleft">
                        <img src={elipses} className={"rounded-circle p-2 dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  alt='poster'/>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className="dropdown-item" data-toggle="modal" data-target={`#editModal${id}`} >Edit</p>
                            <p className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${id}`}>Remove</p>
                        </div>
                    </div>
                </td>
            </tr>

            
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
                            <h5 className="modal-title">Edit Blog</h5>
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
            </main>
        ))}
        </>
    )
}
