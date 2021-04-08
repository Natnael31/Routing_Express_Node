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
const meaddlewares = require('../meaddlewares/middlewares');

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

/* Callback triggers para enrutar parametros */
router.param('userId', meaddlewares.enrouteUser)
router.route('/trigger/user/:userId').get(Ctrl.showUserReq);

/* Controladores de ruta */
router.get('/twoHandlers', function (req, res, next) {
	console.log('Handler 1: the response will be sent by the next function ...');
	next();
}, Ctrl.greet );

router.get('/arrayHandlers', [meaddlewares.saySomething, meaddlewares.showMethodNUrl, Ctrl.greet])

/* Router API: instancia aislada de middleware y rutas (mini-aplicación) */
router.use(meaddlewares.showMethodNUrl);
router.get('/showMeaddleware', Ctrl.greet);

/* Expresiones regulares */
router.route(/.*fly$/).get( (req, res) => res.send('/.*fly$/') )

/*
Métodos de respuesta:
	res.download()    Devuelve archivo para ser descargado.
	res.end()         Finaliza el proceso de respuesta.
	res.json()        Devuelve JSON.
	res.jsonp()       Devuelve JSON que soporta JSONP.
	res.redirect()    Redirecciona la solicitud.
	res.render()      Renderiza una plantilla de página.
	res.send()        Devuelve una respuesta que puede ser de varios tipos.
	res.sendFile()    Envía un archivo en forma de flujo octet.
	res.sendStatus()  Formatea el estado de la respuesta y lo envía en el cuerpo de la misma.
	router.all('*', requireAuthentication, loadUser)
*/

module.exports = router;
