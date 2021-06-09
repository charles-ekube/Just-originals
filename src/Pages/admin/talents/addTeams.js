import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { BackToggle } from "../../../Components/toggle/backbtn";

export const AddTeams = (props) => {
  const Swal = require("sweetalert2");

  const { state } = useLocation();
  let query = state?.talent_id;

  const [team_member, setTeamMember] = useState("");
  const [project_id, setProject_id] = useState("");

  const handleAddTestimonies = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("team_member", team_member);
    formData.append("project_id", project_id);

    let getToken = JSON.parse(localStorage.getItem("currentUser"));
    let token = getToken.token;
    let result = await fetch(
      `https://just-original.herokuapp.com/api/v1/talents/${query}/teams`,
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

  const [Projects, setProjects] = React.useState([]);
  const [EmptyState, setEmptyState] = React.useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/projects`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setProjects(lists);
      }
      if (!item) {
        setEmptyState("No Projects Found.");
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="px-4 container pb-5">
      <BackToggle/>
      <h4 className="mt-5">
        <b>Add Teams</b>
      </h4>

      <form onSubmit={handleAddTestimonies}>
        <div className={"my-5 row"}>
          <div className={"col-10"}>
            <div className={"w-100"} style={{ height: 290 }}>
              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Team Member:</label>
                <input
                  type="text"
                  className={"w-50 border p-2 bg-white rounded small"}
                  placeholder={"Team Member"}
                  name="team_member"
                  onChange={(e) => setTeamMember(e.target.value)}
                />
              </div>
              <div className={"d-flex my-3"}>
                <label className={"small w-25"}>Choose Project</label>
                <input
                  list="projects_list"
                  id="projects"
                  className={"w-50 border p-2 bg-white rounded small"}
                  placeholder={"Choose a project"}
                  name="project_id"
                  autoComplete="off"
                  onChange={(e) => setProject_id(e.target.value)}
                />
                <datalist id="projects_list">
                  {Projects &&
                    Projects.map((project) => (
                      <option
                        key={project.id}
                        name="project_id"
                        value={project.id}
                      >
                        {project.title}
                      </option>
                    ))}
                    <option>{EmptyState}</option>
                </datalist>
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
        </div>
      </form>
    </div>
  );
};
