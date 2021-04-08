/*
	Routing: respuesta del servidor a las solicitudes de URLs del cliente
	Métodos de routing: derivados de los que usa HTTP (GET, POST, etc.)
	URLs: caminos de las rutas
		Expresiones regulares: '?', '+', '*', '()', '.', '-'
		Escape de caracteres '[$]'
*/
'use strict'
const router = require('express').Router(); // exportar routas y usarlas como middleware

const Ctrl = require('../controllers/controllers');

/* Routes */
router.get('/', Ctrl.greet); // Normal route
router.route('/greet').get(Ctrl.greet)  // Route method

/* Parametros */
router.route('/user/:userId/todo/:todoId').get(Ctrl.showParams)
router.route('/user/:userId(\\d+)').get(Ctrl.showParams)
router.route('/flights/:from-:to').get(Ctrl.showParams)
router.route('/user/:user-:pass').get(Ctrl.showParams)
router.route('/user/:userId.:userPass').get(Ctrl.showParams)
router.route('/user/:userId.:userPass/todo/:todoId').get(Ctrl.showParams)

module.exports = router;
