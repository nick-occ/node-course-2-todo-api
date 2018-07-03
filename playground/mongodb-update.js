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
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b3ae81f224d0d0a545d053d")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b37fd25224d0d0a545cfc48")
    }, {
        $set: {
            name: 'Nicholas Occhipinti'
        },
        $inc: {
            age: 1 
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    // db.close()
});