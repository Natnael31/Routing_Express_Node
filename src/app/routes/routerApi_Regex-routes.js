'use strict'
const router = require('express').Router(); // exportar routas y usarlas como middleware

const Ctrl = require('../controllers/controllers');
const meaddlewares = require('../meaddlewares/middlewares');

/* Router API: instancia aislada de middleware y rutas (mini-aplicación) */
router.use(meaddlewares.showMethodNUrl);
router.get('/showMeaddleware', Ctrl.greet);

/* Expresiones regulares */
router.route(/.*fly$/).get( (req, res) => res.send('/.*fly$/') )

module.exports = router;
