import React from "react";
import user from "../../Assets/ex1.png";
import elipses from "../../Assets/elipses.svg";

const id = String(Math.random()).split(".").join("_");

export const UserCardBig = ({ Clients, setClients }) => {
  const Swal = require("sweetalert2");

  return (
    <>
      {Clients &&
        Clients.map((client) => (
          <div>
            <div className="bg-white border p-4 align-items-center bigUserCard mb-2">
              <img
                src={client.avatar}
                alt={""}
                className={""}
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />

              <div>
                <h6>{client.name}</h6>
                <p>{client.business_type}</p>
              </div>

              <p>{client.bio}</p>

              <div className="dropleft">
                <img
                  src={elipses}
                  className={"rounded-circle p-2 dropdown-toggle"}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p
                    className="dropdown-item"
                    data-toggle="modal"
                    data-target={`#deleteModal${id}`}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id={`deleteModal${client.id}`}
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
                      Are you sure you want to remove {client.name}from the
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
                          `https://just-original.herokuapp.com/api/v1/talents/${client.id}`,
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
                            text: "Project Deleted",
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
          </div>
        ))}
    </>
  );
};
