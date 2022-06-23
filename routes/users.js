/**
 * App que presenta una página dinámica
 * 
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-23
 */

const express = require('express');
const router = express.Router();

const Player = require('../models/Player')

router.get('/', (_req, res, _next) => {
    res.render('users' );
});

router.get('/add', (_req, res, _next) => {
    const data = Player.find();
    data
        .then((result => res.json(result)))
        .catch(error => console.log(error));
});

module.exports = router;
