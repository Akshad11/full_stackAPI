import React, { useState } from 'react';

function AddStudent() {
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
            const response = await fetch('/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (response.ok) {
                console.log('Student added successfully');
                // Reset form fields after successful submission
                setName('');
                setRollNo('');
                setSubject('');
                setMarks('');
            } else {
                console.error('Failed to add student');
            }
        } catch (error) {
            console.error('Error adding student', error);
        }
    }

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;
