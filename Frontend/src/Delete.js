import React, { useState } from 'react';

function DeleteStudent({ onDelete }) {
    const [studentId, setStudentId] = useState('');

    async function handleDelete() {
        try {
            const response = await fetch(`/students/${studentId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                console.log('Student deleted successfully');
                onDelete(); // Call the onDelete callback to update the student list
            } else {
                console.error('Failed to delete student');
            }
        } catch (error) {
            console.error('Error deleting student', error);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter student ID"
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default DeleteStudent;
