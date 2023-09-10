// import OpenModal from "./modalOpen";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function TaskForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrors({ ...errors, description: "" });
  };
  const handleSection = (e) => {
    setSection(e.target.value);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Title is required";
    }
    if (name.trim().length > 10) {
      newErrors.name = "Title shouldn't be more than 10 words";
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    return newErrors;
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    const data = {
      title: name,
      description: description,
      section: section,
    };
    console.log("data", data);
    const apiUrl = "http://localhost:5000/api/v1/todo/create/";
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(apiUrl, data, { headers })
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          toast.success("Task Created");
        }
      })
      .catch((error) => {
        toast.error("Task Failed");
        console.log("Error", error);
      });
  };

  return (
    <>
      <div className="row">
        <div className="my-2">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          ></input>
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="my-2">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
          ></input>
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="statusDropdown" className="form-label">
            Select Status:
          </label>
          <select
            className="form-select"
            id="statusDropdown"
            value={section}
            onChange={handleSection}
          >
            <option value="to-do">To-Do</option>
            <option value="in-progress">In Progress</option>
            <option value="checking">Checking</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-success"
            onClick={submitHandeler}
          >
            Set Task
          </button>
        </div>
      </div>
    </>
  );
}
