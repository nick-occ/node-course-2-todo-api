// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{
    useNewUrlParser: true
},
(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Nicholas Occhipinti',
    //     age: 37,
    //     location: 'Charlotte'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }

    //     console.log(res.ops[0]._id.getTimestamp());
    // })

    client.close();
});