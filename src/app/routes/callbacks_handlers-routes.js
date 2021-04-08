'use strict'
const router = require('express').Router(); // exportar routas y usarlas como middleware

const Ctrl = require('../controllers/controllers');
const meaddlewares = require('../meaddlewares/middlewares');

/* Controladores de ruta */
router.get('/twoHandlers', function (req, res, next) {
	console.log('Handler 1: the response will be sent by the next function ...');
	next();
}, Ctrl.greet );

router.get('/arrayHandlers', [meaddlewares.saySomething, meaddlewares.showMethodNUrl, Ctrl.greet])

module.exports = router;
