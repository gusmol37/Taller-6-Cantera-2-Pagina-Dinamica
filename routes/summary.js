/**
 * App que presenta una página dinámica
 * 
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-23
 */


const express = require('express');
const router = express.Router();

const Game = require('../models/Game')

/**
 * Arrow function to display summary of game
 */

router.post('/', (req, res, _next) => {

    const gameSummary= Game.findById(req.body.idGame);

        gameSummary
            .then(result => res.render('summary', {object: result}))
            .catch(error => console.log(error));

})

module.exports = router;