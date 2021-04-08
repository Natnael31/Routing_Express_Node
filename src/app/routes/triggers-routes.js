const triggers = require('../triggers/triggers');
const Ctrl = require('../controllers/controllers');
var router = require('express').Router();

/* Callback triggers para enrutar parametros */
router.param('userId', triggers.enrouteUser) // Enrute the user request with the id param
router.route('/trigger/user/:userId').get(Ctrl.showUserReq);

module.exports = router;
