import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function A1() {
  const api = 'https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min'
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(api, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log('MockAPI data:', data)
      })
  }, [])

  
  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse'
  };

  return (
    <div className='container p-2'>
      <h2>CRUD</h2>
      <Link to="/studentform">
        <button className="btn btn-primary ms-2">Add</button>
      </Link>
      <table style={tableStyle}>
        <thead>
          <tr style={tableStyle} className="table table-striped p-2">
            <th style={tableStyle}>id</th>
            <th style={tableStyle}>roll</th>
            <th style={tableStyle}>Image</th>
            <th style={tableStyle}>student</th>
            <th style={tableStyle}>department</th>
            <th style={tableStyle}>Email</th>
            <th style={tableStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={tableStyle} className="p-2">
              <td style={tableStyle}>{index}</td>
              <td style={tableStyle}>{index + 1}</td>
              <td style={tableStyle}>
                <img
                  src={item.image || item.avatar || item.img || "https://via.placeholder.com/50x50?text=Student"}
                  alt={item.student || "Student"}
                  style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
                />
              </td>
              <td style={tableStyle}>{item.student}</td>
              <td style={tableStyle}>{item.dapartment}</td>
              <td style={tableStyle}>{item.email}</td>
              <td style={tableStyle}>
                <Link to={`/studentdetails/${item.id}`}>
                  <button className="btn btn-info m-2">Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default A1