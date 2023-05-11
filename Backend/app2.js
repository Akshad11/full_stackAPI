const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mydatabase'
// Getting all the courses
app.get('/api/courses', (req, res) => {
    MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!')
        }
        const db = client.db(databaseName)
        const output = db.collection('courses').find().toArray(function (err, results) {
            console.log(results)
            res.send(results)
            // send HTML file populated with quotes here
        })
    })
});

// Posting a course
app.post('/api/course', (req, res) => {
    console.log(req.body.courseName)
    console.log(req.body.courseDuration)
    MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!')
        }
        const db = client.db(databaseName)
        db.collection('courses').insertOne({
            courseName: req.body.courseName,
            courseDuration: req.body.courseDuration
        })
    })

    const posted = [{ posted: 'Yes' }];
    res.send(posted);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
