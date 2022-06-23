/**
 * App que presenta una página dinámica
 * 
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-23
 */

const express = require('express');
const router = express.Router();

router.get('/', (_req, res, _next) => res.render('index'));

module.exports = router;
