import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <div>
      <table>
    <tr>
          <td>Enter Student Name</td>
          <td>
            <input
              type="text"
              value={data.student}
              onChange={(e) =>
                setData({ ...data, student: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Image</td>
          <td>
            <input
              type="text"
              value={data.image}
              onChange={(e) =>
                setData({ ...data, image: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student address</td>
          <td>
            <input
              type="text"
              value={data.address}
              onChange={(e) =>
                setData({ ...data, address: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Mobile Number</td>
          <td>
            <input
              type="text"
              value={data.phone}
              onChange={(e) =>
                setData({ ...data, phone: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student dapartment </td>
          <td>
            <input
              type="text"
              value={data.dapartment}
              onChange={(e) =>
                setData({ ...data, dapartment: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              onClick={() => {
                fetch( "https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((res) => navigate("/"));
              }}
              className="btn btn-primary"
            >
              Save
            </button>
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddStudent;