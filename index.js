const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
