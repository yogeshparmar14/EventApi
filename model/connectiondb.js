const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = 'createapi';

async function dbConnect() {
  // Use connect method to connect to the server
 let result= await client.connect();
  console.log('Connected successfully to server');
  const db = result.db(database);
  return db.collection('event');
}

 module.exports = dbConnect