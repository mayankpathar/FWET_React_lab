import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListStudents() {
  const apiUrl = "https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>List of Students</h1>
      <Link to="/students/add" className="btn btn-primary">
        Add New
      </Link>
      <div className="container">
        <div className="row">
          {data.map((stu) => {
            return (
              <div className="col-3 p-2">
                <div class="card">
                  <img src={stu.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{stu.student}</h5>
                    <p class="card-text">
                      Dept: {stu.dapartment}
                      <br />
                      Roll: {stu.campany}
                    </p>
                    <Link to={"/students/" + stu.id} class="btn btn-primary">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListStudents;