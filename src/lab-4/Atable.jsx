import React from 'react'

function Atable() {
    const student = [
  {
    "name": "Clarence Harvey",
    "gmail": "Eric45@gmail.com",
    "phone": "1-611-831-6743 x4505",
    "department": "Electronics",
    "id": "1"
  },
  {
    "name": "Sonja Reynolds",
    "gmail": "Kayla.Kunde23@gmail.com",
    "phone": "366.521.8885 x777",
    "department": "Books",
    "id": "2"
  },
  {
    "name": "Paulette Lueilwitz",
    "gmail": "Ofelia.Mann@hotmail.com",
    "phone": "905.980.1584",
    "department": "Grocery",
    "id": "3"
  },
  {
    "name": "Rachel Jaskolski DDS",
    "gmail": "Crystel_Champlin@yahoo.com",
    "phone": "(807) 823-7343",
    "department": "Baby",
    "id": "4"
  },
  {
    "name": "Leland Metz",
    "gmail": "Ruby.Greenfelder@yahoo.com",
    "phone": "1-263-274-4980",
    "department": "Movies",
    "id": "5"
  },
  {
    "name": "Darrin Schmidt",
    "gmail": "Gudrun.Auer87@yahoo.com",
    "phone": "782.661.4189 x463",
    "department": "Home",
    "id": "6"
  },
  {
    "name": "Patricia Kertzmann MD",
    "gmail": "Rylan_Sauer37@hotmail.com",
    "phone": "1-278-659-6794 x254",
    "department": "Sports",
    "id": "7"
  },
  {
    "name": "Melvin Bergstrom",
    "gmail": "Michael_Hegmann@hotmail.com",
    "phone": "(308) 754-2493 x33970",
    "department": "Tools",
    "id": "8"
  }
]
  return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <th>eid</th>
                <th>id</th>
                <th>name</th>
                <th>gamil</th>
                <th>department</th>
                <th>phone</th>
            </tr>
        </thead>
        <tbody>
            {
                student.length> 0 ? (student.map((s,index) => {
               return <tr key={index}>
                <td>{index+1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.gmail}</td>
                <td>{s.department}</td>
                <td>{s.phone}</td>
               </tr>
            })): (<h1>not student</h1>)
            } 
        </tbody>
      </table>
    </>
  )
}

export default Atable
