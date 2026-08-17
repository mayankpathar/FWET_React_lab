import React from 'react'

function Map_List() {
  const students = [
    {
    "name": "Angelina Roob",
    "branch": "hard-drive-navigate",
    "enrolment": "4456",
    "city": "West Felton",
    "spi": "8.1"
  },
  {
    "name": "Kristy Rempel",
    "branch": "system-bypass",
    "enrolment": "140",
    "city": "Chandler",
    "spi": "6"
  },
  {
    "name": "Miss Elvira Gleichner",
    "branch": "feed-copy",
    "enrolment": "6576",
    "city": "Ullrichberg",
    "spi": "9.3"
  },
  {
    "name": "Eduardo Huels",
    "branch": "firewall-index",
    "enrolment": "49516",
    "city": "Cummingstown",
    "spi": "9.5"
  },
  {
    "name": "Mamie Collier",
    "branch": "hard-drive-quantify",
    "enrolment": "1830",
    "city": "East Berry",
    "spi": "6.7"
  },
  {
    "name": "Kellie Kling",
    "branch": "firewall-transmit",
    "enrolment": "611",
    "city": "Sterling Heights",
    "spi": "7"
  },
  {
    "name": "Eloise Satterfield III",
    "branch": "port-bypass",
    "enrolment": "65460",
    "city": "Orange",
    "spi": "7.6"
  }
  ]

  return (
    <>
 
                {students.map((students,index) =>{
                    return (
                        <>
                        <ol>
                            <li>{index + 1}</li>
                            <li>{students.name}</li>
                            <li>{students.branch}</li>
                            <li>{students.enrolment}</li>
                            <li>{students.city}</li>
                            <li>{students.spi}</li>
                     </ol>
                        </>
                    )
                })}
           
    </>
  )
}

export default Map_List