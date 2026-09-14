import { useState } from "react";

const emptyStudent = {
  firstName: "",
  lastName: "",
  age: "",
  spi: "",
};

function CRUD1() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(emptyStudent);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((currentStudent) => ({ ...currentStudent, [name]: value }));
    setError("");
  };

  const resetForm = () => {
    setStudent(emptyStudent);
    setEditingId(null);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!student.firstName || !student.lastName || !student.age || !student.spi) {
      setError("Please enter all student details.");
      return;
    }

    if (editingId === null) {
      setStudents((currentStudents) => [
        ...currentStudents,
        { ...student, id: Date.now() },
      ]);
    } else {
      setStudents((currentStudents) =>
        currentStudents.map((currentStudent) =>
          currentStudent.id === editingId
            ? { ...student, id: editingId }
            : currentStudent,
        ),
      );
    }

    resetForm();
  };

  const handleEdit = (studentToEdit) => {
    setStudent({
      firstName: studentToEdit.firstName,
      lastName: studentToEdit.lastName,
      age: studentToEdit.age,
      spi: studentToEdit.spi,
    });
    setEditingId(studentToEdit.id);
    setError("");
  };

  const handleDelete = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.filter((currentStudent) => currentStudent.id !== studentId),
    );

    if (editingId === studentId) {
      resetForm();
    }
  };

  return (
    <main>
      <h1>Student CRUD Operations</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label>
          Age
          <input
            name="age"
            value={student.age}
            onChange={handleChange}
            type="number"
            min="1"
          />
        </label>
        <label>
          SPI
          <input
            name="spi"
            value={student.spi}
            onChange={handleChange}
            type="number"
            min="0"
            max="10"
            step="0.01"
          />
        </label>
        {error && <p role="alert">{error}</p>}
        <button type="submit">
          {editingId === null ? "Add student" : "Update student"}
        </button>
        {editingId !== null && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>SPI</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5">No students added yet.</td>
            </tr>
          ) : (
            students.map((currentStudent) => (
              <tr key={currentStudent.id}>
                <td>{currentStudent.firstName}</td>
                <td>{currentStudent.lastName}</td>
                <td>{currentStudent.age}</td>
                <td>{currentStudent.spi}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleEdit(currentStudent)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(currentStudent.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}

export default CRUD1;
