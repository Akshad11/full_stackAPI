import React, { useEffect, useState } from 'react';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, []);

    async function fetchStudents() {
        try {
            const response = await fetch('/students');
            const data = await response.json();
            setStudents(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching students', error);
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p>No students found</p>
            ) : (
                <ul>
                    {students.map((student) => (
                        <li key={student._id}>{student.name}<br />{student.rollNo}<br />{student.subject}<br />{student.marks}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default StudentList;

