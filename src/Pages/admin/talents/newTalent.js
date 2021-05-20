import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../../../Assets/ex1.png";
import Swal from "sweetalert2";

export const NewTalent = () => {
  const Swal = require("sweetalert2");

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [services, setServices] = useState("");
  const [category_id, setCategory_id] = useState("");

  const handleTalentUpdate = async (e) => {
    e.preventDefault();
    console.log(name, services, category_id, avatar);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("services", services);
    formData.append("category_id", category_id);
    formData.append("avatar", avatar);

    let getToken = JSON.parse(localStorage.getItem("currentUser"));
    let token = getToken.token;
    let result = await fetch(
      `https://just-original.herokuapp.com/api/v1/talents`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );
    if (result.status === 201) {
      Swal.fire({
        title: "Success!",
        text: "Project Uploaded Successfully",
        icon: "success",
        confirmButtonText: "Continue",
      }).then(function () {
        window.location.reload();
      });
    }
  };

  return (
    <div className="px-4 container pb-5">
      <h4 className="mt-5">
        <b>New Talent</b>
      </h4>

      <form onSubmit={handleTalentUpdate}>
        <div className={"my-5 row"}>
          <div className={"col-4 text-center"}>
            <input
              style={{ background: "#eee", height: "120px", width: "120px" }}
              type="file"
              name="avatar"
              placeholder="Upload Image"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>

          <div className={"col-8"}>
            <div className={"w-100"} style={{ height: 290 }}>
              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Name:</label>
                <input
                  className={"w-50 border p-2 bg-white rounded small"}
                  placeholder={"Enter name"}
                  name="title"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Category:</label>
                <input
                  className={"w-50 border p-2 bg-white rounded small"}
                  placeholder={"Category"}
                  name="category_id"
                  onChange={(e) => setCategory_id(e.target.value)}
                />
              </div>
              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Services:</label>
                <input
                  className={"w-50 border p-2 bg-white rounded small"}
                  placeholder={"Service"}
                  name="services"
                  onChange={(e) => setServices(e.target.value)}
                />
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="submit"
                  className="btn btn-md px-5 btn-primary primaryBG"
                >
                  CREATE
                </button>
              </div>

              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Team:</label>

                <div className={"w-50"}>
                  <div className={"d-flex mt-4"}>
                    <img
                      alt={""}
                      style={{ width: 32, height: 32 }}
                      className={"mr-2 bg-secondary"}
                    />
                    <input
                      className={"border bg-white rounded p-2 small w-100"}
                      placeholder={"New Team name"}
                    />
                  </div>
                </div>
              </div>

              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Previous Clients:</label>

                <div className={"w-50"}>
                  <div className={"d-flex mt-4"}>
                    <img
                      alt={""}
                      style={{ width: 32, height: 32 }}
                      className={"mr-2 bg-secondary"}
                    />
                    <input
                      className={"border bg-white rounded p-2 small w-100"}
                      placeholder={"New name"}
                    />
                  </div>
                </div>
              </div>

              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Previous Projects:</label>

                <div className={"w-50"}>
                  <div className={"d-flex mt-4"}>
                    <img
                      alt={""}
                      style={{ width: 32, height: 32 }}
                      className={"mr-2 bg-secondary"}
                    />
                    <input
                      className={"border bg-white rounded p-2 small w-100"}
                      placeholder={"New name"}
                    />
                  </div>
                </div>
              </div>

              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Testimonials:</label>

                <div className={"w-50 mb-5"}>
                  <div className={"d-flex mt-4"}>
                    <img
                      alt={""}
                      style={{ width: 32, height: 32 }}
                      className={"mr-2 bg-secondary"}
                    />

                    <div className={"w-100"}>
                      <input
                        className={"border bg-white rounded p-2 small w-100"}
                        placeholder={"Enter Category name"}
                      />
                      <textarea
                        className={
                          "border bg-white rounded p-2 small w-100 mt-2"
                        }
                        placeholder={"Enter Category name"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
