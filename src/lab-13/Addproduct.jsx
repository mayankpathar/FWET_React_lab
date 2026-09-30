
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Addproduct() {
     const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  return (
   <div>
      {msg.length > 0 && (
        <div class="alert alert-danger" role="alert">
          {msg}
        </div>
      )}
      <table>
        <tr>
          <td>Enter product Name</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, product: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter company</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, company: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter  Image</td>
          <td>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, image: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              onClick={() => {
                if (data?.facultyName?.length > 0) {
                  fetch("https://6abc9eed5121d616d90bba70.mockapi.io/Product", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                  })
                    .then((res) => res.json())
                    .then((res) => {
                      navigate("/faculties");
                    });
                } else {
                  setMsg("Please enter faculty name");
                }
              }}
              className="btn btn-primary"
            >
              Save
            </button>
            &nbsp;
            <Link to="/faculties" className="btn btn-secondary">
              Back
            </Link>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Addproduct
