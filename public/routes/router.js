const express = require('express');
const router = express.Router();
const DB = require('../database/db');

// GET
router.get('/customer/select', (req, res) => {
    DB.selectData().then((data) => {
        res.send(data);
        // or res.json(data);
    }).catch((err) => {
        console.log(err + 'in /customer/select');
    });
});

// POST
router.post('/customer/insert', (req, res) => {
    DB.insertData(req.body).then((msg) => {
        console.log(msg);
        res.redirect('/');
    }).catch((err) => {
        console.log(err + 'in /customer/insert');
    })
});

// PUT
router.post('/customer/update', (req, res) => {
    DB.updateData(req.body).then((msg) => {
        console.log(msg);
        res.redirect('/');
    }).catch((err) => {
        console.log(err + 'in /customer/update');
    })
});

// DELETE
router.post('/customer/delete', (req, res) => {
    DB.deleteData(req.body).then((msg) => {
        console.log(msg);
        res.redirect('/');
    }).catch((err) => {
        console.log(err + 'in /customer/delete');
    })
});

module.exports = router;