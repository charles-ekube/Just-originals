import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const BlogCard = ({ Blogs, setBlogs }) => {
  const Swal = require("sweetalert2");

  const [status, setStatus] = useState("");
  return (
    <>
      {Blogs &&
        Blogs.map((blog) => (
          <main>
            <tr
              className={"align-items-center bg-white"}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <td className={"align-middle"}>
                <input type="checkbox" />
              </td>

              <td className={"align-middle"}>
                <img
                  src={blog.avatar}
                  alt=""
                  className={"rounded border avatar"}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>

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
                <Link to="#">
                  <small>See more</small>
                </Link>
              </td>

              <td className={"align-middle"}>
                <div className="dropleft">
                  <img
                    src={elipses}
                    className={"rounded-circle p-2 dropdown-toggle"}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    alt="poster"
                  />
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <p
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target={`#editModal${id}`}
                    >
                      Edit
                    </p>
                    <p
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target={`#deleteModal${blog.id}`}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <div
              className="modal fade"
              id={`deleteModal${blog.id}`}
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body p-5 text-center">
                    <p>
                      Are you sure you want to remove {blog.title} from the
                      list?
                    </p>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-md px-5 btn-secondary"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="btn btn-md px-5 btn-primary primaryBG"
                      onClick={async () => {
                        let getToken = JSON.parse(
                          localStorage.getItem("currentUser")
                        );
                        let token = getToken.token;
                        const deleteFunction = await fetch(
                          `https://just-original.herokuapp.com/api/v1/blogs/${blog.id}`,
                          {
                            method: "DELETE",
                            headers: {
                              Accept: "application/json",
                              Authorization: "Bearer " + token,
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        
                        if (deleteFunction.status === 200) {
                          Swal.fire({
                            title: "Successful!",
                            text: "Blog Deleted",
                            icon: "success",
                            confirmButtonText: "Continue",
                          }).then(function () {
                            window.location.reload();
                          });
                        }
                      }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id={`editModal${id}`}
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Blog</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-5 text-center">
                    <div className="row">
                      <div className="col-4">
                        <div
                          style={{ height: 120 }}
                          className={"w-100 bg-secondary"}
                        ></div>
                        <small>upload image</small>
                      </div>
                      <div className="col-8">
                        <input
                          className={"mb-3 border greyBG rounded w-100"}
                          placeholder={"Name"}
                        />
                        <input
                          className={"mb-3 border greyBG rounded w-100"}
                          placeholder={"Occupation"}
                        />
                        <textarea
                          className={"mb-3 border greyBG rounded w-100"}
                          placeholder={"Tagline"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-md px-5 btn-primary primaryBG"
                    >
                      CHANGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
      <div>{status}</div>
    </>
  );
};
