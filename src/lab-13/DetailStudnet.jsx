import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailStudnet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const apiUrl ="https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min/";

  useEffect(() => {
    fetch(apiUrl +id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={data.image} className="img-fluid" />
          </div>
          <div className="col">
            <h1>Name: {data.student}</h1>
            <p>email: {data.email}</p>
            <p>phone: {data.phone}</p>
            <p>Dept: {data.dapartment}</p>
            <p>address: {data.address}</p>
             <p>product: {data.product}</p>

             <p>campany: {data.campany}</p>
            
            <button
              onClick={() => {
                setIsDeleting(true);
                fetch(apiUrl +id, { method: "DELETE" })
                  .then((res) => res.json())
                  .then((res) => navigate("/"));
              }}
              className="btn btn-danger"
              disabled={isDeleting}
            >
              {!isDeleting && "Delete"}
              {isDeleting && (
                <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
            &nbsp;
            <Link to={"/students/edit/" + id} className="btn btn-warning">
              Edit
            </Link>
            &nbsp;
            <Link to="/" className="btn btn-info">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStudnet;