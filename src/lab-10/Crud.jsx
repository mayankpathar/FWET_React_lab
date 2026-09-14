import React, { useState } from 'react'

function Crud() {
    const [stulist, setstulist] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [student, setstudent] = useState({
        fname: "",
        lname: "",
        age: "",
        spi: ""
    });
    const handleadd = () => {
        if (!student.fname || !student.lname || !student.age || !student.spi) {
            alert("please enter all fields")
            return
        } else if (editingIndex !== null) {
            setstulist(stulist.map((stu, index) => (
                index === editingIndex ? student : stu
            )));
            setEditingIndex(null);
            setstudent({
                fname: "",
                lname: "",
                age: "",
                spi: ""
            });
        } else {
            setstulist([...stulist, student]);
            setstudent({
                fname: "",
                lname: "",
                age: "",
                spi: ""
            })
        }
    }
    const handledelete = (i) => {
        const newarr = [...stulist];
        newarr.splice(i, 1);
        setstulist(newarr);
    }

    const handleedit = (i) => {
        setstudent(stulist[i]);
        setEditingIndex(i);
    }
    return (
        <>
            <label htmlFor="">first name</label>
            <input type="text" value={student.fname} onChange={(e) => {
                setstudent({ ...student, fname: e.target.value })
            }} />
            <br />
            <br />
            <label htmlFor="">last name:</label>
            <input type="text" value={student.lname} onChange={(e) => {
                setstudent({ ...student, lname: e.target.value })
            }} />
            <br />
            <br />
            <label htmlFor="">age</label>
            <input type="text" value={student.age} onChange={(e) => {
                setstudent({ ...student, age: e.target.value })
            }} />
            <br />
            <br />
            <label htmlFor="">spi</label>
            <input type="text" value={student.spi} onChange={(e) => {
                setstudent({ ...student, spi: e.target.value })
            }} />
            <br />
            <br />
            <button onClick={handleadd}>{editingIndex === null ? "add" : "save"}</button>
            {editingIndex !== null && <button onClick={() => {
                setEditingIndex(null);
                setstudent({ fname: "", lname: "", age: "", spi: "" });
            }}>cancel</button>}
          
            <br /><br />
            <button></button>
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>age</th>
                        <th>spi</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stulist.map((stu, index) => {
                            return <>
                                <tr key={index}>
                                    <td>{stu.fname}</td>
                                    <td>{stu.lname}</td>
                                    <td>{stu.age}</td>
                                    <td>{stu.spi}</td>
                                    <td><button onClick={() => {
                                        handleedit(index)
                                    }}>edit</button>
                                        <button onClick={() => {
                                            handledelete(index)
                                        }}>delete</button></td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Crud
