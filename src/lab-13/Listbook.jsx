import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listproduct() {

    const apiUrl = "https://6abc9eed5121d616d90bba70.mockapi.io/Book";
    
      const [refresh, setRefresh] = useState(false);
      const [data, setData] = useState([]);
    
      useEffect(() => {
        fetch(apiUrl, { method: "GET" })
          .then((res) => res.json())
          .then((res) => setData(res));
      }, [refresh]);

  return (
     <>
      <h1>List of Faculties</h1>
      <Link to="/book/add" className="btn btn-primary">
        Add New
      </Link>
      <div className="container">
        <div className="row">
          {data.map((fac) => {
            return (
              <div className="col-3 p-2">
                <div class="card">
                  <img src={fac.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{fac.book}</h5>
                    <p class="card-text">Code: {fac.authorcode}</p>
                    <button
                      onClick={() => {
                        fetch(
                          "https://6abc9eed5121d616d90bba70.mockapi.io/Book/" + fac.id,
                          {
                            method: "DELETE",
                          },
                        )
                          .then((res) => res.json())
                          .then((res) => setRefresh(!refresh));
                      }}
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                    <Link
                      to={"/book/edit/" + fac.id}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Listproduct