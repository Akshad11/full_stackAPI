import React, { useEffect, useState } from 'react';

function GetStudentById() {
    const [student, setStudent] = useState(null);
    const [studentId, setStudentId] = useState('');

    async function fetchStudent() {
        try {
            const response = await fetch(`/students/${studentId}`);
            const data = await response.json();
            setStudent(data);
        } catch (error) {
            console.error('Error fetching student', error);
        }
    }

    function handleInputChange(event) {
        setStudentId(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetchStudent();
    }

    return (
        <div>
            <h2>Get Student by ID</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Student ID:
                    <input type="text" value={studentId} onChange={handleInputChange} />
                </label>
                <button type="submit">Get Student</button>
            </form>
            {student && (
                <div>
                    <h3>Student Details</h3>
                    <p>Name: {student.name}</p>
                    <p>Roll No: {student.rollNo}</p>
                    <p>Subject: {student.subject}</p>
                    <p>Marks: {student.marks}</p>
                </div>
            )}
        </div>
    );
}

export default GetStudentById;
