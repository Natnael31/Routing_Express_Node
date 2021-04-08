const triggers = require('../triggers/triggers');
const Ctrl = require('../controllers/controllers');
const routerTrigg1 = require('express').Router(),
      routerTrigg2 = require('express').Router(),
      routerTrigg3 = require('express').Router();

/* Callback triggers para enrutar parametros */
routerTrigg1.param('userId', triggers.enrouteUser) // Enrute the user request with the id param
routerTrigg1.route('/trigger/:userId').get(Ctrl.showUserReq);

routerTrigg2.param(triggers.customBehavRoutParam) // customizing the behavior of router.param()
routerTrigg2.param('userId', '606e04ddf5e43646585ae761') // using the customized router.param()
routerTrigg2.route('/trigger/user/:userId').get(Ctrl.greet);

routerTrigg3.param(triggers.idFloatValid)
routerTrigg3.param('candId', Ctrl.toFloatValid)
routerTrigg3.route('/trigger/candidate/:candId').get(Ctrl.greet);

module.exports = { routerTrigg1, routerTrigg2, routerTrigg3};
