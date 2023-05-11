const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase';

let db;

async function connect() {
    try {
        const client = await MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

function getDb() {
    return db;
}

module.exports = { connect, getDb };
