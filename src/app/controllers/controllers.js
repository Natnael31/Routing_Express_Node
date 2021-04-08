const User = require('../models/users-model');

const Ctrl = {
    greet:  (req, res) => res.send('Hi greetings from Ctrl->Routing'),
    showParams:  (req, res) => res.send({'Params': req.params}),
    getUsers: async (req, res) => {
        await User.find( (err, users) =>
            (err) ? res.status(500).send(err) : res.status(300).send(users) )
    },
    showUserReq: async (req, res) =>  res.status(300).send(req.user),
    toFloatValid: (id) => !isNaN(parseFloat(id)) && isFinite(id)
    
};

module.exports = Ctrl;