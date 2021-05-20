import React, { useState, useEffect } from "react";
import { AdminNav, Sidebar } from "../../../Components";
import { UserCardBig } from "../../../Components/userCardBig";

const id = String(Math.random()).split(".").join("_");

export const HomeScreen = () => {
  const Swal = require("sweetalert2");

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [business_type, setBusiness_Type] = useState("");
  const [bio, setBio] = useState("");
  // const [category_id, setCategory_id] = useState("");
  // const [content, setContent] = useState("");

  const handleClientUpdate = async (e) => {
    e.preventDefault();
    console.log(name, business_type, bio, avatar);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("business_type", business_type);
    // formData.append("category_id", category_id);
    formData.append("avatar", avatar);
    // formData.append("content", content);
   
    let getToken = JSON.parse(localStorage.getItem("currentUser"));
    let token = getToken.token;
    let result = await fetch(
      `https://just-original.herokuapp.com/api/v1/clients`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );

    if(result.status === 201) {
        Swal.fire({
            title: "Success!",
            text: "Blog Uploaded Successfully",
            icon: "success",
            confirmButtonText: "Continue",
          }).then(function () {
            window.location.reload();
          });
    }
  };


  const [Clients, setClients] = useState([]);
  const [EmptyState, setEmptyState] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/clients`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setClients(lists);
      }
      if (!item) {
        setEmptyState("No Clients Found.");
      }
    };
    fetchClients();
  }, []);




  return (
    <>
      <Sidebar />
      <AdminNav />
      <div className="px-4 page-container">
        <h4 className="mt-5">
          <b>Homescreen</b>
        </h4>

        <div className="mt-5 homeScreen_add rounded">
        <div className={"homeScreen_search"}>
          <input
            className={"p-2 rounded"}
            placeholder={"Search by Name, Business Type"}
          />
        </div>
        <button
            data-toggle="modal"
            data-target={`#createModal${id}`}
            className={
              "primaryText border h-100 px-5 text-white rounded font-weight-bold"
            }
          >
            NEW CLIENT
          </button>
        </div>
        <p className={"my-2 ml-2"}>
          <small>Note: All images must be in Jpeg format</small>
        </p>

      
        <div className={"my-5"}>
          <UserCardBig  clients={Clients} setClients={setClients}/>
          <div className="pt-5">{EmptyState}</div>
        </div>


        <div
          className="modal fade"
          id={`createModal${id}`}
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <form onSubmit={handleClientUpdate}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Blog</h5>
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
                      <input
                        style={{
                          background: "#eee",
                          height: "120px",
                          width: "120px",
                        }}
                        type="file"
                        name="avatar"
                        placeholder="Upload Image"
                        onChange={(e) => setAvatar(e.target.files[0])}
                      />
                    </div>
                    <div className="col-8">
                      <input
                        className={"mb-3 border greyBG rounded w-100"}
                        placeholder={"Name"}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className={"mb-3 border greyBG rounded w-100"}
                        name="business_type"
                        placeholder={"Business"}
                        onChange={(e) => setBusiness_Type(e.target.value)}
                      />
                      <textarea
                        className={"mb-3 border greyBG rounded w-100"}
                        placeholder={"Write-Up"}
                        name="bio"
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-md px-5 btn-primary primaryBG"
                  >
                    CREATE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
