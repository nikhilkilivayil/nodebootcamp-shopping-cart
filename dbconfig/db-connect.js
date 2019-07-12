let MongoClient = require('mongodb').MongoClient;

let state = {
    db: null,
};

module.exports.connect = function (done) {


    // Connection URL
    const url = 'mongodb://localhost:27017';

// Database Name
    const dbName = 'shopping';

// Create a new MongoClient
    const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server
    client.connect(function(err) {
        if (err) return done(err);
        //assert.equal(null, err);
        console.log("Connected successfully to Database");

        const dbs = client.db(dbName);
        state.db=dbs;
        done();
    });
};

module.exports.get = function () {
    return state.db;
};
