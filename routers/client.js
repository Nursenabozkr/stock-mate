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

    const clientCollection = client.db('stockmate').collection('clients');
    const result = await clientCollection.insertOne(req.body);
    console.log(`Added client with ID: ${result.insertedId}`);

    res.status(201).json({ message: 'Person registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error client user' });
  } finally {
    await client.close();
  }
});

module.exports = router;