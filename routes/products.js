const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, response) => {
        if(err) throw err;
        res.json(response);
    });
});

router.post('/', (req, res) => {
    const { name, description, price, quantity} = req.body;
    const product = {
        name,
        description,
        price,
        quantity
    }

    const sql = 'INSERT INTO products SET ?';
    db.query(sql, product, (err, response) => {
        if(err) throw err;
        res.json({message: 'Added.'});
    });
});


router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        res.json({message: 'Deleted'});
    });
});


module.exports = router;