import React, { useState } from 'react';

function UpdateStudent() {
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [subject, setSubject] = useState('');
    const [marks, setMarks] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const student = {
            name,
            rollNo,
            subject,
            marks
        };

        try {
            const response = await fetch(`/students/${studentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (response.ok) {
                console.log('Student updated successfully');
                // Reset form fields after successful submission
                setStudentId('');
                setName('');
                setRollNo('');
                setSubject('');
                setMarks('');
            } else {
                console.error('Failed to update student');
            }
        } catch (error) {
            console.error('Error updating student', error);
        }
    }

    return (
        <div>
            <h2>Update Student</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Student ID:
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Roll No:
                    <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                </label>
                <br />
                <label>
                    Subject:
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>
                <br />
                <label>
                    Marks:
                    <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)} />
                </label>
                <br />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}

export default UpdateStudent;
