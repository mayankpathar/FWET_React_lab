import { useEffect } from 'react'
import { useState } from 'react'
function A1() {
  const api = 'https://6a3b636ce4a07f202e14db14.mockapi.io/mock8min'
const [data, setData] = useState([])
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log('MockAPI data:', data)
      })
      
  }, [])

  return (
    <div>
    <h2>MockAPI Data</h2>
    <table border={1}>
      <thead>
        <tr>
            {/* "student": "Cory Stroman",
    "dapartment": "Jewelry",
    "address": "Danielabury",
    "email": "Dorothy1@hotmail.com",
    "phone": "369.551.2422",
    "image": "https://loremflickr.com/2321/3434?lock=7732361847866752",
    "product": "Cheese",
    "campany": "Olson - Schmitt",
    "id": "1" */}
          <th>student</th>
          <th>dapartment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.student}</td>
            <td>{item.dapartment}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default A1
