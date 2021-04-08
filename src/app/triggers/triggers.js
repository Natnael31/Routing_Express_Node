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
    }
};

module.exports = triggers;
