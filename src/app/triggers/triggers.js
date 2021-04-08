const User = require('../models/users-model');

const triggers = {
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
    customBehavRoutParam: function (param, option) {
        return function (req, res, next, val) {
            if (val === option) { //condiciona parametro
                console.log('Param trigger: ', param,
                    '\nVal trigger: ', val,
                    '\nOption trigger: ', option)
                next(); // avanza a la siguiente instruccion si es verdad
            } else
                res.sendStatus(403);
        }
    },
    idFloatValid: function (param, validator) {
        console.log('func 1 - param: ', param,
            '\nfunc 1 - validator: ', validator)
        // console.log('func(val): ',validator(10))
        return function (req, res, next, val) {
          console.log('func 2 - val: ', val,
            '\nvalidator(val): ', validator(val))
          if ( validator(val) )
            next()
          else
            res.sendStatus(403)
        }
    }
};

module.exports = triggers;
