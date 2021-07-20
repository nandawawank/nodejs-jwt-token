const express = require('express');
require('./configs/database');
const cors = require('cors');
require('dotenv').config();

const router = require('../src/routes/userRoutes');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log('rest api is running in http://localhost:'+port);
})

