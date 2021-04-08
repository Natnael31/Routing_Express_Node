'use strict'
const router = require('express').Router(); // exportar routas y usarlas como middleware

const Ctrl = require('../controllers/controllers');

/* Rutas basicas */
router.get('/', Ctrl.greet); // normal route
router.route('/greet').get(Ctrl.greet);  // route method

/* Parametros */
router.route('/user/:userId/todo/:todoId').get(Ctrl.showParams);
router.route('/user/:userId([A-Za-z\\d]+)').get(Ctrl.showParams);
router.route('/flights/:from-:to').get(Ctrl.showParams);
router.route('/user/:user-:pass').get(Ctrl.showParams);
router.route('/user/:userId.:userPass').get(Ctrl.showParams);
router.route('/user').get(Ctrl.getUsers);

module.exports = router;
