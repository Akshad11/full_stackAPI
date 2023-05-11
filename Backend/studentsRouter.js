const express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('./db');

const router = express.Router();
const collectionName = 'students';

// GET all students
router.get('/', async (req, res) => {
    try {
        const db = getDb();
        const students = await db.collection(collectionName).find().toArray();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error retrieving students from the database', error);
        res.status(500).send('Error retrieving students from the database');
    }
});

// GET a specific student by MongoDB ObjectId
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const db = getDb();
        const student = await db.collection(collectionName).findOne({ _id: ObjectId(id) });

        if (!student) {
            res.status(404).send('Student not found');
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        console.error('Error retrieving student from the database', error);
        res.status(500).send('Error retrieving student from the database');
    }
});

// POST a new student
router.post('/', async (req, res) => {
    const student = req.body;

    try {
        const db = getDb();
        const result = await db.collection(collectionName).insertOne(student);
        res.status(201).send('Student inserted successfully');
    } catch (error) {
        console.error('Error inserting student into the database', error);
        res.status(500).send('Error inserting student into the database');
    }
});

// PUT (update) an existing student by MongoDB ObjectId
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;

    try {
        const db = getDb();
        const result = await db
            .collection(collectionName)
            .updateOne({ _id: ObjectId(id) }, { $set: updatedStudent });

        if (result.modifiedCount === 0) {
            res.status(404).send('Student not found');
        } else {
            res.status(200).send('Student updated successfully');
        }
    } catch (error) {
        console.error('Error updating student in the database', error);
        res.status(500).send('Error updating student in the database');
    }
});

// DELETE a student by MongoDB ObjectId
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const db = getDb();
        const result = await db.collection(collectionName).deleteOne({ _id: ObjectId(id) });

        if (result.deletedCount === 0) {
            res.status(404).send('Student not found');
        } else {
            res.status(200).send('Student deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting student from the database', error);
        res.status(500).send('Error deleting student from the database');
    }
});

module.exports = router;
