import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function StudentForm() {
  const API_URL = "https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min";
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    student: "",
    dapartment: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    campany: "",
    image: ""
  });

  useEffect(() => {
    if (isEditMode) {
      fetch(`${API_URL}/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = isEditMode
      ? fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      : fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

    request
      .then((res) => res.json())
      .then(() => navigate("/"));
  };

  return (
    <div className="container p-2">
      <h2>{isEditMode ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Student</label>
          <input
            className="form-control"
            name="student"
            value={formData.student}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Department</label>
          <input
            className="form-control"
            name="dapartment"
            value={formData.dapartment}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Image</label>
          <input
            className="form-control"
            name="image"
            value={formData.image }
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            name="phone"
            value={formData.phone }
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Address</label>
          <input
            className="form-control"
            name="address"
            value={formData.address }
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary m-2" type="submit">
          {isEditMode ? "Update" : "Save"}
        </button>
      </form>
    </div>
  )
}

export default StudentForm