const User = require('../models/users-model');

const meaddlewares = {
    enrouteUser: async (req, res, next, id) => {
        console.log('Meaddleware-Trigger to route in param userId:', id);
        await User.findById(id, function (err, user) {
            if (err)
                next(err);
            else if (user) {
                req.user = user;
                next();
            } else
                next(new Error('failed to load user'));
        });
    },
    saySomething: function (req, res, next) {
        console.log('Meaddleware-saySomething: Hey this is a msg')
        next()
    },
    showMethodNUrl: function(req, res, next) {
        console.log(`Middleware-method: '${req.method}' url: '${req.url}'`)
        next();
    }
}

module.exports = meaddlewares;