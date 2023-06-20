const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const uri = 'mongodb+srv://nursena:nv12345.@stockmate.apmx0qk.mongodb.net/stockmate';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    // Do something with the connection
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();


router.post('/', async (req, res) => {
  try {
    await client.connect();

    const personCollection = client.db('stockmate').collection('persons');
    const result = await personCollection.insertOne(req.body);
    console.log(`Added person with ID: ${result.insertedId}`);

    res.status(201).json({ message: 'Person registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error person user' });
  } finally {
    await client.close();
  }
});

module.exports = router;